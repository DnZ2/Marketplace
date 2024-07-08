import Dropdown from "../shared/UI/Dropdown"
import { NavLink } from "react-router-dom"
import Cart from "../assets/cart.svg?react"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../shared/redux/slices/cartSlice"
import CartDropdownProductLayout from "./CartDropdownProductLayout"
import { countTotalPrice } from "../shared/redux/slices/cartSlice"
import { useEffect } from "react"
import Button from "../shared/UI/Button"
import { useLocation } from 'react-router-dom';

const CartDropdownList = () => {
	const cartTotal = useSelector(state=>state.cart.cartTotal)
	const cartProducts = useSelector(state=>state.cart.cartProducts)
	let location = useLocation()
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(countTotalPrice())
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[cartProducts])
  return (
	<Dropdown>
		<li className="p-2 relative rounded-full hover:bg-[#db4444] hover:cursor-pointer [&>a>svg]:hover:stroke-[#f7f7fc] [&>div>a>svg]:hover:stroke-[#f7f7fc]">
			<NavLink to="/cart">
				<Cart className="w-6 h-6 fill-none stroke-black stroke-[1.5] "/>
			</NavLink>
			{cartProducts.length ? <div className="rounded-full text-xs h-4 w-fit px-1 text-center absolute right-0 top-0 text-white bg-[#DB4444]">
				{cartProducts.length}
			</div> : null}
		</li>
		{
		location.pathname !== '/cart' && cartProducts.length
		?
		<div className="flex flex-col p-4 w-[30rem] bg-white rounded-md">
			<header className="flex justify-between">
				<h1>Products in cart {`(${cartProducts.length})`}</h1>
				<span className="hover:text-[#db4444]" onClick={()=>dispatch(clearCart())}>Clear</span>
			</header>
			<ul className="flex flex-col gap-2">
				{cartProducts.map((product)=>{
					return <li key={product.id}>
						<CartDropdownProductLayout data={product}/>
					</li>
				})}
			</ul>
			<footer className="flex pt-2 border-t justify-between">
				<div className="flex flex-col justify-center gap-1">
					<span>Total:</span>
					<span className="font-bold text-lg">${cartTotal.total}</span>
				</div>
				<NavLink to="/cart"><Button>To Cart</Button></NavLink>
			</footer>
		</div>
		:
		null
		}
	</Dropdown>
  )
}

export default CartDropdownList
