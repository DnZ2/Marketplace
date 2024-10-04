import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeProductFromFavourite } from "../../shared/redux/slices/favouriteSlice";
import { addProductToFavourite } from "../../shared/redux/slices/favouriteSlice";
import {
	addProductToCart,
	updateQuantity,
} from "../../shared/redux/slices/cartSlice";
const usePageProductCardActions = (product, value) => {
	const favouriteProducts = useSelector(
		(state) => state.favourite.favouriteProducts
	);
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	const isProductInCart = cartProducts.find((data) => data.id === product.id);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleToggleFavouriteProduct = () => {
		favouriteProducts.find((data) => data.id === product.id)
			? dispatch(removeProductFromFavourite(product))
			: dispatch(addProductToFavourite(product));
	};
	const handleProductToCart = () => {
		if (!isProductInCart) {
			dispatch(addProductToCart(product));
			dispatch(updateQuantity({ id: product.id, value }));
		}
		navigate("/cart");
	};

	return {
		isProductInCart,
		handleToggleFavouriteProduct,
		handleProductToCart,
	};
};

export default usePageProductCardActions;
