import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
			localStorage.setItem("token", response.data.accessToken);
			result = await baseQuery(args, api, extraOptions);
		} else {
			localStorage.removeItem("token");
			result = await baseQuery(
				{ url: "/logout", credentials: "include", method: "POST" },
				api,
				extraOptions
			);
		}
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
		refresh: builder.query({
			query: () => ({
				url: `refresh`,
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useLogoutMutation,
	useRegistrationMutation,
	useLazyRefreshQuery,
} = api;

export function providesList(resultsWithIds, tagType) {
	return resultsWithIds
		? [
				{ type: tagType, id: "LIST" },
				...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  ]
		: [{ type: tagType, id: "LIST" }];
}
