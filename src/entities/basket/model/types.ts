import { Product } from "@entities/product"

export interface BasketProductItem extends Product {
    count: number
}
