import { api, providesList } from "./api";

const usersApi = api.injectEndpoints({
	tagTypes: ["Order", "User"],
	endpoints: (build) => ({
		buyProducts: build.mutation({
			query: (body) => ({
				url: `buyProducts`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: [{ type: "Order", id: "LIST" }],
		}),
		getOrders: build.query({
			query: (userId) => `orders/${userId}`,
			providesTags: (result) => providesList(result, "Order"),
		}),
	}),
});
export const { useBuyProductsMutation, useGetOrdersQuery } = usersApi;
