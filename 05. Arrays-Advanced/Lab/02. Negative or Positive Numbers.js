function negativeOrPositiveNumbers(nums) {

    let result = [];

    for (let num of nums) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (let num of result) {
        console.log(num);
    }
}
negativeOrPositiveNumbers([7, -2, 8, 9]);