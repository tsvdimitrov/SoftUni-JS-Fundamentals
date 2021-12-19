function triplesOfLatinLetters(n) {

    let line = '';

    for (let i = 0; i < n; i++) {
        let letter = String.fromCharCode(97 + i);
        lineA = line;
        lineA += letter;
        for (let j = 0; j < n; j++) {
            let letter = String.fromCharCode(97 + j);
            lineB = lineA;
            lineB += letter;
            for (let k = 0; k < n; k++) {
                let letter = String.fromCharCode(97 + k);
                lineC = lineB;
                lineC += letter;
                console.log(lineC);
                lineC = "";
            }
        }
    }
}
triplesOfLatinLetters(3);