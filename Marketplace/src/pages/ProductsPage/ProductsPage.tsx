import { useGetProductsQuery } from "shared/redux/query/endpoints/productsApi"
import Loader from "shared/UI/Loader"
import { Label } from "shared/UI/Form"
import ProductsList from "./UI/ProductsList"
import { ProductFilterByCategory,ProductPagination,ProductPriceSelector,ProductSearchForm,ProductSortSelector } from "features/ProductQueryActions/UI"
import useQueryParams from "features/ProductQueryActions/useQueryParams"
import { useId, useMemo } from "react"

export const ProductsPage = () => {
    const {
        params,
        actions
    } = useQueryParams()
    const {data, isLoading: isProductsLoading} = useGetProductsQuery({...params})

    const categorySelectorId = useId()
    const sortSelectorId = useId()
    const priceSelectorId = useId()
    const memoizedDiapason = useMemo(()=>data?.diapason, [data?.diapason.to, data?.diapason.from])
    if(isProductsLoading || !data || !memoizedDiapason){
        return <Loader />
    }

    const { pages, products} = data
    return (
        <div className="container my-11 flex flex-col gap-8">
            <ProductSearchForm onSubmit={actions.onSearch} />
            <div className="w-full flex gap-4 items-center">
                <div>
                    <Label htmlFor={sortSelectorId} className="pl-1 text-xs text-gray-400">Sorted by</Label>
                    <ProductSortSelector onSort={actions.onSort} id={sortSelectorId}/>
                </div>
                <div>
                    <Label htmlFor={categorySelectorId} className="pl-1 text-xs text-gray-400">Category</Label>
                    <ProductFilterByCategory category={params.category} onFilterByCategory={actions.onFilterByCategory} onResetCategory={actions.onResetCategory} id={categorySelectorId}/>
                </div>
                <div>
                    <Label htmlFor={priceSelectorId} className="pl-1 text-xs text-gray-400">Priceselector</Label>
                    <ProductPriceSelector onFilterByPrice={actions.onFilterByPrice} id={priceSelectorId} diapason={memoizedDiapason}/>
                </div>
            </div>
            <ProductsList products={products}/>
            <ProductPagination totalPages={pages} pageParam={params.page} onClick={actions.onChangePage}/>
        </div>
    )
}


