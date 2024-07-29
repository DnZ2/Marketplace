import Filters from "../../assets/filters-1-svgrepo-com.svg?react"
import { useLazyGetProductsQuery } from "../../shared/redux/query/productsApi"
import MainProductLayout from "../../entities/Product/UI/MainProductLayout"
import useQueryParams from "./useQueryParams"
import CategorySelector from "../../features/Filters/CategorySelector/CategorySelector"
import PriceSelector from "../../features/Filters/PriceSelector/PriceSelector"
import SortSelector from "../../features/Sort/SortSelector"
import Loader from "../../shared/UI/Loader"
import { useEffect, useState } from "react"
import Button from "../../shared/UI/Button"
import { useSearchParams } from "react-router-dom"
const ProductsPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const pageParam = searchParams.get("page") || 1;
	const {
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
	} = useQueryParams()
	const [trigger, result] = useLazyGetProductsQuery({selectFromResult: (result)=>({
		pages: result?.data?.pages,
		diapason: result?.data?.diapason,
		isLoading: result.isLoading,
	})})
	const [products, setProducts] = useState([])
	const getProductsByQuery=async()=>{
		const {products} = await trigger({
			pageParam: 1,
			limitParam,
			searchParam,
			sortParam,
			sortMethod,
			categoryParam,
			minPrice,
			maxPrice}, true).unwrap()
		setProducts(products)
	}
	const addMoreProducts = async()=>{
		setSearchParams({
			...Object.fromEntries(searchParams),
			page: Number(pageParam)+1,
		});
		const {products} = await trigger({
			pageParam: Number(pageParam)+1,
			limitParam,
			searchParam,
			sortParam,
			sortMethod,
			categoryParam,
			minPrice,
			maxPrice}, true).unwrap()
		setProducts((prev)=>[...prev, ...products])
	}
	const handleChangePage = async({ target }) => {
		window.scrollTo(0, 0);
		setSearchParams({
			...Object.fromEntries(searchParams),
			page: target.innerHTML,
		});
		const {products} = await trigger({
			pageParam: target.innerHTML,
			limitParam,
			searchParam,
			sortParam,
			sortMethod,
			categoryParam,
			minPrice,
			maxPrice}, true).unwrap()
		setProducts(products)
	};
	const [isOpen, setIsOpen] = useState(false)
	const handleToggleFilters = ()=>{
		setIsOpen(!isOpen)
	}
	useEffect(()=>{
		getProductsByQuery()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[searchParam,sortParam,sortMethod,categoryParam,minPrice,maxPrice])
	if(result.isLoading){
		return <Loader />
	}
	const {pages, diapason} = result
  return (
		<div className="container my-11 flex flex-col gap-4">
			<div className="flex items-center gap-4">
				<div onClick={handleToggleFilters}>
					<Filters className="size-8" />
				</div>
				<form className="w-full flex" onSubmit={handleSearchQuery}>
					<input className="text-2xl rounded-s-xl p-2 w-full" type="search" name="search" placeholder="Query..."/>
					<button className="p-2 text-xl size-12 bg-gray-200 rounded-e-xl flex justify-center items-center" type="submit">S</button>
				</form>
			</div>
			{ isOpen ?
				<>
				<div className="w-full flex gap-4 items-center">
				<CategorySelector pickOption={handleFilterByCategory} queryParam={categoryParam}/>
				<SortSelector pickOption={handleSortSelect}/>
				</div>
				<PriceSelector diapason={diapason} submit={handleFilterByPrice} />
				</>
				: null
			}
				{
				products.length ?
				<>
					<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] justify-items-center gap-y-14 gap-x-7">
						{products.map((item)=>
							<MainProductLayout key={item.id} data={item} />
						)}
					</div>
					{!(pages?.length<=pageParam) && <Button onClick={addMoreProducts}>Show More</Button>}
					<div className="flex justify-center gap-4">
					{
						pages?.map((item)=>{
							return <button onClick={handleChangePage} className={`${pageParam==item ?"bg-gray-300" : "bg-gray-200"} rounded-md size-8 flex justify-center items-center`} key={item}>{item}</button>
						})
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
