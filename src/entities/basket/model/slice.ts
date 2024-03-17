import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { BasketProductItem } from "./types"

export const basketAdapter = createEntityAdapter<BasketProductItem>()

const initialState = basketAdapter.getInitialState()

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProductToBusket: (state, action: PayloadAction<BasketProductItem>) => {
            basketAdapter.setOne(state, action.payload)
        },
        updateBusketProductCount: (state, action: PayloadAction<BasketProductItem>) => {
            basketAdapter.setOne(state, action.payload)
        },
        removeBusketProduct: (state, action: PayloadAction<BasketProductItem["id"]>) => {
            basketAdapter.removeOne(state, action.payload)
        },
        removeAllBusketProducts: basketAdapter.removeAll,
    },
})

export const { addProductToBusket, updateBusketProductCount, removeBusketProduct, removeAllBusketProducts } =
    basketSlice.actions

export default basketSlice.reducer
