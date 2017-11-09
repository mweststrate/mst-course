import React from "react"
import ReactDOM from "react-dom"
import "./assets/index.css"
import App from "./components/App"

import { getSnapshot } from "mobx-state-tree"

import { Group } from "./models/Group"

let initialState = {
    users: {
        a342: {
            id: "a342",
            name: "Homer",
            gender: "m"
        },
        "5fc2": {
            id: "5fc2",
            name: "Marge",
            gender: "f"
        },
        "663b": {
            id: "663b",
            name: "Bart",
            gender: "m"
        },
        "65aa": {
            id: "65aa",
            name: "Maggie",
            gender: "f"
        },
        ba32: {
            id: "ba32",
            name: "Lisa",
            gender: "f"
        }
    }
}

let group = Group.create(initialState)

function renderApp() {
    ReactDOM.render(<App group={group} />, document.getElementById("root"))
}

renderApp()

if (module.hot) {
    module.hot.accept(["./components/App"], () => {
        // new components
        renderApp()
    })

    module.hot.accept(["./models/Group"], () => {
        // new model definitions
        const snapshot = getSnapshot(group)
        group = Group.create(snapshot)
        renderApp()
    })
}
