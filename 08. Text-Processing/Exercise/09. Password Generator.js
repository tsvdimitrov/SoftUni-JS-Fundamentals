function passwordGenerator([firstString, secondString, word]) {

    let password = firstString + secondString;

    let counter = 0;
    let base = word.length;

    let isVowel = (x) => 'aeiou'.indexOf(x.toLowerCase()) !== -1;

    for (let i = 0; i < password.length; i++) {

        if (isVowel(password[i])) {
            password = password.substring(0, i) + word[counter % base].toUpperCase() + password.substring(i + 1);
            counter++;
        }
    }

    console.log(`Your generated password is ${password.split("").reverse().join("")}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);