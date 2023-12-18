function convertToJSON(name, lastName, hairColor) {
    const person = { name, lastName, hairColor };
    const objectAsJSON = JSON.stringify(person);
    console.log(objectAsJSON);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');