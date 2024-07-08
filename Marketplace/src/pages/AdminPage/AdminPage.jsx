import Button from "../../shared/UI/Button"
import { useGetProductsQuery } from "../../shared/redux/query/productsApi"
import AdminCardProduct from '../../entities/Product/UI/AdminCardProduct'
import { useAdminPageForm } from "./useAdminPageForm"
import SortButton from "../../features/Sort/SortButton"
import CategorySelector from "../../features/Filters/CategorySelector"
import PriceSelector from "../../features/Filters/PriceSelector"
import useQueryParams from "../ProductsPage/useQueryParams"
import Loader from "../../shared/UI/Loader"

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
		sortQuery,
		handleSearchQuery,
		handleChangePage,
		handleSort,
		handleFilterByCategory,
		handleFilterByPrice,
	} = useQueryParams()
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
		handleSubmit,
		maxQuantity,
		price,
		title
	} = useAdminPageForm()
	if(isLoading){
		return <Loader />
	}
	const {products, pages, diapason} = data
  return (
    <div className='relative my-11'>
		<div className='container relative flex items-start'>
			<form className='sticky top-20 w-[20%]' action="submit" onSubmit={handleSubmit}>
				<input type="text" placeholder='title' value={title} onChange={handleInputTitle}/>
				<input type="number" placeholder='price' value={price} onChange={handleInputPrice}/>
				<input type="number" placeholder='maxQuantity' value={maxQuantity} onChange={handleInputMaxQuantity}/>
				<input type="text" placeholder='category' value={category} onChange={handleInputCategory}/>
				{
					errorMessage &&<p className="text-red-700 bg-red-200">{errorMessage}</p>
				}
				<Button type='submit'>Add new product</Button>
			</form>
			<div className='flex flex-col gap-2 w-[80%]'>
				<div autoComplete="off" className="w-full flex flex-col gap-4">
					<form className="w-full flex"  onSubmit={handleSearchQuery}>
						<input className="text-2xl rounded-s-xl p-2 w-full" type="search" name="search" placeholder="Query..."/>
						<button className="p-2 text-xl size-12 bg-gray-200 rounded-e-xl flex justify-center items-center" type="submit">S</button>
					</form>
					<div className="w-full flex items-center justify-between">
						<CategorySelector pickOption={handleFilterByCategory} queryParam={categoryParam}/>
						<PriceSelector diapason={diapason} submit={handleFilterByPrice} />
					</div>
				</div>
				<div className='rounded-md grid grid-cols-[30%_15%_15%_15%_10%_15%] [&>button]:py-4 pl-7 pr-4 shadow-[0_0_4px_1px_#dddddd] items-center bg-[#DDDDDD]'>
					<SortButton id="title" sortQuery={sortQuery} sortMethod={sortMethod} onClick={handleSort}>Product</SortButton>
					<SortButton id="price" sortQuery={sortQuery} sortMethod={sortMethod} onClick={handleSort}>Price, $</SortButton>
					<SortButton id="discount" sortQuery={sortQuery} sortMethod={sortMethod} onClick={handleSort}>Discount, %</SortButton>
					<SortButton id="maxQuantity" sortQuery={sortQuery} sortMethod={sortMethod} onClick={handleSort}>Quantity</SortButton>
					<span>Status</span>
				</div>
				{products.map((item)=>{
					return <AdminCardProduct key={item.id} data={item}/>
				})}
				<div className="flex justify-center gap-4 mt-8">
					{
						pages.map((item)=>{
							return <button onClick={handleChangePage} className={`${pageParam==item ?"bg-gray-300" : "bg-gray-200"} rounded-md size-8 flex justify-center items-center`} key={item}>{item}</button>
						})
					}
				</div>
			</div>
		</div>
	</div>
  )
}

export default AdminPage