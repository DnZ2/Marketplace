import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	username: "",
	email: "",
	id: "",
	isActivated: "",
	roles: [],
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			localStorage.setItem("token", action.payload.accessToken);
			state = action.payload.user;
			return state;
		},
		setInitial() {
			localStorage.removeItem("token");
			return initialState;
		},
	},
});

export const { setUser, setInitial } = userSlice.actions;

export default userSlice.reducer;
