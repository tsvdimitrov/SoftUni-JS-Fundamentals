function flightSchedule(input) {
    
    let flights = {};

    input[0].forEach(line => {
        let [flyNumber, destination] = line.split(" ");
        flights[flyNumber] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });

    input[1].forEach(line => {
        let [flyNumber, status] = line.split(" ");
        if (flights.hasOwnProperty(flyNumber)) {
            flights[flyNumber].Status = status;
        }
    });


    for (let fly in flights) {
        if (flights[fly].Status === String(input[2])) {
            console.log(flights[fly]);
        }
    }
}