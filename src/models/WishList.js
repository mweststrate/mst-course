import { types } from "mobx-state-tree"

export const WishListItem = types.model({
    name: types.string,
    price: types.number,
    image: ""
})

export const WishList = types.model({
    items: types.optional(types.array(WishListItem), [])
})
