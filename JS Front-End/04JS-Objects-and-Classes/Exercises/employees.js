function employees(input) {

    input.forEach(employee => {
        const employeeName = employee;
        const personalNumber = employee.length;

        console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`);
    });
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);