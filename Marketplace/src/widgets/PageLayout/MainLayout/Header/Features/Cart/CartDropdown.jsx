import CartDropdownList from "./CartDropdownList"
import { useSelector } from "react-redux"
import Dropdown from "../../../../../../shared/UI/Dropdown"
import Cart from "../../../../../../assets/cart.svg?react"
import { NavLink, useLocation } from "react-router-dom"
const CartDropdown = () => {
	const cartProducts = useSelector(state=>state.cart.cartProducts)
	let location = useLocation()
  return (
	<Dropdown>
		<div className="p-2 relative rounded-full hover:bg-[#db4444] hover:cursor-pointer [&>a>svg]:hover:stroke-[#f7f7fc] [&>div>a>svg]:hover:stroke-[#f7f7fc]">
			<NavLink to="/cart">
				<Cart className="w-6 h-6 fill-none stroke-black stroke-[1.5] "/>
			</NavLink>
			{cartProducts.length>0 &&
			<div className="rounded-full text-xs h-4 w-fit px-1 text-center absolute right-0 top-0 text-white bg-[#DB4444]">
				{cartProducts.length}
			</div>}
		</div>
		{((location.pathname !== '/cart') && cartProducts.length>0) && <CartDropdownList />}
	</Dropdown>
	)
}

export default CartDropdown
