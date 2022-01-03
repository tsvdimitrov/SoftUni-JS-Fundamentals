function maxSequenceOfEqualElements(arr) {

    let longestSequences = [];

    arr.reduce((a, v) => {
        a.push(v);
        if (a.every(x => x === v)) {
            if (a.length > longestSequences.length) longestSequences = a.slice();
            return a;
        } else {
            return [v];
        }
    }, []);

    console.log(longestSequences.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
