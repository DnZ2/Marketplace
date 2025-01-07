import { useDispatch, useSelector } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import favouriteSlice from "./slices/favouriteSlice";
import userSlice from "./slices/userSlice";
import {baseApi} from './query/endpoints';
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const cartPersistConfig = {
    key: 'cart',
    storage,
}

const favouritePersistConfig = {
    key: 'favourite',
    storage,
}

 
const cartReducer = persistReducer(cartPersistConfig, cartSlice)
const favouriteReducer = persistReducer(favouritePersistConfig, favouriteSlice)

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        cart: cartReducer,
        favourite: favouriteReducer,
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware),
});
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()