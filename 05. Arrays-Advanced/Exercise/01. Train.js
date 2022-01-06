function train(arr) {

    let wagons = arr
        .shift()
        .split(" ")
        .map(x => Number(x));

    const maxSeats = Number(arr.shift());

    function addPassengers(n) {
        for (let i = 0; i < wagons.length; i++) {
            if (wagons[i] + n <= maxSeats) {
                wagons[i] += n;
                break;
            }
        }
    }

    function add(value) {
        wagons.push(value);
    }

    arr.forEach(x => {
        const [command, value] = x.split(" ")
        value ? add(Number(value)) : addPassengers(Number(command));
    })

    return wagons.join(" ");
}
console.log(train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']));