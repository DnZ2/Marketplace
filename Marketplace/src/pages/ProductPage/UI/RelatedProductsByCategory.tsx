import CardListLayout from "../../../widgets/CardListLayout"
import { Product, useGetProductsQuery } from "../../../shared/redux/query/endpoints/productsApi";
import Loader from "../../../shared/UI/Loader";
import CardsWrapper from "../../../shared/UI/CardsWrapper";
import MainProductCard from "../../../widgets/MainProductCard";
import { FC } from "react";

interface Props {
    product: Product
}

const RelatedProductsByCategory: FC<Props> = ({product}) => {
    const {data, isLoading} = useGetProductsQuery({category: product?.category, limit: "4"}, {skip: !product})
    if(isLoading){
        return <Loader />
    }
    return (
        <section className="w-full">
            {
                data?.products.length &&
                    <CardListLayout title="Related item">
                        <CardsWrapper>
                            {data?.products?.map((item)=>item.id!==product.id &&
                            <MainProductCard
                                key={item.id}
                                data={item}
                            />
		                )}
                        </CardsWrapper>
                    </CardListLayout>
            }
        </section>
    )
}

export default RelatedProductsByCategory
