import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "@app/providers"
import { basketAdapter } from "./slice"

const basketAdapterSelectors = basketAdapter.getSelectors<RootState>((state) => state.basket)

const selectBasketTotalAmount = createSelector(basketAdapterSelectors.selectAll, (basketProducts) =>
    basketProducts.reduce((accumulator, { price, count }) => {
        return accumulator + price * count
    }, 0)
)

const selectBasketTotalQuantity = createSelector(basketAdapterSelectors.selectAll, (basketProducts) =>
    basketProducts.reduce((accumulator, { count }) => {
        return accumulator + count
    }, 0)
)

export const selectors = {
    selectBasketProductById: basketAdapterSelectors.selectById,
    selectBasketProducts: basketAdapterSelectors.selectAll,
    selectBasketTotalAmount,
    selectBasketTotalQuantity,
}
