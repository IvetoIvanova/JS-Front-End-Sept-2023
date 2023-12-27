function processSchoolRegister(studentsInfo) {
    let grades = {};

    for (let student of studentsInfo) {
        let name = student.split(',')[0].slice(14);
        let grade = parseInt(student.split(',')[1].slice(8));
        let score = parseFloat(student.split(',')[2].slice(33));
        
        if (score >= 3) { 
            if (!grades[grade]) {
                grades[grade] = [];
            }

            grades[grade].push({ name, score });
        }
    }

    for (let grade in grades) {
        let nextGrade = Number(grade) + 1;
        console.log(`${nextGrade} Grade`);
        console.log('List of students:', grades[grade].map(student => student.name).join(', '));

        let averageScore = grades[grade].reduce((sum, student) => sum + student.score, 0) / grades[grade].length;
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
        console.log();
    }
}

processSchoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);

processSchoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]);