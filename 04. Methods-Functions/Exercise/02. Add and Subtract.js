function addAndSubtract(firstNumber, secondNumber, thirdNumber) {

    function sum(firstNumber, secondNumber) {
        let result = firstNumber + secondNumber;
        return result;
    }

    function subtract(firstNumber, secondNumber) {
        let result = firstNumber - secondNumber;
        return result;
    }

    let numbersSum = sum(firstNumber, secondNumber);
    let result = subtract(numbersSum, thirdNumber);
    return result;

}
console.log(addAndSubtract(23, 6, 10,));