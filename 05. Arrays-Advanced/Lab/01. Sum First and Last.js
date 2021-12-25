function sumFirstAndLast(numsAsStrings) {

    let first = Number(numsAsStrings.shift());
    let last = Number(numsAsStrings.pop());

    return first + last;
}
console.log(sumFirstAndLast(['20', '30', '40']));