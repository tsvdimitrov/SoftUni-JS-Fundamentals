function maxNumber(arr) {

    console.log(arr.filter((x, i) => arr.slice(i + 1).every(y => x > y)).join(' '));
}
maxNumber([1, 4, 3, 2]);