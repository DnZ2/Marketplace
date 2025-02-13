import { ShoppingCart } from "lucide-react"
import { useAppSelector } from "../../../../../shared/redux/store"
import Link from "shared/UI/Link/Link"
import { memo } from "react"

const CartDropdownTrigger = () => {
    const cartProducts = useAppSelector(state=>state.cart.cartProducts)
    return (
        <div className="relative rounded-full hover:bg-[#db4444] hover:cursor-pointer [&>a>svg]:hover:stroke-[#f7f7fc]">
            <Link to="/cart">
                <ShoppingCart />
            </Link>
            {cartProducts.length>0 &&
            <div className="rounded-full text-xs h-4 w-fit px-1 text-center absolute right-0 top-0 text-white bg-[#DB4444]">
                {cartProducts.length}
            </div>}
        </div>
    )
}

export default memo(CartDropdownTrigger)
