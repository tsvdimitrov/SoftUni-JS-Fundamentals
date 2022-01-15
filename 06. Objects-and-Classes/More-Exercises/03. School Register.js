function schoolRegister(arr) {

    let studentsRegister = {};

    for (let line of arr) {
        let tokens = line.split(", ");
        let name = tokens[0].split(": ")[1];
        let grade = Number(tokens[1].split(": ")[1]) + 1;
        let score = Number(tokens[2].split(": ")[1]);

        if (score > 3) {
            let student = { name, score }

            if (!studentsRegister.hasOwnProperty(grade)) {
                studentsRegister[grade] = [];
            }
            studentsRegister[grade].push(student);
        }
    }

    let sorted = Object.keys(studentsRegister).sort((a, b) => a - b);

    for (let grade of sorted) {
        let students = studentsRegister[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(", ")}`);
        console.log(`Average annual grade from last year: ${average(students.map(s => s.score)).toFixed(2)}`);
        console.log();
    }

    function average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}
