import { useGetProductsQuery } from "../../shared/redux/query/endpoints/productsApi"
import { useGetCategoriesQuery } from "../../shared/redux/query/endpoints/categoriesApi"
import { Label } from "../../shared/UI/Form"
import useQueryParams from "../../features/ProductQueryActions/useQueryParams"
import Loader from "../../shared/UI/Loader"
import ScrollButton from "../../features/ScrollButton/ScrollButton"
import { useId } from "react"
import AdminPageForm from "./Form/AdminPageForm"
import AdminProductsTable from "./Table/AdminProductsTable"
import ProductPagination from "features/ProductQueryActions/UI/ProductPagination"
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
    } = useQueryParams()
    const {data: categories, isLoading: isCategoriesLoading} = useGetCategoriesQuery()
    const {data, isLoading: isProductsLoading} = useGetProductsQuery({
        pageParam,
        limitParam,
        searchParam,
        sortParam,
        sortMethod,
        categoryParam,
        minPrice,
        maxPrice
    })
    const categorySelectId = useId()
    const priceSelectId = useId()
    const sortSelectId = useId()
    if(isProductsLoading || isCategoriesLoading || !data){
        return <Loader />
    }
    const  {products, pages, diapason} =data
    return (
        <div className='relative my-11'>
            <div className='container relative flex items-start gap-6'>
                <AdminPageForm categories={categories} />
                <div className='flex flex-col gap-2'>
                    <div className="w-full flex flex-col gap-4">
                        <form className="w-full flex" onSubmit={handleSearchQuery}>
                            <input className="text-2xl rounded-s-xl p-2 w-full" type="search" name="search" placeholder="Query..."/>
                            <button className="p-2 text-xl size-12 bg-gray-200 rounded-e-xl flex justify-center items-center" type="submit">S</button>
                        </form>
                        <div className="w-full flex gap-4 items-center">
                            <div>
                                <Label htmlFor={sortSelectId} className="pl-1 text-xs text-gray-400">Sorted by</Label>
                            </div>
                            <div>
                                <Label htmlFor={categorySelectId} className="pl-1 text-xs text-gray-400">Category</Label>
                            </div>
                            <div>
                                <Label htmlFor={priceSelectId} className="pl-1 text-xs text-gray-400">Price selector</Label>
                            </div>
                        </div>
                    </div>
                    <AdminProductsTable data={products} categories={categories}/>
                    <ProductPagination totalPages={pages}/>
                </div>
            </div>
            <ScrollButton />
        </div>
    )
}

export default AdminPage