function stringSubstring(word, sentence) {

    sentence = sentence.toLowerCase().split(" ");

    if (sentence.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript', 'JavaScript is the best programming language');