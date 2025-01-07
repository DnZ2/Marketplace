import NoPhoto from "assets/nophoto.png"
import FavouriteButton from 'features/Favourite/UI/FavouriteButton'
import ReviewShowCase from "entities/Review/ReviewShowCase";
import { useAppDispatch,useAppSelector } from "shared/redux/store";
import { addProductToCart } from 'shared/redux/slices/cartSlice';
import { addProductToFavourite, removeProductFromFavourite } from 'shared/redux/slices/favouriteSlice';
import {BottomSideButton,ProductCard,ProductBadge,ProductFooter,ProductImg,ProductLink,ProductMain,ProductPrice,TopLeftSide,TopRightSide} from "entities/Product/UI";
import { Product } from "shared/redux/query/endpoints/productsApi";
import { FC } from "react";

interface Props {
	data: Product
}

const MainProductCard: FC<Props> = ({data}) => {
    const isProductInCart = useAppSelector(state=>state.cart.cartProducts.find((product)=>product.id===id))
    const isFavourite = useAppSelector(state=>state.favourite.favouriteProducts.find(product=>product.id===data.id))
    const dispatch = useAppDispatch()
    const handleToggleFavouriteProduct = () =>{
        isFavourite
            ? dispatch(removeProductFromFavourite(data))
            : dispatch(addProductToFavourite(data))
    }
    const {title, discount, price, currentPrice, rating, id, createdAt} = data
    return (
        <ProductCard>
            <ProductMain className="[&>button]:hover:bottom-0">
                <ProductImg className="w-[60%]" src={NoPhoto}/>
                <TopLeftSide>
                    <ProductBadge isDiscount={discount>0}>-{discount}%</ProductBadge>
                    <ProductBadge isNew={Date.now() - createdAt > 12096000}>NEW</ProductBadge>
                </TopLeftSide>
                <TopRightSide>
                    <FavouriteButton variant="circle" isFavourite={isFavourite} onClick={handleToggleFavouriteProduct}/>
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

export default MainProductCard
