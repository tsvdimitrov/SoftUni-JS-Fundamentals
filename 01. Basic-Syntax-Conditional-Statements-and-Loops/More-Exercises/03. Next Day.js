function nextDay(year, month, day) {

    month--;
    let output = new Date(year, month, day + 1);

    console.log(`${output.getFullYear()}-${output.getMonth() + 1}-${output.getDate()}`);
}
nextDay(2016, 9, 30);