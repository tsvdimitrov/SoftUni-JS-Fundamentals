function processOddNumbers(nums) {

    let predicate = (x, i) => x % 2 == 1;
    let filtered = nums.filter(predicate);

    let operation = x => x * 2;
    let mapped = filtered.map(operation);

    let reversed = mapped.reverse();

    console.log(reversed.join(' '));
}
processOddNumbers([10, 15, 20, 25]);