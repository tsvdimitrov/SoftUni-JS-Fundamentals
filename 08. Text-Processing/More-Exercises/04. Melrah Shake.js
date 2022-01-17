function melrahShake(input) {

    let text = input.shift();
    let pattern = input.shift();


    while (pattern.length > 0) {

        let firstMatch = text.indexOf(pattern);
        let secondMatch = text.lastIndexOf(pattern);

        if (firstMatch > -1 && secondMatch > -1 && firstMatch !== secondMatch) {
            text = text.split("");
            text.splice(firstMatch, pattern.length);
            text = text.join("");
            secondMatch = text.lastIndexOf(pattern);
            text = text.split("");
            text.splice(secondMatch, pattern.length);
            let removeFromPat = pattern[Math.floor(pattern.length / 2)];
            pattern = pattern.replace(removeFromPat, "");
            text = text.join("");
            console.log('Shaked it.');
        } else {
            break;
        }
    }

    console.log('No shake.');
    console.log(text);
}
