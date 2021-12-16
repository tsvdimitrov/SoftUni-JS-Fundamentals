function printAndSum(startNumber, endNumber) {

    let result = '';
    let sum = 0;

    for (let i = startNumber; i <= endNumber; i++) {

        result += ` ${i}`;
        sum += i;
    }

    console.log(result);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);