import Filters from "../../assets/filters-1-svgrepo-com.svg?react"
import { useGetProductsQuery } from "../../shared/redux/query/productsApi"
import ProductCardLayout from "../../entities/Product/UI/ProductCardLayout"
import useQueryParams from "./useQueryParams"
import CategorySelector from "../../features/Filters/CategorySelector"
import PriceSelector from "../../features/Filters/PriceSelector"
import SortSelector from "../../features/Sort/SortSelector"
import Loader from "../../shared/UI/Loader"
import { useState } from "react"

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
		handleChangePage,
		handleSortSelect,
		handleFilterByCategory,
		handleFilterByPrice,
	} = useQueryParams()
	const {data, isLoading } = useGetProductsQuery({
		pageParam,
		limitParam,
		searchParam,
		sortParam,
		sortMethod,
		categoryParam,
		minPrice,
		maxPrice
	})
	const [isOpen, setIsOpen] = useState(false)
	if(isLoading){
		return <Loader />
	}
	const {products, pages, diapason} = data
  return (
		<div className="container my-11 flex flex-col gap-4">
			<div className="flex items-center gap-4">
				<div onClick={()=>setIsOpen(!isOpen)}>
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
				data.products.length ? <>
					<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-14 gap-x-7">
						{products?.map((item)=>
							<ProductCardLayout key={item.id} data={item} />
						)}
					</div>
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
