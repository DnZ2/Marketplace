import CartProductLayout from "../../entities/Product/UI/CartProductLayout"
import { useDispatch, useSelector } from "react-redux"
import EmptyCart from "../../assets/empryCart-Photoroom.png"
import { NavLink } from "react-router-dom"
import { useEffect } from "react"
import { countTotalPrice } from "../../shared/redux/slices/cartSlice"
import CartTotal from "./UI/CartTotal"
const CartPage = () => {
	const cartProducts = useSelector(state=>state.cart.cartProducts)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(countTotalPrice())
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[cartProducts])

  return (
	<>
		<h1 className="container my-14 text-4xl">Cart</h1>
		{
			cartProducts.length
			?
			<div className="container mb-14 flex flex-col gap-16">

				<div className="flex flex-col gap-10">
					<div className="rounded-md grid grid-cols-[1fr_1fr_1fr_1fr_80px] py-6 pl-7 shadow-[0_0_4px_1px_#dddddd] items-center">
						<p>Product</p>
						<p>Price</p>
						<p>Quantity</p>
						<p>Subtotal</p>
					</div>
					{cartProducts.map(item=>
						<CartProductLayout key={item.id} data={item}/>
					)}
					</div>
					<div className="flex justify-end items-start">
						<CartTotal />
					</div>
			</div>
			:
			<figure className="w-full bg-white container mb-14 py-14 rounded-3xl flex justify-center flex-col items-center">
				<img src={EmptyCart} alt="empty" />
				<figcaption className="text-2xl font-semibold">Cart is empty</figcaption>
				<p>Use the <NavLink className="text-blue-400" to="/">catalog</NavLink> or search</p>
			</figure>
		}
	</>



  )
}

export default CartPage
