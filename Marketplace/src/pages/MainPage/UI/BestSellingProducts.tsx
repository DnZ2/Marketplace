import CardListLayout from "../../../widgets/CardListLayout"
import Button from "../../../shared/UI/Button/Button"
import { useGetProductsQuery } from "../../../shared/redux/query/endpoints/productsApi"
import Loader from "../../../shared/UI/Loader"
import CardsWrapper from "../../../shared/UI/CardsWrapper"
import MainProductCard from "../../../widgets/MainProductCard"

const BestSellingProducts = () => {
    const {data, isLoading} = useGetProductsQuery({})
    if(isLoading){
        return <Loader/>
    }
    return (
        <CardListLayout title="This Month" subtitle="Best Selling Products" controls={<Button>View All</Button>}>
            <CardsWrapper>
                {data?.products?.map((item)=>
                    <MainProductCard key={item.id} data={item}/>
                )}
            </CardsWrapper>
        </CardListLayout>
    )
}

export default BestSellingProducts
