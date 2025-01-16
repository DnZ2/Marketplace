import NoPhoto from "assets/nophoto.png"
import FavouriteButton from 'features/Favourite/UI/ToggleFavouriteButton'
import ReviewShowCase from "entities/Review/ReviewShowCase";
import { useAppDispatch,useAppSelector } from "shared/redux/store";
import { addProductToCart } from 'shared/redux/slices/cartSlice';
import {BottomSideButton,ProductCard,ProductBadge,ProductFooter,ProductImg,ProductLink,ProductMain,ProductPrice,TopLeftSide,TopRightSide} from "entities/Product/UI";
import { Product } from "shared/redux/query/endpoints/productsApi";
import { FC, memo, useMemo } from "react";

interface Props {
	data: Product
}

const MainProductCard: FC<Props> = ({data}) => {
    const isProductInCart = useAppSelector(state=>state.cart.cartProducts.find((product)=>product.id===data.id))
    const dispatch = useAppDispatch()
    const product = useMemo(()=>data,[data])
    const {title, discount, price, currentPrice, rating, id, createdAt} = product
    return (
        <ProductCard>
            <ProductMain className="[&>button]:hover:bottom-0">
                <ProductImg className="w-[60%]" src={NoPhoto}/>
                <TopLeftSide>
                    <ProductBadge isDiscount={discount>0}>-{discount}%</ProductBadge>
                    <ProductBadge isNew={Date.now() - createdAt.timestamp > 12096000}>NEW</ProductBadge>
                </TopLeftSide>
                <TopRightSide>
                    <FavouriteButton variant="circle" data={product}/>
                </TopRightSide>
                <BottomSideButton isProductInCart={isProductInCart} onClick={()=>dispatch(addProductToCart(data))}/>
            </ProductMain>
            <ProductFooter>
                <ProductLink id={id}>{title}</ProductLink>
                <ProductPrice currentPrice={currentPrice} price={price}/>
                <ReviewShowCase rating={rating}/>
            </ProductFooter>
        </ProductCard>
    )
}

export default memo(MainProductCard)
