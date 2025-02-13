import {baseApi} from "./api";
import {  providesList } from "../utils";
import { UserInfo } from "./authApi";
import { Product, CreatedAt } from "./productsApi";
import { toast } from "react-toastify";
export type Review = {
	id: string,
    userId: string,
    productId: string,
    reviewText: string,
    rating: number,
    createdAt: CreatedAt,
}
export interface UserReview extends Omit<Review, "productId"> {productId: Pick<Product, "category"|"title"|"price"|"id">}
export interface ProductReview extends Omit<Review, "userId"> {userId: Pick<UserInfo, "id"|"email"|"roles">}
export interface AllReviews{
    product: ProductReview
    user: UserReview
}
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
        patchReview: builder.mutation<string, Omit<Review, "createdAt" | "userId" | "productId">>({
            query: (body) => ({
                url: `review/${body.id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["UserReview", "ProductReview"]
        }),
        deleteReview: builder.mutation<string, string>({
            query: (id) => ({
                url: `review/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["UserReview", "ProductReview"]
        }),
        postReview: builder.mutation<AllReviews, Omit<Review, "createdAt" | "id" | "userId">>({
            query: (body) => ({
                url: `review`,
                method: "POST",
                body,
            }),
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then(response=>{
                    const {product,user} = response.data
                    dispatch(reviewsApi.util.updateQueryData("getProductReview", product.id, (draft)=>{draft.push(product)}))
                    dispatch(reviewsApi.util.updateQueryData("getUserReview", undefined, (draft)=>{draft.push(user)}))
                })
                queryFulfilled.catch(reject=>{
                    console.log("Failed postReview", reject)
                    toast.error("Failed postReview")
                })
            },
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