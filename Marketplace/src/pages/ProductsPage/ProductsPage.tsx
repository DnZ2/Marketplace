import { useGetProductsQuery } from "shared/redux/query/endpoints/productsApi"
import Loader from "shared/UI/Loader"
import ProductsList from "./UI/ProductsList"
import { ProductPagination } from "features/ProductQueryActions/UI"
import useQueryParams from "features/ProductQueryActions/useQueryParams"
import { useMemo } from "react"
import ProductQueryActions from "widgets/ProductQueryActions"

export const ProductsPage = () => {
    const {
        params,
        actions
    } = useQueryParams()
    const {data, isLoading: isProductsLoading} = useGetProductsQuery({...params})

    const memoizedDiapason = useMemo(()=>data?.diapason, [data?.diapason.to, data?.diapason.from])
    if(isProductsLoading || !data || !memoizedDiapason){
        return <Loader />
    }

    const { pages, products} = data
    return (
        <div className="container my-11 flex flex-col gap-8">
            <ProductQueryActions params={params} actions={actions}/>
            <ProductsList products={products}/>
            <ProductPagination totalPages={pages} pageParam={params.page} onClick={actions.onChangePage}/>
        </div>
    )
}


