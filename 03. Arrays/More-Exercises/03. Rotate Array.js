function rotateArray(input) {

    let rotations = Number(input[input.length - 1]);
    let result = input;
    result.pop();

    for (let i = 1; i <= rotations; i++) {
        result.unshift(result[result.length - 1]);
        result.pop();
    }

    console.log(result.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);