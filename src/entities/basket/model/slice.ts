import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { BasketProductItem } from "./types"

export const basketAdapter = createEntityAdapter<BasketProductItem>()

const initialState = basketAdapter.getInitialState()

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProductToBasket: (state, action: PayloadAction<BasketProductItem>) => {
            basketAdapter.setOne(state, action.payload)
        },
        updateBasketProduct: (state, action: PayloadAction<BasketProductItem>) => {
            basketAdapter.setOne(state, action.payload)
        },
        removeBasketProduct: (state, action: PayloadAction<BasketProductItem["id"]>) => {
            basketAdapter.removeOne(state, action.payload)
        },
        removeAllBasketProducts: basketAdapter.removeAll,
    },
})

export const { addProductToBasket, updateBasketProduct, removeBasketProduct, removeAllBasketProducts } =
    basketSlice.actions

export default basketSlice.reducer
