import { LocalStorage } from "../../../lib/local-storage";
import { setAuth, setUnauth } from "../../slices/userSlice";
import {baseApi} from "./api";
import { usersApi } from "./usersApi";

type Role = "USER" | "ADMIN"
export type UserInfo = {
    username: string;
    email: string;
    address?: string,
	password: string,
    id: string;
    isActivated: boolean;
    roles: Role[];
}
export type UserData = {
	accessToken: string
	refreshToken: string
	user: Omit<UserInfo, "password">
}
export interface LoginParams extends Pick<UserInfo, "email" | "password"> {}
export interface RefreshToken extends Pick<UserData, "refreshToken"> {}
export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserData, LoginParams>({
            query: (body) => ({
                url: `login`,
                method: "POST",
                body,
            }),
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then((response)=>{
                    LocalStorage.set("token", response.data.accessToken);
                    dispatch(setAuth())
                    dispatch(usersApi.util.updateQueryData("getUser", undefined, (cachedData)=>({ ...cachedData, ...response.data.user })))
                })
                queryFulfilled.catch(reject=>{
                    console.log("Failed postCategories", reject)
                })
            },
        }),
        registration: builder.mutation<UserData, LoginParams>({
            query: (body) => ({
                url: `registration`,
                method: "POST",
                body,
            }),
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then((response)=>{
                    LocalStorage.set("token", response.data.accessToken);
                    dispatch(setAuth())
                    dispatch(usersApi.util.updateQueryData("getUser", undefined, (cachedData)=>({ ...cachedData, ...response.data.user })))
                })
                queryFulfilled.catch(reject=>{
                    console.log("Failed postCategories", reject)
                })
            },
        }),
        logout: builder.mutation<RefreshToken, void>({
            query: () => ({
                url: `logout`,
                method: "POST",
            }),
            onQueryStarted(_, {dispatch, queryFulfilled}) {
                queryFulfilled.then(()=>{
                    LocalStorage.delete("token");
                    dispatch(setUnauth())
                    dispatch(usersApi.util.resetApiState())
                    dispatch(authApi.util.resetApiState())
                })
                queryFulfilled.catch(reject=>{
                    console.log("Failed postCategories", reject)
                })
            },
        }),
        refresh: builder.mutation<UserData, void>({
            query: () => ({
                url: `refresh`,
                method: 'POST'
            }),
        }),
        
    }),
});
export const {useLoginMutation,useLogoutMutation,useRegistrationMutation} = authApi