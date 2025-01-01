import { baseApi } from "./api";
import { UserInfo } from "./authApi";

interface UserBody extends Pick<UserInfo, "address" | "email" | "username" | "password"> {
    currentPassword: string
    confirmPassword: string
}

export const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        buyProducts: builder.mutation({
            query: (body) => ({
                url: `buyProducts`,
                method: "POST",
                body: body,
            }),
        }),
        getOrders: builder.query({
            query: (userId) => `orders/${userId}`,
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
                })
            },
        }),
    }),
});

export const {useBuyProductsMutation, useGetOrdersQuery, useGetUserQuery, useEditUserMutation} = usersApi
