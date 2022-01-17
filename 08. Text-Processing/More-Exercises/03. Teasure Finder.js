function treasureFinder(input) {

    let key = input.shift().split(" ").map(Number);
    let curPosition = 0;
    let line;
    let regex = /&(?<type>.+)&[^<]*<(?<coord>.+)>/g;

    while ((line = input.shift()) !== "find") {
        let nums = line.split("");
        curPosition = 0;
        for (let i = 0; i < line.length; i++) {
            if (curPosition >= key.length) {
                curPosition = 0;
            }
            nums[i] = line.charCodeAt(i) - key[curPosition];
            curPosition++;
        }
        let result = "";
        for (let i = 0; i < nums.length; i++) {
            result += String.fromCharCode(nums[i]);
        }
        let test = result.match(regex);
        if (test) {
            let match = regex.exec(result);
            let type = match[1];
            let coord = match[2];

            console.log(`Found ${type} at ${coord}`);
        }
    }
}
treasureFinder([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find']);