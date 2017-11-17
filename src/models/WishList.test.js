import { WishList, WishListItem } from "./WishList"

it("can create a instance of a model", () => {
    const item = WishListItem.create({
        name: "Chronicles of Narnia Box Set - C.S. Lewis",
        price: 28.73
    })

    expect(item.price).toBe(28.73)
    expect(item.image).toBe("")
})

it("can create a wishlist", () => {
    const list = WishList.create({
        items: [
            {
                name: "Chronicles of Narnia Box Set - C.S. Lewis",
                price: 28.73
            }
        ]
    })

    expect(list.items.length).toBe(1)
    expect(list.items[0].price).toBe(28.73)
})
