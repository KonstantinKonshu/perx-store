import React, { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import { InitStartAppParams } from "@shared/types"
import { createStore } from "./store"

const StoreProvider = ({ children, dealers: dealerIds = [] }: PropsWithChildren<InitStartAppParams>) => {
    const store = createStore({ dealer: { dealerIds } })

    const persistor = persistStore(store)

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default StoreProvider
