function vacation(peopleCount, groupType, dayOfWeek) {

    let price = 0;

    if (dayOfWeek == 'Friday') {
        if (groupType == 'Students') {
            if (peopleCount >= 30) {
                price = peopleCount * 8.45 * 0.85;
            } else {
                price = peopleCount * 8.45;
            }
        } else if (groupType == 'Business') {
            if (peopleCount >= 100) {
                price = (peopleCount - 10) * 10.90;
            } else {
                price = peopleCount * 10.90;
            }
        } else if (groupType == 'Regular') {
            if (peopleCount >= 10 && peopleCount <= 20) {
                price = peopleCount * 15 * 0.95;
            } else {
                price = peopleCount * 15;
            }
        }
    } else if (dayOfWeek == 'Saturday') {
        if (groupType == 'Students') {
            if (peopleCount >= 30) {
                price = peopleCount * 9.80 * 0.85;
            } else {
                price = peopleCount * 9.80;
            }
        } else if (groupType == 'Business') {
            if (peopleCount >= 100) {
                price = (peopleCount - 10) * 15.60;
            } else {
                price = peopleCount * 15.60;
            }
        } else if (groupType == 'Regular') {
            if (peopleCount >= 10 && peopleCount <= 20) {
                price = peopleCount * 20 * 0.95;
            } else {
                price = peopleCount * 20;
            }
        }
    } else if (dayOfWeek == 'Sunday') {
        if (groupType == 'Students') {
            if (peopleCount >= 30) {
                price = peopleCount * 10.46 * 0.85;
            } else {
                price = peopleCount * 10.46;
            }
        } else if (groupType == 'Business') {
            if (peopleCount >= 100) {
                price = (peopleCount - 10) * 16;
            } else {
                price = peopleCount * 16;
            }
        } else if (groupType == 'Regular') {
            if (peopleCount >= 10 && peopleCount <= 20) {
                price = peopleCount * 22.50 * 0.95;
            } else {
                price = peopleCount * 22.50;
            }
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
);