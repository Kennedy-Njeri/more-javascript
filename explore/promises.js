const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([7, 4, 1])
    }, 2000)
})



doPromise.then((result) => {
    console.log("Resolved", result)
}).catch(error => {
    console.log("Error", error)
})
