function lastKNumbersSequence(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {

        let current = 0;
        let elements = result.slice(-k);

        for (let num of elements) {
            current += num;
        }
        result.push(current);
    }

    console.log(result.join(' '));
}
lastKNumbersSequence(6, 3);