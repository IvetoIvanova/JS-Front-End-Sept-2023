function vacation(groupOfPeople, type, day) {
    if (type === "Students") {
        if (day === "Friday") {
            price = groupOfPeople * 8.45;
        } else if (day === "Saturday") {
            price = groupOfPeople * 9.80;
        } else {
            price = groupOfPeople * 10.46;
        }

        if (groupOfPeople >= 30) {
            price *= 0.85;
        }
    } else if (type === "Business") {
        let priceForOneTicket = 0;
        if (day === "Friday") {
            price = groupOfPeople * 10.90;
            priceForOneTicket = 10.90;
        } else if (day === "Saturday") {
            price = groupOfPeople * 15.60;
            priceForOneTicket = 15.60;
        } else {
            price = groupOfPeople * 16;
            priceForOneTicket = 16.00;
        }

        if (groupOfPeople >= 100) {
            price -= priceForOneTicket * 10;
        }
    } else {
        if (day === "Friday") {
            price = groupOfPeople * 15;
        } else if (day === "Saturday") {
            price = groupOfPeople * 20;
        } else {
            price = groupOfPeople * 22.50;
        }

        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            price *= 0.95;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");