import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	favouriteProducts: JSON.parse(localStorage.getItem("favourite")) || [],
};

export const favouriteSlice = createSlice({
	name: "favourite",
	initialState,
	reducers: {
		addProductToFavourite(state, action) {
			state.favouriteProducts.push({
				id: action.payload.id,
				price: action.payload.price,
				currentPrice: action.payload.currentPrice,
				title: action.payload.title,
				discount: action.payload.discount,
				maxQuantity: action.payload.maxQuantity,
			});
		},
		removeProductFromFavourite(state, action) {
			state.favouriteProducts = state.favouriteProducts.filter(
				(product) => product.id !== action.payload.id
			);
		},
	},
});
export const { addProductToFavourite, removeProductFromFavourite } =
	favouriteSlice.actions;

export default favouriteSlice.reducer;
