import CartDropdownList from "./UI/CartDropdownList"
import { useAppSelector } from "../../../../shared/redux/store"
import Dropdown from "../../../../features/Dropdown"
import { useLocation } from "react-router-dom"
import CartDropdownTrigger from "./UI/CartDropdownTrigger"
const CartDropdown = () => {
    const cartProducts = useAppSelector(state=>state.cart.cartProducts)
    const location = useLocation()
    return (
        <Dropdown className={"has-[div]:hover:bg-[#db4444] [&>div>a>svg]:hover:stroke-[#f7f7fc]"}>
            <CartDropdownTrigger/>
            {((location.pathname !== '/cart') && cartProducts.length>0) && <CartDropdownList />}
        </Dropdown>
    )
}

export default CartDropdown
