import { createStore, persistedReducer } from "./store"

export type RootState = ReturnType<typeof persistedReducer>
export type AppDispatch = ReturnType<typeof createStore>["dispatch"]
