import { toast } from "react-toastify";
import { providesList } from "../utils";
import {baseApi} from "./api";
export type Rating = {
  width: number
  count: number
}
export type CreatedAt={
    date: string
    timestamp: number
}
export type Product = {
	id: string
    title: string
    price: number
    currentPrice: number
    maxQuantity: number;
    category: string;
    rating: Rating
    createdAt: CreatedAt;
    description: string
    discount: number
}
export type Diapason = {
	to: number,
	from: number,
}
export type ProductsQueryResult = {
	products: Product[],
	diapason: Diapason
	pages: number
}
export type QueryParams = Partial<{
	pageParam: number,
	limitParam: string,
	searchParam: string,
	sortParam: "price" | "discount" | "title",
	sortMethod: "1" | "-1",
	categoryParam: string,
	minPrice: string,
	maxPrice: string,
}>
export const productsApi = baseApi.enhanceEndpoints({addTagTypes: ["Product"]}).injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<ProductsQueryResult, QueryParams>({
            query: (params) =>({
                url: "products",
                params: {
                    page: params.pageParam ?? 1,
                    limit: params.limitParam ?? 10,
                    search: params.searchParam ?? "",
                    sort: params.sortParam ?? "price",
                    sortMethod: params.sortMethod ?? "1",
                    category: params.categoryParam ?? "",
                    minPrice: params.minPrice ?? "",
                    maxPrice: params.maxPrice ?? "",
                }
            }),
            providesTags: (result) => providesList(result?.products, 'Product'),
            onQueryStarted(_, {queryFulfilled}) {
                queryFulfilled.then(()=>{
                    toast.success("test toast Product loaded")
                })
                queryFulfilled.catch(()=>{
                    toast.error("test toast Product loaded error")
                })
            }
        }),
        getProduct: build.query<Product, string>({
            query: (id) => `products/${id}`,
        }),
        patchProduct: build.mutation<Product, Product>({
            query: (product) => ({
                url: `products/${product.id}`,
                method: "PUT",
                body: product,
            }),
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then(response=>{
                    const product = response.data
                    dispatch(productsApi.util.updateQueryData("getProduct", product.id, ()=>product))
                })
                queryFulfilled.catch(reject=>{
                    console.log("Failed patchProduct", reject)
                    toast.error("Failed patchProduct")
                })
            },
        }),
        postProduct: build.mutation<Product, Product>({
            query: (body) => ({
                url: `products`,
                method: "POST",
                body,
            }),
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then(response=>{
                    const product = response.data
                    dispatch(productsApi.util.updateQueryData("getProduct", product.id, ()=>product))
                })
                queryFulfilled.catch(reject=>{
                    console.log("Failed postProduct", reject)
                    toast.error("Failed postProduct")
                })
            },
        }),
        deleteProduct: build.mutation<string, string>({
            query: (id) => ({
                url: `products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Product'],
        }),

    }),
});
export const {useGetProductQuery,useGetProductsQuery,useLazyGetProductsQuery,usePostProductMutation,usePatchProductMutation,useDeleteProductMutation} = productsApi