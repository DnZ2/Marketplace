import { useAppSelector } from "../shared/redux/store"

const TotalPaymentInfo = () => {
    const cartTotal = useAppSelector(state=>state.cart.cartTotal)
    return (
        <div className="divide-y [&>p]:py-4 divide-[#7D8184]">
            <p className="flex justify-between items-center"><span>Subtotal:</span><span>${cartTotal.total}</span></p>
            <p className="flex justify-between items-center"><span>Shipping:</span><span>Free</span></p>
            <p className="flex justify-between items-center"><span>Total:</span><span>${cartTotal.total}</span></p>
        </div>
    )
}

export default TotalPaymentInfo
