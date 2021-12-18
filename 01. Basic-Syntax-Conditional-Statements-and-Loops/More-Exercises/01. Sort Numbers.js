function sortNumbers(numbA, numbB, numbC) {

    let max = numbA;

    if (max < numbB) {
        max = numbB;
    }

    if (max < numbC) {
        max = numbC;
    }
    console.log(max);

    if (max == numbA) {
        if (numbB > numbC) {
            console.log(numbB);
            console.log(numbC);
        } else {
            console.log(numbC);
            console.log(numbB);
        }
    }

    if (max == numbB) {
        if (numbA > numbC) {
            console.log(numbA);
            console.log(numbC);
        } else {
            console.log(numbC);
            console.log(numbA);
        }
    }

    if (max == numbC) {
        if (numbA > numbB) {
            console.log(numbA);
            console.log(numbB);
        } else {
            console.log(numbB);
            console.log(numbA);
        }
    }
}
sortNumbers(2, 1, 3);