import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, countTotalPrice } from "../../../../../../shared/redux/slices/cartSlice"
import CartDropdownProductLayout from "../../../../../../entities/Product/UI/CartDropdownProductLayout"
import { useEffect } from "react"
import Button from "../../../../../../shared/UI/Button"

const CartDropdownList = () => {
	const cartTotal = useSelector(state=>state.cart.cartTotal)
	const cartProducts = useSelector(state=>state.cart.cartProducts)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(countTotalPrice())
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[cartProducts])
  return (
		<div className="flex flex-col p-4 w-[30rem] bg-white rounded-md">
			<header className="flex justify-between">
				<h1>Products in cart {`(${cartProducts.length})`}</h1>
				<span className="hover:text-[#db4444]" onClick={()=>dispatch(clearCart())}>Clear</span>
			</header>
			<main className="flex flex-col gap-2">
				{cartProducts.map((product)=>
					<CartDropdownProductLayout key={product.id} data={product}/>
				)}
			</main>
			<footer className="flex pt-2 border-t justify-between">
				<div className="flex flex-col justify-center gap-1">
					<span>Total:</span>
					<span className="font-bold text-lg">${cartTotal.total}</span>
				</div>
				<NavLink to="/cart"><Button>To Cart</Button></NavLink>
			</footer>
		</div>
  )
}

export default CartDropdownList
