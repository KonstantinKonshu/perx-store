import React, { Component } from "react"
import { createRoot } from "react-dom/client"
import App from "@app"
import { InitStartAppParams } from "@shared/types"

class AppRoot extends Component {
    start({ dealers }: InitStartAppParams): void {
        const domNode = document.getElementById("root")

        if (!domNode) {
            throw new Error("Отсутсвует корневой узел DOM 'root'")
        }

        const root = createRoot(domNode)

        root.render(<App dealers={dealers} />)
    }
}

window.App = AppRoot
