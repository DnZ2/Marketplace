import { api } from "./api";

const reviewsApi = api.injectEndpoints({
	tagTypes: ["Review"],
	endpoints: (build) => ({
		getProductReview: build.query({
			query: (productId) => `review/product/${productId}`,

			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: "Review",
								id,
							})),
							{ type: "Review", id: "LIST" },
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  ]
					: [{ type: "Review", id: "LIST" }],
		}),
		getUserReview: build.query({
			query: (userId) => `review/user/${userId}`,
		}),
		patchReview: build.mutation({
			query: (product) => ({
				url: `review/${product.id}`,
				method: "PUT",
				body: product,
			}),
			invalidatesTags: [{ type: "Review", id: "LIST" }],
		}),
		deleteReview: build.mutation({
			query: (review) => ({
				url: `review/${review.id}`,
				method: "DELETE",
				body: review,
			}),
			invalidatesTags: [{ type: "Review", id: "LIST" }],
		}),
		postReview: build.mutation({
			query: (body) => ({
				url: `products`,
				method: "POST",
				body,
			}),
			invalidatesTags: [{ type: "Review", id: "LIST" }],
		}),
	}),
});
export const {
	useGetProductReviewQuery,
	useGetUserReviewQuery,
	usePatchReviewMutation,
	useDeleteReviewMutation,
	usePostReviewMutation,
} = reviewsApi;
