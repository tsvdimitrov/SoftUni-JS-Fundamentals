function replaceRepeatingChars(string) {

    let result = '';

    for (const char of string) {
        if (char !== result[result.length - 1]) {
            result += char;
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');