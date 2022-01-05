function palindromeIntegers(arr) {

    arr.forEach(x =>
        x.toString() === x.toString().split("").reverse().join("")
            ? console.log("true")
            : console.log("false")
    )
}
console.log(palindromeIntegers([123, 323, 421, 121]));