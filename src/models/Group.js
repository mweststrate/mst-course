import { types, flow } from "mobx-state-tree"

import { WishList } from "./WishList"

const User = types
    .model({
        id: types.string,
        name: types.string,
        gender: types.enumeration("gender", ["m", "f"]),
        wishList: types.optional(WishList, {})
    })
    .actions(self => ({
        getSuggestions: flow(function* getSuggestions() {
            const response = yield window.fetch(`http://localhost:3001/suggestions_${self.gender}`)
            self.wishList.items.push(...(yield response.json()))
        })
    }))

export const Group = types.model({
    users: types.map(User)
})
