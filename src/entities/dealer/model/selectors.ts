import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "@app/providers"

const selectDealers = (state: RootState) => state.dealer

const selectDealerIds = createSelector(selectDealers, (dealer) => dealer.dealerIds)

export const selectors = {
    selectDealers,
    selectDealerIds,
}
