const myFunc = callback => {
    const value = 88

    callback(value)
}

myFunc(number => {
    console.log(number)
})