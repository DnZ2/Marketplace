import PropTypes from "prop-types";
import NoPhoto from "../../../assets/nophoto.png"
import { useAppDispatch, useAppSelector } from "../../../shared/redux/store";
import { addProductToCart } from '../../../shared/redux/slices/cartSlice';
import { removeProductFromFavourite } from '../../../shared/redux/slices/favouriteSlice';
import {BottomSideButton,ProductCard,ProductBadge,ProductFooter,ProductImg,ProductLink,ProductMain,ProductPrice,TopLeftSide,TopRightSide} from "../../../entities/Product/UI";
import DeleteButton from "../../../features/Favourite/UI/DeleteButton";

const WishlistProductCard = ({image=NoPhoto, data}) => {
    const isProductInCart = useAppSelector(state=>state.cart.cartProducts.find((product)=>product.id===data.id))
    const dispatch = useAppDispatch()

    const {title, discount, price, currentPrice, id, createdAt} = data
    return (
        <ProductCard>
            <ProductMain className="[&>button]:hover:bottom-0">
                <ProductImg className="w-[60%]" src={image}/>
                <TopLeftSide>
                    <ProductBadge isDiscount={discount>0}>-{discount}%</ProductBadge>
                    <ProductBadge isNew={createdAt}>NEW</ProductBadge>
                </TopLeftSide>
                <TopRightSide>
                    <DeleteButton variant="circle" onClick={()=>dispatch(removeProductFromFavourite(data))}/>
                </TopRightSide>
                <BottomSideButton isProductInCart={isProductInCart} onClick={()=>dispatch(addProductToCart(data))}/>
            </ProductMain>
            <ProductFooter>
                <ProductLink id={id}>{title}</ProductLink>
                <ProductPrice currentPrice={currentPrice} price={price}></ProductPrice>
            </ProductFooter>
        </ProductCard>
    )
}
WishlistProductCard.propTypes={
    image: PropTypes.string,
    data: PropTypes.object,
}
export default WishlistProductCard