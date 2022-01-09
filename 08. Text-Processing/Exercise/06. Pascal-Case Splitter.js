function pascalCaseSplitter(string) {

    let result = [];
    let upperIndex = 0;

    for (let i = 1; i < string.length; i++) {

        if (string[i] === string[i].toUpperCase()) {
            let word = string.substring(upperIndex, i);

            result.push(word);
            upperIndex = i;
        }
    }
    result.push(string.substring(upperIndex));

    console.log(result.join(", "));
}
pascalCaseSplitter();