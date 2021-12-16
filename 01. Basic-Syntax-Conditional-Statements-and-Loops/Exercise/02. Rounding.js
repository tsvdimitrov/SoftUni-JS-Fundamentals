function rounding(number, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let rounded = number.toFixed(precision);
    console.log(parseFloat(rounded));
}
rounding(10.5, 3);