function storeProvision(currentStock, products) {

    let store = [];

    for (let i = 0; i < currentStock.length - 1; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        let productObject = {
            product,
            quantity
        };
        store.push(productObject)
    }

    for (let i = 0; i < products.length - 1; i += 2) {
        let product = products[i];
        let quantity = Number(products[i + 1]);

        let productObject = {
            product,
            quantity
        };
        let indexOfProduct = store.findIndex(x => x.product === product);


        if (indexOfProduct === -1) {
            store.push(productObject);
        } else {
            store[indexOfProduct].quantity += quantity;
        }
    }

    for (let product of store) {
        console.log(`${product.product} -> ${product.quantity}`);
    }
}
storeProvision();