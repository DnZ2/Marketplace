import image from "assets/nophoto.png"
import PropTypes from 'prop-types';
import CartNumberInput from "./CartNumberInput";
import DeleteButton from "features/Favourite/UI/DeleteButton";
import { removeProductFromCart } from "shared/redux/slices/cartSlice";
import { useAppDispatch } from "shared/redux/store";
import CardsWrapper from "shared/UI/CardsWrapper";
import ProductImg from "entities/Product/UI/ProductImg";

function CartProductCard({src=image, data}) {
    const dispatch = useAppDispatch()
    return (
        <CardsWrapper layout="cart">
            <div className="flex items-center gap-5">
                <ProductImg className="h-[40px] object-contain" src={src} alt="img" />
                <h2>{data.title}</h2>
            </div>
            <p>${data.price}</p>
            <CartNumberInput data={data}/>
            <p>${data.subtotal}</p>
            <DeleteButton onClick={()=>dispatch(removeProductFromCart(data))} type="secondary"/>
        </CardsWrapper>
    )
}
CartProductCard.propTypes={
    src: PropTypes.string,
    data: PropTypes.object,
}
export default CartProductCard
