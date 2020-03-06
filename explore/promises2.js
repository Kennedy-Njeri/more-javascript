// Promise Chaining


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(5, 3).then((sum) => {
//     console.log(sum)
//
//     add(sum, 6).then((sum) => {
//         console.log(sum)
//     }).catch((error) => {
//         console.log(error)
//     })
//
// }).catch(error => {
//     console.log(error)
// })


add(4, 6).then((sum) => {
    console.log(sum)

    return add(sum, 5)
}).then((sum2) => {
    console.log(sum2)
}).catch(error => {
    console.log(error)
})