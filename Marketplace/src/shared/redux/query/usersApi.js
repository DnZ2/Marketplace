import { api } from "./api";

const usersApi = api.injectEndpoints({
	tagTypes: ["Order"],
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
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: "Order",
								id,
							})),
							{ type: "Order", id: "LIST" },
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  ]
					: [{ type: "Order", id: "LIST" }],
		}),
	}),
});
export const { useBuyProductsMutation, useGetOrdersQuery } = usersApi;
