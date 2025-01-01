import { NavLink } from "react-router-dom"
import Cart from "../../../../../assets/cart.svg?react"
import { useAppSelector } from "../../../../../shared/redux/store"

const CartDropdownTrigger = () => {
    const cartProducts = useAppSelector(state=>state.cart.cartProducts)
    return (
        <div className="p-2 relative rounded-full hover:bg-[#db4444] hover:cursor-pointer [&>a>svg]:hover:stroke-[#f7f7fc]">
            <NavLink to="/cart">
                <Cart className="w-6 h-6 fill-none stroke-black stroke-[1.5] "/>
            </NavLink>
            {cartProducts.length>0 &&
            <div className="rounded-full text-xs h-4 w-fit px-1 text-center absolute right-0 top-0 text-white bg-[#DB4444]">
                {cartProducts.length}
            </div>}
        </div>
    )
}

export default CartDropdownTrigger
