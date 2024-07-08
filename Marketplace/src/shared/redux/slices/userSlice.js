import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	token: localStorage.getItem("token") || "",
	roles: localStorage.getItem("roles") || [],
	userId: localStorage.getItem("userId") || "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			localStorage.setItem("token", action.payload.accessToken);
			localStorage.setItem("roles", action.payload.user.roles);
			localStorage.setItem("userId", action.payload.user.id);
			return state;
		},
		setInitial() {
			localStorage.removeItem("token");
			localStorage.removeItem("roles");
			localStorage.removeItem("userId");
		},
	},
});

export const { setUser, setInitial } = userSlice.actions;

export default userSlice.reducer;
