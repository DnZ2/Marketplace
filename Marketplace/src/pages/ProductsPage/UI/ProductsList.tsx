import { FC } from "react"
import { Product } from "shared/redux/query/endpoints"
import CardsWrapper from "shared/UI/CardsWrapper"
import MainProductCard from "widgets/MainProductCard"

interface Props {
    products: Product[]
}

const ProductsList: FC<Props> = (props) => {
    const {products} = props

    if(!products?.length) return <div>No product by this query</div>

    return (
        <CardsWrapper>
            {products.map((item)=>
                <MainProductCard key={item.id} data={item} />
            )}
        </CardsWrapper>
    )
}

export default ProductsList