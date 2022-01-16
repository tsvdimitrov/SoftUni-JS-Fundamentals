function garage(input) {
    let garages = {}

    for (let line of input) {
        let [garage, carInfo] = line.split(" - ");

        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = [];
        }

        garages[garage].push(carInfo);
    }

    let output = "";

    Object.entries(garages).sort((a, b) => a[0] - b[0]).forEach(([garage, cars]) => {
        output += `Garage № ${garage}\n`;
        for (let currCar of cars) {
            currCar = currCar.replace(/: /g, ' - ');
            output += `--- ${currCar}\n`
        }
    });

    console.log(output);
}