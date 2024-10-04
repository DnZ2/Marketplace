import Button from "../../shared/UI/Button"
import { useGetCategoriesQuery, useGetProductsQuery } from "../../shared/redux/query/productsApi"
import { useAdminPageForm } from "./useAdminPageForm"
import SortSelector from "../../features/Sort/SortSelector"
import { Label } from "../../shared/UI/Form"
import CategorySelector from "../../features/Filters/CategorySelector/CategorySelector"
import PriceSelector from "../../features/Filters/PriceSelector/PriceSelector"
import useQueryParams from "../ProductsPage/useQueryParams"
import Loader from "../../shared/UI/Loader"
import ScrollButton from "../../features/ScrollButton"
import { useId } from "react"
import AdminProductCard from "./UI/Product/AdminProductCard"
function AdminPage() {
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
		handleChangeQueryPage,
		handleFilterByCategory,
		handleFilterByPrice,
		handleSortSelect,
		handleResetCategoryParam,
	} = useQueryParams()
	const {data: categories, isCategoriesLoading} = useGetCategoriesQuery()
	const {data, isLoading} = useGetProductsQuery({
		pageParam,
		limitParam,
		searchParam,
		sortParam,
		sortMethod,
		categoryParam,
		minPrice,
		maxPrice
	})
	const {
		category,
		errorMessage,
		handleInputCategory,
		handleInputMaxQuantity,
		handleInputPrice,
		handleInputTitle,
		handleInputDescription,
		handleInputDiscount,
		handleSubmit,
		maxQuantity,
		price,
		title,
		discount,
		description,
	} = useAdminPageForm()
	const categorySelectId = useId()
	const priceSelectId = useId()
	const sortSelectId = useId()
	if(isLoading || isCategoriesLoading){
		return <Loader />
	}
	const {products, pages, diapason} = data
  return (
    <div className='relative my-11'>
		<div className='container relative flex items-start gap-6'>
			<form className='sticky top-20 w-[20%] flex flex-col [&>input]:p-2 gap-3' action="submit" onSubmit={handleSubmit}>
				<input type="text" placeholder='Title' value={title} onChange={handleInputTitle}/>
				<input type="number" placeholder='Price' value={price} onChange={handleInputPrice}/>
				<input type="number" placeholder='Max Quantity' value={maxQuantity} onChange={handleInputMaxQuantity}/>
				<input type="text" placeholder='Category' value={category} onChange={handleInputCategory}/>
				<input type="number" placeholder='Discount' min={0} max={90} value={discount} onChange={handleInputDiscount}/>
				<textarea className="p-4 resize-none h-40" placeholder='Description...' value={description} maxLength={1000} onChange={handleInputDescription}/>
				{
					errorMessage &&<p className="text-red-700 bg-red-200">{errorMessage}</p>
				}
				<Button type='submit'>Add new product</Button>
			</form>
			<div className='flex flex-col gap-2'>
				<div autoComplete="off" className="w-full flex flex-col gap-4">
					<form className="w-full flex"  onSubmit={handleSearchQuery}>
						<input className="text-2xl rounded-s-xl p-2 w-full" type="search" name="search" placeholder="Query..."/>
						<button className="p-2 text-xl size-12 bg-gray-200 rounded-e-xl flex justify-center items-center" type="submit">S</button>
					</form>
					<div className="w-full flex gap-4 items-center">
						<div>
							<Label htmlFor={sortSelectId} className="pl-1 text-xs text-gray-400">Sorted by</Label>
							<SortSelector id={sortSelectId} sorting={handleSortSelect}/>
						</div>
						<div>
							<Label htmlFor={categorySelectId} className="pl-1 text-xs text-gray-400">Category</Label>
							<CategorySelector id={categorySelectId} filter={handleFilterByCategory} resetFilter={handleResetCategoryParam} categories={categories} saved={categoryParam}/>
						</div>
						<div>
							<Label htmlFor={priceSelectId} className="pl-1 text-xs text-gray-400">Price selector</Label>
							<PriceSelector id={priceSelectId} diapason={diapason} submit={handleFilterByPrice} />
						</div>
					</div>
				</div>
				<table className="flex flex-col divide-y-2 border-2 rounded-md">
					<thead>
						<tr className='[&>th]:p-2 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x-2'>
							<th>Product</th>
							<th>Price, $</th>
							<th>Discount, %</th>
							<th>Quantity</th>
							<th className="h-full"></th>
						</tr>
					</thead>
					<tbody className="divide-y-2">
						{products.map((item)=>
							<AdminProductCard key={item.id} data={item}/>
						)}
					</tbody>
				</table>
				<div className="flex justify-center gap-4 mt-8">
					{
						pages.map((item)=>
							<button onClick={handleChangeQueryPage} className={`${pageParam==item ?"bg-gray-300" : "bg-gray-200"} rounded-md size-8 flex justify-center items-center`} key={item}>{item}</button>
						)
					}
				</div>
			</div>
		</div>
		<ScrollButton />
	</div>
  )
}

export default AdminPage