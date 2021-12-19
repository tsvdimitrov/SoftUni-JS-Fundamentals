function fuelMoney(distance, people, price) {

    let consumption = 7 + (people * 0.1);
    let fuel = distance / 100 * consumption;
    let total = fuel * price;

    console.log(`Needed money for that trip is ${total} lv`);

}
fuelMoney(260, 9, 2.49);