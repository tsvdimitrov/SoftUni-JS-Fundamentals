function countStringOccurences(text, string) {
    
    let splitted = text.split(" ");
    let counter = 0;

    for (let word of splitted) {
        if (word === string) {
            counter++;
        }
    }

    console.log(counter);
}
countStringOccurences("This is a word and it also is a sentence", "is");