import nophoto from "assets/nophoto.png"
import CardsWrapper from '../../../../../shared/UI/CardsWrapper';
import { NavLink } from 'react-router-dom';
import ProductImg from '../../../../../entities/Product/UI/ProductImg';
import { Product } from "../../../../../shared/redux/query/endpoints/productsApi";
import { FC } from "react";

interface Props {
	img?: string
	data: Product
	id: string
}

const SearchProductCard: FC<Props> = ({img=nophoto, data, id}) => {
    return (
        <NavLink id={id} to={`products/${data.id}`} className="focus:bg-[#e0e0e0] focus:outline-none hover:bg-[#e0e0e0]">
            <CardsWrapper layout="search">
                <ProductImg src={img} alt="" />
                <span className="truncate">
                    {data.title}
                </span>
                {data.discount
                    ?
                    <span className="text-lg font-bold text-[#DB4444]">${data.currentPrice}</span>
                    :
                    <span className="text-lg font-bold">${data.currentPrice}</span>
                }
            </CardsWrapper>
        </NavLink>
    )
}
export default SearchProductCard
