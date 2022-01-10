function furntinure(input) {

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.?[\d]+)?)!(?<quantity>[\d]+)/g;

    let result = "Bought furniture:\n";
    let price = 0;

    for (const line of input) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.?[\d]+)?)!(?<quantity>[\d]+)/g;
        let match = pattern.exec(line);
        if (match) {

            result += match.groups.name + `\n`;
            price += Number(match.groups.price) * Number(match.groups.quantity);
        }
    }

    result += `Total money spend: ${price.toFixed(2)}`

    console.log(result);
}