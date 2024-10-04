import { api, providesList } from "./api";

const productsApi = api.injectEndpoints({
	tagTypes: ["Product"],
	endpoints: (build) => ({
		getProducts: build.query({
			query: ({
				pageParam = 1,
				limitParam = 10,
				searchParam = "",
				sortParam = "price",
				sortMethod = "1",
				categoryParam = "",
				minPrice = "",
				maxPrice = "",
			}) =>
				`products?page=${pageParam}
				&limit=${limitParam}
				&search=${searchParam}
				&category=${categoryParam}
				&sort=${sortParam}
				&sortMethod=${sortMethod}
				&minPrice=${minPrice}
				&maxPrice=${maxPrice}`,
			// eslint-disable-next-line no-unused-vars
			providesTags: (result) => providesList(result.products, "Product"),
		}),
		getProduct: build.query({
			query: (id) => `products/${id}`,
		}),
		getCategories: build.query({
			query: () => `categories`,
		}),
		patchProduct: build.mutation({
			query: (product) => ({
				url: `products/${product.id}`,
				method: "PUT",
				body: product,
			}),
			invalidatesTags: [{ type: "Product", id: "LIST" }],
		}),
		deleteProduct: build.mutation({
			query: (id) => ({
				url: `products/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: [{ type: "Product", id: "LIST" }],
		}),
		postProduct: build.mutation({
			query: (body) => ({
				url: `products`,
				method: "POST",
				body,
			}),
			invalidatesTags: [{ type: "Product", id: "LIST" }],
		}),
	}),
});
export const {
	useGetCategoriesQuery,
	useGetProductQuery,
	useLazyGetProductsQuery,
	useGetProductsQuery,
	useDeleteProductMutation,
	usePostProductMutation,
	usePatchProductMutation,
} = productsApi;
