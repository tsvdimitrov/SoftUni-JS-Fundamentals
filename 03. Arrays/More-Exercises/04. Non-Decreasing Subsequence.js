function solve(input) {

    let result = [];
    let currentMaxNumber = input[0];
    result.push(currentMaxNumber);

    for (let i = 1; i < input.length; i++) {
        if (currentMaxNumber <= input[i]) {
            currentMaxNumber = input[i];
            result.push(currentMaxNumber);
        }
    }

    console.log(result.join(" "));
}
solve();