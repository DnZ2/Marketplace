import { useGetProductsQuery } from "../../shared/redux/query/endpoints/productsApi"
import useQueryParams from "../../features/ProductQueryActions/useQueryParams"
import Loader from "../../shared/UI/Loader"
import PostProductForm from "./Form/PostProductForm"
import AdminProductsList from "./Product/AdminProductsList"
import ProductQueryActions from "widgets/ProductQueryActions"
export const AdminPage=()=> {
    const {
        params, actions
    } = useQueryParams()
    const {data, isLoading} = useGetProductsQuery({...params, limit: "10"})

    if(isLoading || !data){
        return <Loader />
    }
    console.log(data)

    return (
        <div className='relative my-11'>
            <div className='container relative flex items-start gap-6'>
                <PostProductForm />
                <div className='flex flex-col gap-2'>
                    <ProductQueryActions params={{...params, diapason: data.diapason}} actions={actions}/>
                    <AdminProductsList hasNextPage={data.pages>params.page} loadMore={actions.onShowMore} data={data.products}/>
                </div>
            </div>
        </div>
    )
}