import { useAppSelector, useAppDispatch } from "../../../shared/redux/store";
import { useNavigate } from "react-router-dom";
import { removeProductFromFavourite } from "../../../shared/redux/slices/favouriteSlice";
import { addProductToFavourite } from "../../../shared/redux/slices/favouriteSlice";
import {
    addProductToCart,
    updateQuantity,
} from "../../../shared/redux/slices/cartSlice";
import { useRef } from "react";
const usePageProductCardActions = (product) => {
    const favouriteProducts = useAppSelector(
        (state) => state.favourite.favouriteProducts
    );
    const cartProducts = useAppSelector((state) => state.cart.cartProducts);
    const isProductInCart = cartProducts.find((data) => data.id === product.id);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const numberInputRef = useRef(null);
    const handleToggleFavouriteProduct = () => {
        favouriteProducts.find((data) => data.id === product.id)
            ? dispatch(removeProductFromFavourite(product))
            : dispatch(addProductToFavourite(product));
    };
    const handleProductToCart = () => {
        if (!isProductInCart) {
            dispatch(addProductToCart(product));
            dispatch(
                updateQuantity({
                    id: product.id,
                    value: numberInputRef?.current?.value,
                })
            );
        }
        navigate("/cart");
    };

    return {
        numberInputRef,
        isProductInCart,
        handleToggleFavouriteProduct,
        handleProductToCart,
    };
};

export default usePageProductCardActions;
