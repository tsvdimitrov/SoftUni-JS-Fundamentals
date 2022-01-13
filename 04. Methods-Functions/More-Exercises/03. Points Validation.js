function solve(coordinates) {

    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];

    if (validation(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (validation(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (validation(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function validation(coordinateX1, coordinateY1, coordinateX2, coordinateY2,) {
        let sideX = Math.abs(coordinateX1 - coordinateX2);
        let sideY = Math.abs(coordinateY1 - coordinateY2);
        let sideZ = Math.sqrt(sideX ** 2 + sideY ** 2);
        
        return Number.isInteger(sideZ);
    }
}