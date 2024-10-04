import PropTypes from 'prop-types';
import AddToFavourite from  "../../../assets/wishlist2.svg?react"
import Button from '../../../shared/UI/Button';
const FavouriteButton = ({variant, onClick, isFavourite}) => {
	FavouriteButton.propTypes ={
		variant: PropTypes.string,
		onClick: PropTypes.func,
		isFavourite: PropTypes.bool,
	}

  return (
	<Button variant={variant} size="none" className={`
		size-14
		flex items-center justify-center
		hover:bg-[#db4444]
		${isFavourite ?
		"[&>svg]:hover:fill-white [&>svg]:fill-[#db4444]"
		:"[&>svg]:hover:stroke-white [&>svg]:hover:fill-[#db4444]"}
		${variant==="svg" && "border border-[#7D8184] hover:border-none"}`
	} onClick={onClick}>
		<AddToFavourite className={`${variant==="svg"? "size-7" : "size-5"}`}/>
	</Button>
  )
}

export default FavouriteButton
