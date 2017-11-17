import React from "react"
import ReactDOM from "react-dom"
import "./assets/index.css"
import App from "./components/App"

import { getSnapshot } from "mobx-state-tree"

import { WishList } from "./models/WishList"

let initialState = {
    items: [
        {
            name: "LEGO Mindstorms EV3",
            price: 349.95,
            image: "https://images-na.ssl-images-amazon.com/images/I/71CpQw%2BufNL._SL1000_.jpg"
        },
        {
            name: "Miracles - C.S. Lewis",
            price: 12.91,
            image:
                "https://images-na.ssl-images-amazon.com/images/I/51a7xaMpneL._SX329_BO1,204,203,200_.jpg"
        }
    ]
}

let wishList = WishList.create(initialState)

function renderApp() {
    ReactDOM.render(<App wishList={wishList} />, document.getElementById("root"))
}

renderApp()

if (module.hot) {
    module.hot.accept(["./components/App"], () => {
        // new components
        renderApp()
    })

    module.hot.accept(["./models/WishList"], () => {
        // new model definitions
        const snapshot = getSnapshot(wishList)
        wishList = WishList.create(snapshot)
        renderApp()
    })
}
