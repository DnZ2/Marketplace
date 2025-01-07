import { providesList } from "../utils";
import {baseApi} from "./api";
export type Rating = {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}
export type Product = {
	id: string
    title: string
    price: number
    currentPrice: number
    maxQuantity: number;
    category: string;
    rating: Rating
    createdAt: number;
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
    showMore: boolean
}>
export const productsApi = baseApi.enhanceEndpoints({addTagTypes: ["Product"]}).injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<ProductsQueryResult, QueryParams>({
            query: ({
                pageParam = "1",
                limitParam = "10",
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
            providesTags: (result) => providesList(result?.products, 'Product'),
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
            invalidatesTags: ['Product'],
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then(response=>{
                    const product = response.data
                    dispatch(productsApi.util.updateQueryData("getProduct", product.id, ()=>product))
                })
                queryFulfilled.catch(reject=>{console.log("Failed patchProduct", reject)})
            },
        }),
        postProduct: build.mutation<Product, Product>({
            query: (body) => ({
                url: `products`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Product'],
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then(response=>{
                    const product = response.data
                    dispatch(productsApi.util.updateQueryData("getProduct", product.id, ()=>product))
                })
                queryFulfilled.catch(reject=>{console.log("Failed patchProduct", reject)})
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