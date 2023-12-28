function storeCarsInGarages(input) {
    const garages = {};

    for (const line of input) {
        let garageNumber = line.split(' - ')[0];
        let carInfo = line.split(' - ')[1];

        if (!garages[garageNumber]) {
            garages[garageNumber] = [];
        }

        const carData = carInfo.split(', ').reduce((acc, pair) => {
            const [key, value] = pair.split(': ');
            acc[key] = value;
            return acc;
        }, {});

        garages[garageNumber].push(carData);
    }

    for (const [garageNumber, cars] of Object.entries(garages)) {

        console.log(`Garage № ${garageNumber}`);

        cars.forEach((car, index) => {
            const carInfo = Object.entries(car).map(([key, value]) => `${key} - ${value}`).join(', ');
            console.log('--- ' + carInfo);
        });
    }
}

storeCarsInGarages(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
storeCarsInGarages(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']);