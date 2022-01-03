function mergeArrays(firstList, secondList) {

    let resultList = [];

    for (let i = 0; i < firstList.length; i++) {
        let firstListElement = firstList[i];
        let secondListElement = secondList[i];

        if (i % 2 === 0) {
            let sum = Number(firstListElement) + Number(secondListElement);
            resultList.push(sum);
        } else {
            let result = firstListElement + secondListElement;
            resultList.push(result);
        }
    }
    console.log(resultList.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);