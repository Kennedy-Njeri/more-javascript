
const name = "Kennedy"

const userAge = 22

const user = {
    name: name,
    age: userAge,
    location: "Kenya"

}
console.log(user)


// Object Destructuring
const product = {
    label: "Notebook",
    price: 4500,
    stock: 234,
    salePrice: undefined
}


// const { label: productLabel, price, stock, salePrice } = product
//
// console.log(productLabel, price, stock, salePrice)

const transaction = (type, {label, price }) => {
    console.log(`The cost of the ${label} is ${price}`)
}

transaction('order', product)
