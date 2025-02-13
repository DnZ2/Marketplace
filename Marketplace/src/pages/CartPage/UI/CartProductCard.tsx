import image from "assets/nophoto.png"
import CartNumberInput from "./CartNumberInput";
import DeleteButton from "features/Wishlist/UI/DeleteFavouriteButton";
import { CartProduct, removeProductFromCart } from "shared/redux/slices/cartSlice";
import { useAppDispatch } from "shared/redux/store";
import CardsWrapper from "shared/UI/CardsWrapper";
import ProductImg from "entities/Product/UI/ProductImg";

interface Props{
    data: CartProduct
}

function CartProductCard({data}: Props) {
    const dispatch = useAppDispatch()
    return (
        <CardsWrapper layout="cart">
            <div className="flex items-center gap-5">
                <ProductImg className="h-[40px] object-contain" src={image} alt="img" />
                <h2>{data.title}</h2>
            </div>
            <p>${data.price}</p>
            <CartNumberInput data={data}/>
            <p>${data.subtotal}</p>
            <DeleteButton onClick={()=>dispatch(removeProductFromCart(data))}/>
        </CardsWrapper>
    )
}

export default CartProductCard
