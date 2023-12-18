function getObject(object) {
    for (const entry of Object.entries(object)) {
        const [key, value] = entry;
        console.log(`${key} -> ${value}`);
    }

    // const {name, area, population, country, postcode} = object;

    // console.log(`name -> ${name}`)
    // console.log(`area -> ${area}`)
    // console.log(`population -> ${population}`)
    // console.log(`country -> ${country}`)
    // console.log(`postCode -> ${postCode}`)
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