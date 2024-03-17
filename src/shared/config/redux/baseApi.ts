import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery } from "./baseQuery"

export const createBaseApi = (reducerPath: string) => {
    return createApi({
        reducerPath,
        baseQuery: baseQuery,
        endpoints: () => ({}),
    })
}
