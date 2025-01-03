import { useGetProductsQuery } from "shared/redux/query/endpoints/productsApi"
import Loader from "shared/UI/Loader"
import { Label } from "shared/UI/Form"
import ProductsList from "./UI/ProductsList"
import { ProductFilterByCategory,ProductPagination,ProductPriceSelector,ProductSearchForm,ProductSortSelector,ShowMoreButton } from "features/ProductQueryActions/UI"
import useQueryParams from "features/ProductQueryActions/useQueryParams"
import { useId } from "react"

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
    } = useQueryParams()
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

    const categorySelectorId = useId()
    const sortSelectorId = useId()
    const priceSelectorId = useId()

    if(isProductsLoading || !data){
        return <Loader />
    }

    const {diapason, pages, products} = data

    return (
        <div className="container my-11 flex flex-col gap-8">
            <ProductSearchForm />
            <div className="w-full flex gap-4 items-center">
                <div>
                    <Label htmlFor={sortSelectorId} className="pl-1 text-xs text-gray-400">Sorted by</Label>
                    <ProductSortSelector id={sortSelectorId}/>
                </div>
                <div>
                    <Label htmlFor={categorySelectorId} className="pl-1 text-xs text-gray-400">Category</Label>
                    <ProductFilterByCategory id={categorySelectorId}/>
                </div>
                <div>
                    <Label htmlFor={priceSelectorId} className="pl-1 text-xs text-gray-400">Price selector</Label>
                    <ProductPriceSelector id={priceSelectorId} diapason={diapason}/>
                </div>
            </div>
            <ProductsList products={products}/>
            <ShowMoreButton hasMore={pageParam<pages}/>
            <ProductPagination totalPages={pages}/>
        </div>
    )
}

export default ProductsPage
