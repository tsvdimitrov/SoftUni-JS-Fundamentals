function wordOccurences(arr) {

    let map = new Map();

    for (const word of arr) {
        let wordOccurences = 1;

        if (map.has(word)) {
            wordOccurences += map.get(word);
        }

        map.set(word, wordOccurences);
    }

    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);

    for (let [word, words] of sorted) {
        console.log(`${word} -> ${words} times`);
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);