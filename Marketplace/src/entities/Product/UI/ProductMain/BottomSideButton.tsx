import Cart from "../../../../assets/cart.svg?react"
import Check from "../../../../assets/icons8-галочка.svg?react"
import { ComponentPropsWithoutRef, memo } from "react"
import { CartProduct } from "../../../../shared/redux/slices/cartSlice"
import Link from "shared/UI/Link/Link"
interface Props extends ComponentPropsWithoutRef<"button"> {
	isProductInCart?: CartProduct
}

const BottomSideButton = (props: Props) => {
    const {isProductInCart, ...otherProps} = props
    if(isProductInCart) return (
        <Link to="/cart" className='absolute bottom-0 flex gap-2 items-center justify-center w-full py-2 bg-emerald-500 text-white'>
            <Check className="fill-white"/>
        Already in cart
        </Link>
    )
    return (
        <button className="rounded-b-lg flex justify-center items-center gap-2 w-full bg-black text-[#f0f0f0] p-2 transition-all focus:transition-none focus:bottom-0 absolute bottom-[-40px]"
            {...otherProps}>
            <Cart className="w-[24px] h-[24px] fill-none stroke-white stroke-[1.5]"/>
        Add To Cart
        </button>
    )
}
export default memo(BottomSideButton)