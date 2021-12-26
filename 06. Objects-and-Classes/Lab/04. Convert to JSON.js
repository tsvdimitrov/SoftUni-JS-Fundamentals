function convertToJson(firstName, lastName, hairColor) {

    let result = {
        firstName,
        lastName,
        hairColor
    };

    console.log(JSON.stringify(result));
}
convertToJson('George', 'Jones', 'Brown');