function binaryToDecimal(binary) {

    let decimal = 0;
    let degreeOfTwo = 0;
    let currentDigit = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        currentDigit = Number(binary[i]);
        decimal += currentDigit * 2 ** degreeOfTwo;
        degreeOfTwo++;
    }

    console.log(decimal);
}
binaryToDecimal('00001001');