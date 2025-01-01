import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage } from "shared/lib/local-storage";

export interface AuthState {
    isAuth: boolean
}

const initialState: AuthState = {
    isAuth: LocalStorage.has("token")
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuth(state) {
            state.isAuth = true
        },
        setUnauth(state) {
            state.isAuth = false
        },
    },
});

export const { setAuth, setUnauth } = userSlice.actions;

export default userSlice.reducer;
