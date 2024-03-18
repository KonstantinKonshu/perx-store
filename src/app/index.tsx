import React from "react"
import { BrowserRouter } from "react-router-dom"
import { InitStartAppParams } from "@shared/types"
import { Routing, StoreProvider } from "./providers"
import "./index.module.scss"

const App = ({ dealers }: InitStartAppParams) => {
    return (
        <StoreProvider dealers={dealers}>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </StoreProvider>
    )
}

export default App
