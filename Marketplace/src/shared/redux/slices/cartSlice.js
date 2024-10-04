import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	cartProducts: JSON.parse(localStorage.getItem("cart")) || [],
	cartTotal: {
		total: 0,
		delivery: 0,
		coupons: {
			big: 10,
		},
	},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCart(state, action) {
			state.cartProducts.push({
				id: action.payload.id,
				price: action.payload.currentPrice,
				title: action.payload.title,
				maxQuantity: action.payload.maxQuantity,
				quantity: 1,
				subtotal: action.payload.currentPrice,
			});
		},

		updateQuantity(state, action) {
			const product = state.cartProducts.find(
				(product) => product.id === action.payload.id
			);
			product.quantity = action.payload.value;
			product.subtotal = parseFloat(
				(product.quantity * product.price).toFixed(1)
			);
		},
		removeProductFromCart(state, action) {
			state.cartProducts = state.cartProducts.filter(
				(product) => product.id !== action.payload.id
			);
		},
		countTotalPrice(state) {
			state.cartTotal.total = state.cartProducts.reduce(
				(acc, item) => acc + item.subtotal,
				0
			);
		},
		addFavouritesToCart(state, action) {
			state.cartProducts = [
				...state.cartProducts,
				...action.payload,
			].reduce((acc, value) => {
				if (!acc.find((item) => item.id === value.id)) {
					if (value.quantity === undefined) {
						acc.push({
							...value,
							quantity: 1,
							subtotal: value.currentPrice,
						});
					} else {
						acc.push(value);
					}
				}
				return acc;
			}, []);
		},
		clearCart(state) {
			state.cartProducts = [];
		},
	},
});

export const {
	addProductToCart,
	updateQuantity,
	removeProductFromCart,
	countTotalPrice,
	addFavouritesToCart,
	clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;