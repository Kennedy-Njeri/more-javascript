const doCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, [1, 4, 5])
    }, 2000)
}



doCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})