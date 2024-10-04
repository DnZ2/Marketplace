import Filters from "../../assets/filters-1-svgrepo-com.svg?react"
import { useGetCategoriesQuery, useLazyGetProductsQuery } from "../../shared/redux/query/productsApi"
import useQueryParams from "./useQueryParams"
import CategorySelector from "../../features/Filters/CategorySelector/CategorySelector"
import PriceSelector from "../../features/Filters/PriceSelector/PriceSelector"
import SortSelector from "../../features/Sort/SortSelector"
import Loader from "../../shared/UI/Loader"
import { useEffect, useState, useId } from "react"
import Button from "../../shared/UI/Button"
import CardsWrapper from "../../shared/UI/CardsWrapper"
import { Label } from "../../shared/UI/Form"
import MainProductCard from "../../widgets/MainProductCard"
const ProductsPage = () => {
	const {
		pageParam,
		limitParam,
		searchParam,
		sortParam,
		sortMethod,
		categoryParam,
		minPrice,
		maxPrice,
		handleSearchQuery,
		handleSortSelect,
		handleFilterByCategory,
		handleFilterByPrice,
		handleResetCategoryParam,
		handleChangeQueryPage
	} = useQueryParams()
	const [trigger, result] = useLazyGetProductsQuery({selectFromResult: (result)=>({
		pages: result?.data?.pages,
		diapason: result?.data?.diapason,
		isLoading: result.isLoading,
	})})
	const {data: categories, isLoading} = useGetCategoriesQuery()
	const [products, setProducts] = useState([])
	const categorySelectId = useId()
	const priceSelectId = useId()
	const sortSelectId = useId()
	const serverRequest = async (pageParam)=> {
		const {products} = await trigger({
			pageParam: pageParam,
			limitParam,
			searchParam,
			sortParam,
			sortMethod,
			categoryParam,
			minPrice,
			maxPrice}, true).unwrap()
		return products
	}
	const getProductsByQuery= async ()=>{
		window.scrollTo(0, 0);
		const products = await serverRequest(1)
		setProducts(products)
		handleChangeQueryPage(1)
	}
	const addMoreProducts = async ()=>{
		const products = await serverRequest(Number(pageParam)+1)
		setProducts((prev)=>[...prev, ...products])
		handleChangeQueryPage(Number(pageParam)+1)
	}
	const handleChangePage = async ({ target }) => {
		window.scrollTo(0, 0);
		const products = await serverRequest(target.innerHTML)
		setProducts(products)
		handleChangeQueryPage(target.innerHTML)
	};
	const [isOpen, setIsOpen] = useState(false)
	const handleToggleFilters = ()=>{
		setIsOpen(!isOpen)
	}
	useEffect(()=>{
		getProductsByQuery()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[searchParam,sortParam,sortMethod,categoryParam,minPrice,maxPrice])
	if(result.isLoading || isLoading){
		return <Loader />
	}
	const {pages, diapason} = result
  return (
		<div className="container my-11 flex flex-col gap-8">
			<div className="flex items-center gap-4">
				<div onClick={handleToggleFilters}>
					<Filters className="size-8" />
				</div>
				<form className="w-full flex" onSubmit={handleSearchQuery}>
					<input className="text-2xl rounded-s-xl p-2 w-full" type="search" name="search" placeholder="Query..."/>
					<button className="p-2 text-xl size-12 bg-gray-200 rounded-e-xl flex justify-center items-center" type="submit">S</button>
				</form>
			</div>
			{ isOpen &&
				<div className="w-full flex gap-4 items-center">
					<div>
						<Label for={sortSelectId} className="pl-1 text-xs text-gray-400">Sorted by</Label>
						<SortSelector id={sortSelectId} sorting={handleSortSelect}/>
					</div>
					<div>
						<Label for={categorySelectId} className="pl-1 text-xs text-gray-400">Category</Label>
						<CategorySelector id={categorySelectId} filter={handleFilterByCategory} resetFilter={handleResetCategoryParam} categories={categories} saved={categoryParam}/>
					</div>
					<div>
						<Label for={priceSelectId} className="pl-1 text-xs text-gray-400">Price selector</Label>
						<PriceSelector id={priceSelectId} diapason={diapason} submit={handleFilterByPrice} />
					</div>
				</div>
			}
			{
				products.length ?
				<>
					<CardsWrapper>
						{products.map((item)=>
							<MainProductCard key={item.id} data={item} />
						)}
					</CardsWrapper>
					{pages?.length>pageParam && <Button className="mx-auto" onClick={addMoreProducts}>Show More</Button>}
					<div className="flex justify-center gap-4">
					{
						pages?.map((item)=>
							<button onClick={handleChangePage} className={`${pageParam==item ?"bg-gray-300" : "bg-gray-200"} rounded-md size-8 flex justify-center items-center`} key={item}>{item}</button>
						)
					}
					</div>
				</>
				:
				<div>No product by this query</div>
			}

		</div>
  )
}

export default ProductsPage
