function primeNumberChecker(numA) {

    let isPrime = true;

    for (let i = 1; i <= numA; i++) {
        if (numA % i == 0 && i != 1 && i != numA) {
            isPrime = false;
            console.log(isPrime);
            break;
        }
    }

    if (isPrime) {
        console.log(isPrime);
    }
}
primeNumberChecker();