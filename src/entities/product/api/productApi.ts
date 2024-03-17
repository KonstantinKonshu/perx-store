import { createBaseApi } from "@shared/config"
import { GetProductsRequest, GetProductsResponse } from "../model"

export const productApi = createBaseApi("product").injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<GetProductsResponse, GetProductsRequest>({
            query: ({ dealers }) => ({
                url: "goods",
                params: { dealers },
            }),
        }),
    }),
})

export const { useGetProductsQuery } = productApi
