import useQueryParams from "../../../features/ProductQueryActions/useQueryParams"
import PostProductForm from "./Form/PostProductForm"
import AdminProductsList from "./Product/List/AdminProductsList"
import ProductQueryActions from "widgets/ProductQueryActions"
export const ProductsManager=()=> {
    const {
        params, actions
    } = useQueryParams({initialLimit: "10", isVirtualized: true})

    return (
        <div className='flex items-start gap-6'>
            <PostProductForm />
            <div className='flex flex-col gap-2'>
                <ProductQueryActions params={params} actions={actions}/>
                <AdminProductsList params={params}/>
            </div>
        </div>
    )
}