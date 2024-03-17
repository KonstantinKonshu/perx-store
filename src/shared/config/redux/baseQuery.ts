import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta> =
    fetchBaseQuery({
        baseUrl: process.env.PUBLIC_API_URL,
    })
