import React from "react"
import ReactDOM from "react-dom"
import "./assets/index.css"
import App from "./components/App"

import { getSnapshot } from "mobx-state-tree"

import { Group } from "./models/Group"

let initialState = { users: {} }

let group = (window.group = Group.create(initialState))

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
        group = window.group = Group.create(snapshot)
        renderApp()
    })
}
