function factorialDivision(...args) {

    let result = [];
    args.forEach((x, i) => {
        for (let j = x; j > 0; j--) {
            result[i] = j * (result[i] || 1);
        }
    })

    console.log((result[0] / result[1]).toFixed(2));
}
factorialDivision(5, 2);