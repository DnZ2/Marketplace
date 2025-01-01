import { CartProduct } from "shared/redux/slices/cartSlice";
import { useAppSelector } from "../shared/redux/store";
import useStorage from "./hooks/useStorage";
import ReactRouterProvider from "./Routes/ReactRouterProvider";
import { FavouriteProduct } from "shared/redux/slices/favouriteSlice";
function App() {
    const cartProducts = useAppSelector(state=>state.cart.cartProducts)
    const favouriteProducts = useAppSelector(state=>state.favourite.favouriteProducts)
    useStorage<CartProduct[]>("cart", cartProducts)
    useStorage<FavouriteProduct[]>("favourite", favouriteProducts)

    return (
        <ReactRouterProvider />
    )
}

export default App
