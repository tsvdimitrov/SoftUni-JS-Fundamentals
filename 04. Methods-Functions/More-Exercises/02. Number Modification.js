function solve(numberA) {

    while (!validation(numberA)) {
        numberA = addDigit(numberA);
    }

    console.log(numberA);

    function validation(inputNumber) {
        let currentDigit = 0;
        let sumOfDigits = 0;
        let digitsCounter = 0;
        let averageValueOfDigits = 0;
        while (inputNumber >= 1) {
            currentDigit = inputNumber % 10;
            digitsCounter++;
            sumOfDigits += currentDigit;
            inputNumber = Math.floor(inputNumber / 10);
        }
        averageValueOfDigits = sumOfDigits / digitsCounter;
        if (averageValueOfDigits > 5) {
            return true;
        } else {
            return false;
        }
    }

    function addDigit(inputNumber) {
        inputNumber = inputNumber.toString();
        inputNumber += "9";
        inputNumber = Number(inputNumber);
        return inputNumber;
    }
}