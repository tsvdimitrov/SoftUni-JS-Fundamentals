function sortAnArrayBy2Criteria(arr) {

    return arr
        .sort((x, y) => {
            return x.length - y.length !== 0
                ? x.length - y.length
                : x.toLocaleLowerCase().localeCompare(y.toLocaleLowerCase());
        })
        .forEach(x => console.log(x));
}
console.log(sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]));