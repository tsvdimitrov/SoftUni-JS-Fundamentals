function softUniBarIncome(input) {

    let income = 0;

    for (const line of input) {
        const regex = /%(?<name>[A-Z][a-z]+)%([^\|\$\%\.]+)?<(?<product>\w+)>([^\|\$\%\.]+)?\|(?<count>\d+)\|([^\|\$\%\.\d]+)?(?<price>\d+(\.\d+)?)\$/g
        let match = regex.exec(line);

        if (match) {
            let totalPrice = Number(match.groups.count) * Number(match.groups.price);
            income += totalPrice;
            console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`)
        }
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}
softUniBarIncome();