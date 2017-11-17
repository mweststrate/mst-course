import React, { Component } from "react"
import { observer } from "mobx-react"

class WishListItemEdit extends Component {
    render() {
        const { item } = this.props
        return (
            <div className="item-edit">
                Thing: <input value={item.name} onChange={this.onNameChange} />
                <br />
                Price: <input value={item.price} onChange={this.onPriceChange} />
                <br />
                Image: <input value={item.image} onChange={this.onImageChange} />
                <br />
            </div>
        )
    }

    onNameChange = event => {
        this.props.item.changeName(event.target.value)
    }

    onPriceChange = event => {
        const price = parseFloat(event.target.value)
        if (!isNaN(price)) this.props.item.changePrice(price)
    }

    onImageChange = event => {
        this.props.item.changeImage(event.target.value)
    }
}

export default observer(WishListItemEdit)
