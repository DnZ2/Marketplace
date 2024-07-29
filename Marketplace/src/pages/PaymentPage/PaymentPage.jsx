import { useSelector } from "react-redux"
import Button from "../../shared/UI/Button"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useBuyProductsMutation } from "../../shared/redux/query/usersApi"
import { clearCart } from "../../shared/redux/slices/cartSlice"
import { useNavigate } from "react-router-dom"
import TotalPaymentInfo from "../../widgets/TotalPaymentInfo"
const PaymentPage = () => {
	const cartTotal = useSelector(state=>state.cart.cartTotal)
	const cartProducts = useSelector(state=>state.cart.cartProducts)
	const userId = useSelector(state=>state.user.id)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [buyProducts] = useBuyProductsMutation()
	const [name, setName] = useState("")
	const [city, setCity] = useState("")
	const [street, setStreet] = useState("")
	const [house, setHouse] = useState("")
	const [phone, setPhone] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const handleInputName = ({target})=>{
		setName(target.value)
	}
	const handleInputCity = ({target})=>{
		setCity(target.value)
	}
	const handleInputStreet = ({target})=>{
		setStreet(target.value)
	}
	const handleInputHouse = ({target})=>{
		setHouse(target.value)
	}
	const handleInputPhone = ({target})=>{
		setPhone(target.value)
	}

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
				<input type="text" className="p-2 text-2xl" value={name} onChange={handleInputName} placeholder="First Name"/>
				<input type="text" className="p-2 text-2xl" value={city} onChange={handleInputCity} placeholder="Town/City" />
				<input type="text" className="p-2 text-2xl" value={street} onChange={handleInputStreet} placeholder="Street Address" />
				<input type="text" className="p-2 text-2xl" value={house} onChange={handleInputHouse} placeholder="Apartment, floor" />
				<input type="text" className="p-2 text-2xl" value={phone} onChange={handleInputPhone} placeholder="Phone Number" />
				{errorMessage ? <span className="text-red-400">{errorMessage}</span> : null}
				<p className="text-2xl">Only cash on delivery</p>
			</div>
			<div className="self-center self justify-self-center ">
				<div className="size-96 flex flex-col">
					<TotalPaymentInfo/>
					<div className="flex pt-8">
						<Button type="submit">Place Order</Button>
					</div>
				</div>
			</div>
		</form>
	</div>
  )
}

export default PaymentPage
