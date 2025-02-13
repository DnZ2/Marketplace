import { toast } from "react-toastify";
import { baseApi } from "./api";
import { UserInfo } from "./authApi";
import { CreatedAt } from "./productsApi";

export interface OrderProduct{
    productId: string,
    title: string,
    quantity: number,
    price: number,
    totalPrice: number
}

export interface Order{
    id: string,
    products: OrderProduct[]
    paymentAmount: number,
    isReturned: boolean,
    createdAt: CreatedAt
    address: string
}

export interface OrderBody extends Pick<Order, "products" | "address" | "paymentAmount">{}
export interface UserBody extends Pick<UserInfo, "address" | "email" | "username" | "password"> {
    currentPassword: string
    confirmPassword: string
}

export const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        buyProducts: builder.mutation<Order, OrderBody>({
            query: (body) => ({
                url: `buyProducts`,
                method: "POST",
                body: body,
            }),
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then((response)=>{
                    const order = response.data
                    dispatch(usersApi.util.updateQueryData("getOrders", undefined, (draft)=>{draft.push(order)}))
                })
                queryFulfilled.catch(reject=>{
                    console.log("Failed buyProducts", reject)
                    toast.error("Failed buyProducts")
                })
            },
        }),
        getOrders: builder.query<Order[], void>({
            query: () => `orders`,
        }),
        getUser: builder.query<Omit<UserInfo, "password">, void>({
            query: () => ({
                url: `user`,
            }),
        }),
        editUser: builder.mutation<UserInfo, UserBody>({
            query: (body) => ({
                url: `user`,
                method: "PUT",
                body
            }),
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then((response)=>{
                    dispatch(usersApi.util.updateQueryData("getUser", undefined, (cachedData)=>({ ...cachedData, ...response.data })))
                })
                queryFulfilled.catch(reject=>{
                    console.log("Failed editUser", reject)
                    toast.error("Failed editUser")
                })
            },
        }),
    }),
});

export const {useBuyProductsMutation, useGetOrdersQuery, useGetUserQuery, useEditUserMutation} = usersApi
