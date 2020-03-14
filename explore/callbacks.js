// setTimeout(() => {
//     console.log("Two seconds are up")
// }, 3000)
//
// const names = ["kev", "joe", "jes", "charity"]
//
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })
//
// console.log(shortNames)


const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geoCode('Nairobi', (data) => {
    console.log(data)
})


const numbers = (a, b, callback) => {
    const sum = a + b
   console.log(sum)
    callback()
}



numbers(5, 3, () => {
    setTimeout(() => {
        console.log("Very Nice")
    }, 3000)

})

