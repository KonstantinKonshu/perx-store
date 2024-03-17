import { createSlice } from "@reduxjs/toolkit"
import { DealerInitialState } from "./types"

const initialState: DealerInitialState = {
    dealerIds: [],
}

export const dealerSlice = createSlice({
    name: "dealer",
    initialState,
    reducers: {},
})

export default dealerSlice.reducer
