import { NavLink } from "react-router-dom"
import Wishlist from "../../../../../assets/wishlist.svg?react"
import { useSelector } from "react-redux"
const Favourites = () => {
	const favourite = useSelector(state=>state.favourite.favouriteProducts)
  return (
	<div className="p-2 relative rounded-full hover:bg-[#db4444] hover:cursor-pointer [&>a>svg]:hover:fill-[#f7f7fc]">
		<NavLink to="/wishlist">
			<Wishlist className="w-6 h-6 fill-black " />
		</NavLink>
		{favourite.length>0 &&
		<div className="rounded-full text-xs h-4 w-fit px-1 text-center absolute right-0 top-0 text-white bg-[#DB4444]">
			{favourite.length}
		</div>}
	</div>
  )
}

export default Favourites
