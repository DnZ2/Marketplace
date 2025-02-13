import NoPhoto from "assets/nophoto.png"
import FavouriteButton from 'features/Wishlist/UI/ToggleFavouriteButton'
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
    return (
        <ProductCard>
            <ProductMain className="[&>button]:hover:bottom-0">
                <ProductImg className="w-[60%]" src={NoPhoto}/>
                <TopLeftSide>
                    <ProductBadge isDiscount={product.discount>0}>-{product.discount}%</ProductBadge>
                    <ProductBadge isNew={Date.now() - product.createdAt.timestamp > 12096000}>NEW</ProductBadge>
                </TopLeftSide>
                <TopRightSide>
                    <FavouriteButton variant="circle" data={product}/>
                </TopRightSide>
                <BottomSideButton isProductInCart={isProductInCart} onClick={()=>dispatch(addProductToCart(product))}/>
            </ProductMain>
            <ProductFooter>
                <ProductLink id={product.id}>{product.title}</ProductLink>
                <ProductPrice currentPrice={product.currentPrice} price={product.price}/>
                <ReviewShowCase rating={product.rating}/>
            </ProductFooter>
        </ProductCard>
    )
}

export default memo(MainProductCard)
