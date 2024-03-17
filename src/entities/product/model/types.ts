export interface Product {
    id: string
    name: string
    price: number
    image: string
}

export type GetProductsRequest = {
    dealers?: string[]
}

export type GetProductsResponse = Product[]
