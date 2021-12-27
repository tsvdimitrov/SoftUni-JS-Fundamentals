function addressBook(input) {

    let catalog = {};

    for (let line of input) {
        let [name, address] = line.split(':');

        catalog[name] = address;
    }


    for (let name in catalog) {

        console.log(`${name} -> ${catalog[name]}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);