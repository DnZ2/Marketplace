import PropTypes from 'prop-types';
import Cart from "../../../assets/cart.svg?react"
import Check from "../../../assets/icons8-галочка.svg?react"
import NoPhoto from "../../../assets/nophoto.png"
import FavouriteButton from '../../../features/Favourite/UI/FavouriteButton';
import Sale from './ProductBadge';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../../shared/redux/slices/cartSlice';
import { addProductToFavourite, removeProductFromFavourite } from '../../../shared/redux/slices/favouriteSlice';
import DeleteButton from '../../../features/Favourite/UI/DeleteButton';
import ReviewShowCase from '../../Review/ReviewShowCase';
import Price from './ProductPrice';

const MainProductLayout = ({image=NoPhoto, controls, data}) => {
	MainProductLayout.propTypes={
		image: PropTypes.string,
		controls: PropTypes.node,
		data: PropTypes.object,
	}
	const cartProducts = useSelector(state=>state.cart.cartProducts)
	const favouriteProducts = useSelector(state=>state.favourite.favouriteProducts)
	const dispatch = useDispatch()

	const handleToggleFavouriteProduct = () =>{
		favouriteProducts.find((product)=>product.id===data.id)
		? dispatch(removeProductFromFavourite(data))
		: dispatch(addProductToFavourite(data))
	}
	const {id, title, price, currentPrice, discount, rating} = data
  return (
	<div className="flex flex-col gap-4 w-full">
		<div className="flex justify-center items-center rounded-lg overflow-hidden bg-[#f0f0f0] [&>button]:hover:bottom-0 relative aspect-square">
			<img className="w-[60%] object-contain" src={image} alt="productImage" />
			<div className="absolute left-3 top-3 flex flex-col gap-1">
				{discount>0 && <Sale>-{discount+"%"}</Sale>}
				<Sale bg="bg-[#18864B]">NEW</Sale>
			</div>
			<div className="absolute right-3 top-3 flex flex-col gap-2">
			{
				controls==="delete"
				? <DeleteButton variant="circle" onClick={()=>dispatch(removeProductFromFavourite(data))}/>
				: <FavouriteButton variant="circle" onClick={handleToggleFavouriteProduct} data={data} />
			}
			</div>
			{
			cartProducts.find((product)=>product.id===id)
				?
				<NavLink to="/cart" className='absolute bottom-0 flex gap-1 items-center justify-center w-full py-2 bg-emerald-500 text-white'>
					<Check className="fill-white"/>
					Already in cart
				</NavLink>
				:
				<button className="rounded-b-lg flex justify-center items-center gap-2 w-full bg-black text-[#f0f0f0] p-2 transition-all focus:transition-none focus:bottom-0 absolute bottom-[-40px]"
					onClick={()=>dispatch(addProductToCart(data))}
				>
					<Cart className="w-[24px] h-[24px] fill-none stroke-white stroke-[1.5]"/>
					Add To Cart
				</button>
			}
		</div>
		<div className="flex flex-col gap-2">
				<NavLink to={`/products/${id}`} className='text-base w-fit'>{title}</NavLink>
				<Price currentPrice={currentPrice} price={price}/>
				<ReviewShowCase rating={rating}/>
		</div>
	</div>
  )
}

export default MainProductLayout
