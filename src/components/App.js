import React, { Component } from "react"
import logo from "../assets/santa-claus.png"

import WishListView from "./WishListView"

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">WishList</h1>
                </header>
                <WishListView wishList={this.props.wishList} />
            </div>
        )
    }
}

export default App
