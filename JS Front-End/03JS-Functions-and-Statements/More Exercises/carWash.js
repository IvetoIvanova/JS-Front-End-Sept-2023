function carWash(commands) {
    let cleanliness = 0;

    for (let i = 0; i < commands.length; i++) {

        switch (commands[i]) {
            case 'soap':
                cleanliness += 10;
                break;
            case 'water':
                cleanliness += cleanliness * 0.2;
                break;
            case 'vacuum cleaner':
                cleanliness += cleanliness * 0.25;
                break;
            case 'mud':
                cleanliness -= cleanliness * 0.10;
                break;
        }
    }

    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);