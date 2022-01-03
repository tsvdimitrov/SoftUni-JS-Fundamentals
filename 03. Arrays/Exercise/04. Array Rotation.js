function arrayRotation(arr, n) {

    for (let index = 0; index < n; index++) {
        let el = arr.shift();
        arr.push(el);
    }

    console.log(arr.join(' '));
}
arrayRotation();