
const fs = require('fs')

// const book = {
//     title: 'The river Between',
//     author: 'Mark spears'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('json.json', bookJson)
// const dataBuffer = fs.readFileSync('json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data)
//console.log(dataBuffer.toString())

//console.log(bookJson)


// const parsedData = JSON.parse(bookJson)
// console.log(parsedData.title)


// question
const dataBuffer = fs.readFileSync('json1.json')
const dataJson = dataBuffer.toString()
const user = JSON.parse(dataJson)

//console.log(user)


user.name = "Owen"
user.age = 22

const userJson = JSON.stringify(user)
fs.writeFileSync('json1.json', userJson)


