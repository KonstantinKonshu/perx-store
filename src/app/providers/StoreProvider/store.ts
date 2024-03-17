import { ConfigureStoreOptions, combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist"
import { productApi } from "@entities/product"
import { basketSlice } from "@entities/basket"
import { dealerSlice } from "@entities/dealer"

const rootReducer = combineReducers({
    [productApi.reducerPath]: productApi.reducer,
    basket: basketSlice.reducer,
    dealer: dealerSlice.reducer,
})
export const persistedReducer = persistReducer(
    {
        key: "root",
        version: 1,
        storage,
    },
    rootReducer
)

export const createStore = (preloadedState?: ConfigureStoreOptions["preloadedState"]) =>
    configureStore({
        preloadedState,
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(productApi.middleware),
    })
