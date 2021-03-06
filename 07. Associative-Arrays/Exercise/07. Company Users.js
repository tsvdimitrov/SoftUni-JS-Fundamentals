function companyUsers(input) {

    let companies = {};

    for (let i = 0; i < input.length; i++) {
        let [company, id] = input[i].split(" -> ");

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    }

    let sorted = Object.entries(companies);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (const elem of sorted) {
        console.log(elem[0]);
        let set = new Set(elem[1]);

        for (let number of set) {
            console.log(`-- ${number}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);