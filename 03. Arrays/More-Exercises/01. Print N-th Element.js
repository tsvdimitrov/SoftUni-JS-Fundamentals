function printNthElement(input) {

    let step = Number(input[input.length - 1]);
    let result = [];

    for (let i = 0; i < input.length - 1; i = i + step) {
        result.push(input[i]);
    }

    console.log(result.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2']);