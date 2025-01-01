import { useId } from "react"
import { useGetProductsQuery } from "../../shared/redux/query/endpoints/productsApi"
import { useGetCategoriesQuery } from "../../shared/redux/query/endpoints/categoriesApi"
import useQueryParams from "../../features/ProductQueryActions/useQueryParams"
import CategorySelector from "../../features/Filters/CategorySelector"
import PriceSelector from "../../features/Filters/PriceSelector/UI/PriceSelector"
import SortSelector from "../../features/Sort/SortSelector"
import Loader from "../../shared/UI/Loader"
import { Label } from "../../shared/UI/Form"
import ProductsList from "./UI/ProductsList"
import ProductPagination from "features/ProductQueryActions/UI/ProductPagination"
import ShowMoreButton from "features/ProductQueryActions/UI/ShowMoreButton"
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
        handleFilterByCategory,
        handleResetCategoryParam,
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
    const {data: categories} = useGetCategoriesQuery()
    const categorySelectId = useId()
    const priceSelectId = useId()
    const sortSelectId = useId()

    if(isLoading || !data){
        return <Loader />
    }
    const {products, pages, diapason} = data
    return (
        <div className="container my-11 flex flex-col gap-8">
            <form className="w-full flex" onSubmit={handleSearchQuery}>
                <input className="text-2xl rounded-s-xl p-2 w-full" type="search" name="search" placeholder="Query..."/>
                <button className="p-2 text-xl size-12 bg-gray-200 rounded-e-xl flex justify-center items-center" type="submit">S</button>
            </form>
            <div className="w-full flex gap-4 items-center">
                <div>
                    <Label htmlFor={sortSelectId} className="pl-1 text-xs text-gray-400">Sorted by</Label>
                    <SortSelector id={sortSelectId}/>
                </div>
                <div>
                    <Label htmlFor={categorySelectId} className="pl-1 text-xs text-gray-400">Category</Label>
                    <CategorySelector className="p-2" id={categorySelectId} filter={handleFilterByCategory} resetFilter={handleResetCategoryParam} categories={categories} saved={categoryParam}/>
                </div>
                <div>
                    <Label htmlFor={priceSelectId} className="pl-1 text-xs text-gray-400">Price selector</Label>
                    <PriceSelector id={priceSelectId} diapason={diapason} />
                </div>
            </div>
            <ProductsList products={products}/>
            <ShowMoreButton hasMore={pageParam<pages}/>
            <ProductPagination totalPages={pages}/>
        </div>
    )
}

export default ProductsPage
