import nophoto from "../../../../../assets/nophoto.png"
import DeleteButton from "../../../../../features/Wishlist/UI/DeleteFavouriteButton";
import { useAppDispatch } from "../../../../../shared/redux/store"
import { removeProductFromCart } from "../../../../../shared/redux/slices/cartSlice";
import CardsWrapper from "../../../../../shared/UI/CardsWrapper";
import {ProductImg} from "../../../../../entities/Product/UI";
import { FC, memo } from "react";
import { CartProduct } from "../../../../../shared/redux/slices/cartSlice";

interface Props {
	data: CartProduct
	image?: string
}

const CartDropdownProductCard: FC<Props> = ({image=nophoto, data}) => {
    const dispatch = useAppDispatch()
    return (
        <CardsWrapper layout="cart-dropdown">
            <ProductImg src={image} alt="" />
            <div className="flex gap-2 items-center">
                <span>{data.title}</span>
                <span className="text-xs text-gray-400">{data.quantity} pcs.</span>
            </div>
            <span className="text-lg font-bold">${data.subtotal}</span>
            <DeleteButton onClick={()=>{dispatch(removeProductFromCart(data))}}/>
        </CardsWrapper>
    )
}

export default memo(CartDropdownProductCard)