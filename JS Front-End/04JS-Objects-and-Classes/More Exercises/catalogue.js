function printCatalog(products) {
    let catalog = {};

    for (let product of products) {
        let [name, price] = product.split(" : ");
        let startLetterOfTheName = name[0].toUpperCase();

        if (!catalog.hasOwnProperty(startLetterOfTheName)) {
            catalog[startLetterOfTheName] = [];
        }

        catalog[startLetterOfTheName].push({ name, price: Number(price) });
    }

    let sortedInitials = Object.keys(catalog).sort();

    for (let startLetterOfTheName of sortedInitials) {
        console.log(startLetterOfTheName);

        catalog[startLetterOfTheName].sort((a, b) => a.name.localeCompare(b.name)).forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    }
}

printCatalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

printCatalog([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);