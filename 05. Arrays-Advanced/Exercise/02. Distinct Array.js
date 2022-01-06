function distinctArray(arr) {

    return arr.reduce((a, v) => {
        if (!a.includes(v)) a.push(v)
        return a;
    }, []).join(' ');
}
console.log(distinctArray([1, 2, 3, 4]));