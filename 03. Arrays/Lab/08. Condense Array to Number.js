function condenseArrayToNumber(arr) {

    while (arr.length !== 1) {
        for (let i = 0; i <= arr.length - 1; i++) {
            if (i == arr.length - 1) {
                arr.pop(); break;
            }
            let sum = arr[i] + arr[i + 1];
            arr[i] = sum;
        }
    }

    console.log(arr[0]);
}
condenseArrayToNumber([2, 10, 3]);
