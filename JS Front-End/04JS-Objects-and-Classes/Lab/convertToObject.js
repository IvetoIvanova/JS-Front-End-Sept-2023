function convertToObject(jsonObject) {
    const object = JSON.parse(jsonObject);

    for (const element of Object.entries(object)) {
        const [key, value] = element;
        console.log(`${key}: ${value}`);

    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');