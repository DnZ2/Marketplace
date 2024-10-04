import { configureStore } from "@reduxjs/toolkit";
import { api } from "./query/api";
import cartSlice from "./slices/cartSlice";
import favouriteSlice from "./slices/favouriteSlice";
import userSlice from "./slices/userSlice";
export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		cart: cartSlice,
		favourite: favouriteSlice,
		user: userSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});
