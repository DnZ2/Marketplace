import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, } from "@reduxjs/toolkit/query/react";
import { LocalStorage } from "shared/lib/local-storage";
import { setUnauth } from "../../slices/userSlice";
import { usersApi, authApi, UserData } from ".";
const customBaseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include",
    prepareHeaders: (headers) => {
        const token = LocalStorage.has("token");
        if (token) {
            headers.set("Authorization", `Bearer ${LocalStorage.get("token")}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await customBaseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        const response = await api.dispatch(authApi.endpoints.refresh.initiate())
        if (response?.data) {
            const user = response.data as UserData
            LocalStorage.set("token", user.accessToken);
            result = await customBaseQuery(args, api, extraOptions);
        } else {
            LocalStorage.delete("token");
            api.dispatch(setUnauth())
            api.dispatch(usersApi.util.resetApiState())
            api.dispatch(authApi.util.resetApiState())
        }
    }
    return result;
}

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});