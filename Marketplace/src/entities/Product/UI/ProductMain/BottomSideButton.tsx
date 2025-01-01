import Cart from "../../../../assets/cart.svg?react"
import Check from "../../../../assets/icons8-галочка.svg?react"
import { NavLink } from "react-router-dom"
import { ComponentPropsWithoutRef, FC } from "react"
import { CartProduct } from "../../../../shared/redux/slices/cartSlice"
interface Props extends ComponentPropsWithoutRef<"button"> {
	isProductInCart: CartProduct | undefined
}
const BottomSideButton: FC<Props> = ({isProductInCart, ...props}) => {
    if(isProductInCart) return (
        <NavLink to="/cart" className='absolute bottom-0 flex gap-2 items-center justify-center w-full py-2 bg-emerald-500 text-white'>
            <Check className="fill-white"/>
        Already in cart
        </NavLink>
    )
    return (
        <button className="rounded-b-lg flex justify-center items-center gap-2 w-full bg-black text-[#f0f0f0] p-2 transition-all focus:transition-none focus:bottom-0 absolute bottom-[-40px]"
            {...props}>
            <Cart className="w-[24px] h-[24px] fill-none stroke-white stroke-[1.5]"/>
        Add To Cart
        </button>
    )
}
export default BottomSideButton