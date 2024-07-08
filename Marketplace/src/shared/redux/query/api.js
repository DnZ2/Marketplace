import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser, setInitial } from "../slices/userSlice";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:5000/api",
	credentials: "include",
	prepareHeaders: (headers) => {
		const token = localStorage.getItem("token");
		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
		return headers;
	},
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result.error && result.error.status === 401) {
		const response = await baseQuery(
			{ url: "/refresh", credentials: "include" },
			api,
			extraOptions
		);
		if (response?.data) {
			api.dispatch(setUser(response.data));
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(setInitial());
			result = await baseQuery(
				{ url: "/logout", credentials: "include", method: "POST" },
				api,
				extraOptions
			);
		}
	}
	if (
		result.meta.request.url === "http://localhost:5000/api/logout" ||
		result.meta.request.url === "http://localhost:5000/api/registration"
	) {
		window.location.replace("/login");
	}
	return result;
};

export const api = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({
				url: `login`,
				method: "POST",
				body,
			}),
		}),
		registration: builder.mutation({
			query: (body) => ({
				url: `registration`,
				method: "POST",
				body,
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: `logout`,
				method: "POST",
			}),
		}),
	}),
});

export const {
	useUsersQuery,
	useLoginMutation,
	useLogoutMutation,
	useRegistrationMutation,
} = api;
