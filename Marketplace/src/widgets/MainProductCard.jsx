import PropTypes from "prop-types";
import NoPhoto from "../assets/nophoto.png"
import FavouriteButton from '../features/Favourite/UI/FavouriteButton'
import ReviewShowCase from "../entities/Review/ReviewShowCase";
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../shared/redux/slices/cartSlice';
import { addProductToFavourite, removeProductFromFavourite } from '../shared/redux/slices/favouriteSlice';
import {BottomSideButton,Product,ProductBadge,ProductFooter,ProductImg,ProductLink,ProductMain,ProductPrice,TopLeftSide,TopRightSide} from "../entities/Product/UI/";
import DeleteButton from "../features/Favourite/UI/DeleteButton";

const MainProductCard = ({image=NoPhoto, data, wishlist=false}) => {
	const cartProducts = useSelector(state=>state.cart.cartProducts)
	const favouriteProducts = useSelector(state=>state.favourite.favouriteProducts)
	const dispatch = useDispatch()
	const isFavourite = favouriteProducts.find((product)=>product.id===data.id)
	const handleToggleFavouriteProduct = () =>{
		isFavourite
		? dispatch(removeProductFromFavourite(data))
		: dispatch(addProductToFavourite(data))
	}
	const {title, discount, price, currentPrice, rating, id, createdAt} = data
  return (
	<Product>
		<ProductMain className="[&>button]:hover:bottom-0">
			<ProductImg className="w-[60%]" src={image}/>
			<TopLeftSide>
				<ProductBadge isDiscount={discount>0}>-{discount}%</ProductBadge>
				<ProductBadge isNew={createdAt}>NEW</ProductBadge>
			</TopLeftSide>
			<TopRightSide>
				{!wishlist ?
					<FavouriteButton variant="circle" isFavourite={isFavourite} onClick={handleToggleFavouriteProduct}/>
					:
					<DeleteButton variant="circle" onClick={()=>dispatch(removeProductFromFavourite(data))}/>
				}
			</TopRightSide>
			<BottomSideButton isProductInCart={cartProducts.find((product)=>product.id===id)} onClick={()=>dispatch(addProductToCart(data))}/>
		</ProductMain>
		<ProductFooter>
			<ProductLink id={id}>{title}</ProductLink>
			<ProductPrice currentPrice={currentPrice} price={price}></ProductPrice>
			{!wishlist && <ReviewShowCase rating={rating}/>}
		</ProductFooter>
	</Product>
  )
}
MainProductCard.propTypes={
	image: PropTypes.string,
	data: PropTypes.object,
	wishlist: PropTypes.bool,
}
export default MainProductCard
