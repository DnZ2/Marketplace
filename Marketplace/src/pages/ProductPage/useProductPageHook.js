import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../shared/redux/query/productsApi";
import { useSelector, useDispatch } from "react-redux";
import {
	addProductToFavourite,
	removeProductFromFavourite,
} from "../../shared/redux/slices/favouriteSlice";
import {
	addProductToCart,
	updateQuantity,
} from "../../shared/redux/slices/cartSlice";
import { useNumberInputHook } from "../../features/NumberInput/NumberInputHook";

const useProductPageHook = () => {
	const { id } = useParams();
	const { data: product, isLoading } = useGetProductQuery(id);
	const {
		handleChangeValue,
		handleDecreaseValue,
		handleIncreaseValue,
		value,
	} = useNumberInputHook("1", product?.maxQuantity);

	const favouriteProducts = useSelector(
		(state) => state.favourite.favouriteProducts
	);
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	const isProductInCart = cartProducts.some(
		(data) => data.id === product?.id
	);
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
			dispatch(updateQuantity({ id, value }));
		}
		navigate("/cart");
	};

	return {
		value,
		product,
		isLoading,
		isProductInCart,
		handleToggleFavouriteProduct,
		handleProductToCart,
		handleChangeValue,
		handleDecreaseValue,
		handleIncreaseValue,
	};
};

export default useProductPageHook;
