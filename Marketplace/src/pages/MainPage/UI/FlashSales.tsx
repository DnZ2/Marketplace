import CardListLayout from "../../../widgets/CardListLayout";
import Navigation from "./Navigation";
import { useGetProductsQuery } from "../../../shared/redux/query/endpoints/productsApi";
import Loader from "../../../shared/UI/Loader";
const FLashSales = () => {
    const {data, isLoading} = useGetProductsQuery({})
    if(isLoading){
        return <Loader />
    }
    return (
        <CardListLayout
            title="Today’s"
            subtitle="Flash Sales"
            controls={<Navigation/>}
        >
            {data?.products?.map((item)=>
                item.title
            )}
        </CardListLayout>
    )
}

export default FLashSales
