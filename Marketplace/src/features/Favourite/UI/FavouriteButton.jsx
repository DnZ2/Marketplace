import PropTypes from 'prop-types';
import AddToFavourite from  "../../../assets/wishlist2.svg?react"
import { useSelector } from 'react-redux';
const FavouriteButton = ({type, onClick, data}) => {
	FavouriteButton.propTypes ={
		type: PropTypes.string,
		onClick: PropTypes.func,
		data: PropTypes.object,
	}
	const favouriteProducts = useSelector(state=>state.favourite.favouriteProducts)
	const isFavourite = favouriteProducts.find((product)=>product.id===data.id)

  return (
	<button className={isFavourite
	? `${type==="secondary" ? "rounded-md border border-[#7D8184] hover:border-none bg-inherit size-14" : "rounded-full bg-white size-8"}
	 	cursor-pointer flex items-center justify-center [&>svg]:fill-[#db4444] hover:bg-[#db4444] [&>svg]:hover:fill-white`
	: `${type==="secondary" ? "rounded-md border border-[#7D8184] hover:border-none bg-inherit size-14" : "rounded-full bg-white size-8"}
		cursor-pointer flex items-center justify-center hover:bg-[#db4444] [&>svg]:hover:stroke-white [&>svg]:hover:fill-[#db4444]`
	} onClick={onClick}>
		<AddToFavourite className={`${type==="secondary"? "size-7" : "size-5"}`}/>
	</button>
  )
}

export default FavouriteButton
