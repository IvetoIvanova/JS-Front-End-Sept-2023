function getaAddresses(arrayOfStrings) {
    const addressList = {};

    for (const person of arrayOfStrings) {
        const [name, address] = person.split(":");
        addressList[name] = address;
    }

    const peopleNames = Object.entries(addressList);
    const sortedPeople = peopleNames.sort();

    for (const key of sortedPeople) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

getaAddresses(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);

getaAddresses(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);