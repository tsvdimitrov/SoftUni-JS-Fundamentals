function storage(input) {

    let ourMap = new Map();

    for (const el of input) {
        let singleRow = el.split(" ");
        let productName = singleRow[0];
        let productQuantity = Number(singleRow[1]);

        if (!ourMap.has(productName)) {
            ourMap.set(productName, +productQuantity);
        } else {
            let currQuantity = ourMap.get(productName);
            let newQuantity = currQuantity += productQuantity;
            ourMap.set(productName, newQuantity);
        }
    }

    for (let kvp of ourMap) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);