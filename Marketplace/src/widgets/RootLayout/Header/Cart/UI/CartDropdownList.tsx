import { NavLink } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../../../../shared/redux/store"
import { clearCart, countTotalPrice } from "../../../../../shared/redux/slices/cartSlice"
import CartDropdownProductCard from "./CartDropdownProductCard"
import { useEffect } from "react"
import Button from "../../../../../shared/UI/Button/Button"

const CartDropdownList = () => {
    const cartTotal = useAppSelector(state=>state.cart.cartTotal)
    const cartProducts = useAppSelector(state=>state.cart.cartProducts)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(countTotalPrice())
    },[cartProducts])
    return (
        <div className="flex flex-col p-4 w-[30rem] bg-white rounded-md shadow-md">
            <header className="flex justify-between">
                <h1>Products in cart {`(${cartProducts.length})`}</h1>
                <span className="hover:text-[#db4444]" onClick={()=>dispatch(clearCart())}>Clear</span>
            </header>
            <main className="flex flex-col gap-2">
                {cartProducts.map((product)=>
                    <CartDropdownProductCard key={product.id} data={product}/>
                )}
            </main>
            <footer className="flex pt-2 border-t justify-between">
                <div className="flex flex-col justify-center gap-1">
                    <span>Total:</span>
                    <span className="font-bold text-lg">${cartTotal.total}</span>
                </div>
                <NavLink to="/cart"><Button>To Cart</Button></NavLink>
            </footer>
        </div>
    )
}

export default CartDropdownList
