function getObject(object) {
    for (const entry of Object.entries(object)) {
        const [key, value] = entry;
        console.log(`${key} -> ${value}`);
    }
}

getObject({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

getObject({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});
