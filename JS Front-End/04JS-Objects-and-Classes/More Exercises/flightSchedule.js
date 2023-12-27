function airportStatus(input) {
    let [flights, statuses, statusToCheck] = input;

    let flightsObj = {};

    flights.forEach(flightInfo => {
        let flightNumber = flightInfo.split(' ')[0];
        let destination = flightInfo.split(' ').slice(1).join(' ');
        flightsObj[flightNumber] = { destination, status: 'Ready to fly' };
    });

    statuses.forEach(updatedStatus => {
        let [flightNumber, newStatus] = updatedStatus.split(' ');
        if (flightsObj.hasOwnProperty(flightNumber)) {
            flightsObj[flightNumber].status = newStatus;
        }
    });

    let filteredFlights = [];

    if (statusToCheck[0] === 'Ready to fly') {
        filteredFlights = Object.entries(flightsObj)
            .filter(([flightNumber, flight]) => flight.status === 'Ready to fly');
    } else {
        filteredFlights = Object.entries(flightsObj)
            .filter(([flightNumber, flight]) => flight.status != 'Ready to fly');
    }

    filteredFlights.forEach(([flightNumber, flight]) => {
        console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
    });
}

airportStatus([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]);

airportStatus([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]);