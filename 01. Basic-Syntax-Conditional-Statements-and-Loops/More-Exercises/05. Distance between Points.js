function distanceBetweenPoints(x1, y1, x2, y2) {

    let distance = Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2;
    distance = Math.sqrt(distance);

    console.log(distance);
}
distanceBetweenPoints(2, 4, 5, 0);
