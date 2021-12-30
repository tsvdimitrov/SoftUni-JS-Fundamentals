function spiceMustFlow(yield) {

    let consumation = 26;
    let days = 0;
    let totalSpice = 0;

    while (yield >= 100) {
        totalSpice += yield - consumation;
        days++;
        yield -= 10;
        if (yield < 100) {
            totalSpice -= consumation;
            break;
        }
    }

    console.log(days);
    console.log(totalSpice);
}
spiceMustFlow(111);