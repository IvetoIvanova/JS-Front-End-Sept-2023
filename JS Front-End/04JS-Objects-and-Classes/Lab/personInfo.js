function createObject (firstName, lastName, age) {
    // let obj = {};
    // obj.firstName = firstName;
    // obj.lastName = lastName;
    // obj.age = age;

    // return obj;

    return {
        firstName,
        lastName,
        age,
    };
}

console.log(createObject("Peter", "Pan", "20"));
console.log(createObject("George", "Smith", "18"));