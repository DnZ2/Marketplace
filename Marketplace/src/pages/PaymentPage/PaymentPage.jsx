import { useSelector } from "react-redux"
import Button from "../../shared/UI/Button"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useBuyProductsMutation } from "../../shared/redux/query/usersApi"
import { clearCart } from "../../shared/redux/slices/cartSlice"
import { useNavigate } from "react-router-dom"
import TotalPaymentInfo from "../../widgets/TotalPaymentInfo"
import useInput from "../../shared/hooks/useInput"
import Input from "../../shared/UI/Input"
const PaymentPage = () => {
	const cartTotal = useSelector(state=>state.cart.cartTotal)
	const cartProducts = useSelector(state=>state.cart.cartProducts)
	const userId = useSelector(state=>state.user.id)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [buyProducts] = useBuyProductsMutation()
	const username = useInput()
	const city = useInput()
	const street = useInput()
	const house = useInput()
	const phone = useInput()
	const [errorMessage, setErrorMessage] = useState("")

	const handleSubmit= async (e) => {
		try{
			e.preventDefault()
			if(city && street && house){
				const products = cartProducts.map((item)=>{return {
					productId: item.id,
					quantity: Number(item.quantity),
					price: Number(item.price),
					title: item.title,
				}})
				const order = {
					userId,
					paymentAmount: cartTotal.total.toFixed(1),
					products,
					address: [city, street, house].join(", "),
				}
				await buyProducts(order).unwrap()
				dispatch(clearCart())
				navigate('/')
			}
			else{
				setErrorMessage("Not Valid")
			}
		}
		catch(e){
			console.log(e)
		}
	}
  return (
	<div className="container my-20">
		<h1 className="text-4xl mb-14">Billing Details</h1>
		<form  autoComplete="off" className="flex items-center justify-between" onSubmit={handleSubmit}>
			<div className="flex flex-col gap-3 w-[50%]">
				<Input {...username.props} placeholder="Username"/>
				<Input {...city.props} placeholder="Town/City" />
				<Input {...street.props} placeholder="Street Address" />
				<Input {...house.props} placeholder="Apartment, floor" />
				<Input {...phone.props} placeholder="Phone Number" />
				<input type="checkbox" className="checked:bg-[#db4444] appearance-none size-8"/>
				{errorMessage ? <span className="text-red-400">{errorMessage}</span> : null}
				<p className="text-2xl">Only cash on delivery</p>
			</div>
			<div className="self-center self justify-self-center ">
				<div className="size-96 flex flex-col">
					<TotalPaymentInfo/>
					<Button type="submit">Place Order</Button>
				</div>
			</div>
		</form>
	</div>
  )
}

export default PaymentPage
