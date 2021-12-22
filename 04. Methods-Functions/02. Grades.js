function grades(grade) {

    let description;

    if (grade < 3) {
        description = 'Fail';
    } else if (grade < 3.5) {
        description = 'Poor';
    } else if (grade < 4.5) {
        description = 'Good';
    } else if (grade < 5.5) {
        description = 'Very good';
    } else {
        description = 'Excellent';
    }

    let finalGrade = grade.toFixed(2);

    if (grade < 3) {
        console.log('Fail (2)')
    } else {
        console.log(`${description} (${finalGrade})`);
    }
}
grades(3.33);