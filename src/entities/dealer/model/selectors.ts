import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "@app/providers"

export const selectDealers = (state: RootState) => state.dealer

export const selectDealerIds = createSelector(selectDealers, (dealer) => dealer.dealerIds)
