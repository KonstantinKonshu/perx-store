import React from "react"
import { HashRouter } from "react-router-dom"
import { InitStartAppParams } from "@shared/types"
import { Routing, StoreProvider } from "./providers"
import "./index.module.scss"

const App = ({ dealers }: InitStartAppParams) => {
    return (
        <StoreProvider dealers={dealers}>
            <HashRouter>
                <Routing />
            </HashRouter>
        </StoreProvider>
    )
}

export default App
