function biggestOf3Numbers(numA, numB, numC) {

    let max = numA;

    if (numB > max) {
        max = numB;
    }
    if (numC > max) {
        max = numC;
    }

    console.log(max);
}
biggestOf3Numbers(-2, 7, 3);