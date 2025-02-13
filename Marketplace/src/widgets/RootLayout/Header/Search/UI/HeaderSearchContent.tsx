import { FC } from "react"
import SearchProductCard from "./SearchProductCard"
import { Product } from "../../../../../shared/redux/query/endpoints/productsApi"

interface Props {
	products: Product[]
}

const HeaderSearchContent: FC<Props> = ({products}) => {
    return (
        <div className="absolute top-[105%] bg-[#F5F5F5]">
            {
                products.map((item, index)=>
                    <SearchProductCard id={`${index}`} key={item.id} data={item}/>
                )
            }
        </div>
    )
}
export default HeaderSearchContent
