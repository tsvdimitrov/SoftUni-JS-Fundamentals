function searchForANumber(arr, arr1) {

    let result = arr.slice(0, arr1[0]);
    result.splice(0, arr1[1]);
    result = result.filter(x => x === arr1[2]);

    console.log(`Number ${arr1[2]} occurs ${result.length} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);