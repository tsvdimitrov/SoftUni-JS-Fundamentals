function solve(inputCommands) {

    let cleaningPercentage = 0;

    for (let i = 0; i < inputCommands.length; i++) {
        detectCommand(inputCommands[i]);
    }
    console.log(`The car is ${cleaningPercentage.toFixed(2)}% clean.`);

    function detectCommand(command) {
        switch (command) {
            case "soap":
                cleaningPercentage = soap(cleaningPercentage);
                break;
            case "water":
                cleaningPercentage = water(cleaningPercentage);
                break;
            case "vacuum cleaner":
                cleaningPercentage = vacuumCleaner(cleaningPercentage);
                break;
            case "mud":
                cleaningPercentage = mud(cleaningPercentage);
                break;
        }
    }

    function soap(inputPercentage) {
        inputPercentage += 10;
        return inputPercentage;
    }

    function water(inputPercentage) {
        inputPercentage = 1.2 * inputPercentage;
        return inputPercentage;
    }

    function vacuumCleaner(inputPercentage) {
        inputPercentage = 1.25 * inputPercentage;
        return inputPercentage;
    }

    function mud(inputPercentage) {
        inputPercentage = 0.9 * inputPercentage;
        return inputPercentage;
    }
}
solve();