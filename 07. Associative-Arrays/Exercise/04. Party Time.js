function partyTime(input) {

    let partyIndex = input.indexOf("PARTY");
    let guestList = input.slice(0, partyIndex);
    let commingGuest = input.slice(partyIndex + 1);

    let reservationList = generateGuestList(guestList);

    commingGuest.forEach((guest) => {
        let status = checkForVIP(guest);
        let correctList = status ? "vip" : "regular";
        let currentGuest = reservationList[correctList].find((o) => o.guest === guest)
        if (status && currentGuest) {
            currentGuest.isHere = true;
        } else if (!status && currentGuest) {
            currentGuest.isHere = true;
        }

    });
    let vipGuests = reservationList.vip.filter((o) => o.isHere === false)
    let regularGuests = reservationList.regular.filter((o) => o.isHere === false)

    console.log(vipGuests.length + regularGuests.length);

    vipGuests.concat(regularGuests).forEach((guest) => console.log(guest.guest));

    function generateGuestList(guests) {
        let obj = {
            vip: [],
            regular: []
        };

        guests.forEach((guest) => {
            let guestObj = { guest, isHere: false }
            if (checkForVIP(guest)) {
                obj.vip.push(guestObj)
            } else {
                obj.regular.push(guestObj)

            }
        });

        return obj;
    }
    function checkForVIP(guest) {
        return !isNaN(Number(guest[0]));
    }
}
partyTime();