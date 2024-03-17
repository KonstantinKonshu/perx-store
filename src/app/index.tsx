import React from "react"
import { InitStartAppParams } from "@shared/types"
import { StoreProvider } from "./providers"

const App = ({ dealers }: InitStartAppParams) => {
    return (
        <StoreProvider dealers={dealers}>
            <div>Perx store</div>
        </StoreProvider>
    )
}

export default App
