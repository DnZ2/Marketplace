import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Product } from "../query/endpoints/productsApi";
import { RootState } from "../store";
export interface FavouriteProduct extends Pick<Product, "id" | "discount" | "title" | "maxQuantity" | "price"> {
	currentPrice: number
}
export interface FavouriteState {
	favouriteProducts: FavouriteProduct[]
}
const initialState: FavouriteState = {
    favouriteProducts: []
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

export const selectWishlistCounter = createSelector(
    (store: RootState)=>store.favourite.favouriteProducts,
    (wishlist)=>wishlist.length
)

export default favouriteSlice.reducer;
