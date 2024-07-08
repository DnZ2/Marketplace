import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import Button from "../../../shared/UI/Button"
const CartTotal = () => {
	const cartTotal = useSelector(state=>state.cart.cartTotal)

  return (
	<div className="w-[40%] px-6 py-8 rounded-md border-2 border-black">
		<h2 className="pb-6 text-xl font-medium">Cart Total</h2>
		<div className="flex flex-col gap-4">
		<p className="flex justify-between items-center"><span>Subtotal:</span><span>${cartTotal.total.toFixed(1)}</span></p>
		<div className="h-px bg-[#7D8184]"></div>
		<p className="flex justify-between items-center"><span>Shipping:</span><span>Free</span></p>
		<div className="h-px bg-[#7D8184]"></div>
		<p className="flex justify-between items-center"><span>Total:</span><span>${cartTotal.total.toFixed(1)}</span></p>
		<NavLink to="/payment" className='mx-auto'><Button>Procees to checkout</Button></NavLink>
		</div>
	</div>
  )
}

export default CartTotal
