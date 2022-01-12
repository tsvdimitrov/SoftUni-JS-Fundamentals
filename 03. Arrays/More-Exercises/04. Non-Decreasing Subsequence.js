function nonDecreasingSubsequence(input) {

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
nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);