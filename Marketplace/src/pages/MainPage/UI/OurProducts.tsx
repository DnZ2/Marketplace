import CardListLayout from "../../../widgets/CardListLayout"
import { useGetProductsQuery } from "../../../shared/redux/query/endpoints/productsApi"
import Loader from "../../../shared/UI/Loader"
import CardsWrapper from "../../../shared/UI/CardsWrapper"
import MainProductCard from "../../../widgets/MainProductCard"
const OurProducts = () => {
    const {data, isLoading} = useGetProductsQuery({})
    if(isLoading){
        return <Loader />
    }
    return (
        <CardListLayout title="Our Products" subtitle="Explore Our Products">
            <CardsWrapper>
                {data?.products?.map((item)=>
                    <MainProductCard key={item.id} data={item}/>
                )}
            </CardsWrapper>
        </CardListLayout>
    )
}

export default OurProducts
