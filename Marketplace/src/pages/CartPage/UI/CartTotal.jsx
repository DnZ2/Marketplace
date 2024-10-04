import { NavLink } from "react-router-dom"
import Button from "../../../shared/UI/Button"
import TotalPaymentInfo from "../../../widgets/TotalPaymentInfo"
const CartTotal = () => {

  return (
	<div className="w-[40%] px-6 py-8 rounded-md border-2 border-black">
		<h2 className="pb-2 text-xl font-medium">Cart Total</h2>
		<div className="flex flex-col gap-4">
			<TotalPaymentInfo/>
			<NavLink to="/payment" className='mx-auto'><Button>Procees to checkout</Button></NavLink>
		</div>
	</div>
  )
}

export default CartTotal
