import { api, providesList } from "./api";

const reviewsApi = api.injectEndpoints({
	tagTypes: ["Review"],
	endpoints: (build) => ({
		getProductReview: build.query({
			query: (productId) => `review/product/${productId}`,
			providesTags: (result) => providesList(result, "Review"),
		}),
		getUserReview: build.query({
			query: (userId) => `review/user/${userId}`,
			providesTags: (result) => providesList(result, "Review"),
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
				url: `review`,
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
