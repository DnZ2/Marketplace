import {baseApi} from "./api";
import {  providesList } from "../utils";
import { UserInfo } from "./authApi";
import { Product } from "./productsApi";
type Review = {
	id: string,
    userId: string,
    productId: string,
    reviewText: string,
    rating: number,
    createdAt: number,
}
export interface UserReview extends Omit<Review, "productId"> {productId: Pick<Product, "category"|"title"|"price"|"id">}
export interface ProductReview extends Omit<Review, "userId"> {userId: Pick<UserInfo, "id"|"email"|"roles">}
export const reviewsApi = baseApi.enhanceEndpoints({addTagTypes: ["ProductReview", "UserReview"]}).injectEndpoints({
    endpoints: (builder) => ({
        getProductReview: builder.query<ProductReview[], string>({
            query: (productId) => `review/product/${productId}`,
            providesTags: (result)=>providesList(result, "ProductReview")
        }),
        getUserReview: builder.query<UserReview[], void>({
            query: () => `review/user`,
            providesTags: (result)=>providesList(result, "UserReview")
        }),
        patchReview: builder.mutation<string, Omit<Review, "createdAt">>({
            query: (body) => ({
                url: `review/${body.id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["UserReview", "ProductReview"]
        }),
        deleteReview: builder.mutation<string, Omit<Review, "createdAt">>({
            query: (body) => ({
                url: `review/${body.id}`,
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["UserReview", "ProductReview"]
        }),
        postReview: builder.mutation<string, Omit<Review, "createdAt" | "id">>({
            query: (body) => ({
                url: `review`,
                method: "POST",
                body,
            }),
            invalidatesTags: ["UserReview", "ProductReview"]
        }),
    }),
});
export const {
    useDeleteReviewMutation,
    useGetProductReviewQuery,
    useGetUserReviewQuery,
    usePatchReviewMutation,
    usePostReviewMutation
} = reviewsApi