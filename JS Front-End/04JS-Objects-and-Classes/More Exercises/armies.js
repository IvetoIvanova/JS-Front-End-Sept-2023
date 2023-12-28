function processArmyInformation(input) {
    const leaders = {};

    for (const line of input) {
        if (line.includes("arrives")) {
            const leader = line.split(" arrives")[0];
            leaders[leader] = { totalArmyCount: 0, armies: {} };
        } else if (line.includes("defeated")) {
            const leader = line.split(" defeated")[0];
            delete leaders[leader];
        } else if (line.includes(":")) {
            const [leader, armyInfo] = line.split(": ");
            const [armyName, armyCount] = armyInfo.split(", ");
            if (leaders[leader]) {
                leaders[leader].armies[armyName] = parseInt(armyCount);
                leaders[leader].totalArmyCount += parseInt(armyCount);
            }
        } else if (line.includes("+")) {
            const [armyName, armyCount] = line.split(" + ");
            for (const leader of Object.values(leaders)) {
                if (leader.armies[armyName]) {
                    leader.armies[armyName] += parseInt(armyCount);
                    leader.totalArmyCount += parseInt(armyCount);
                }
            }
        }
    }

    const sortedLeaders = Object.entries(leaders).sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount);

    for (const [leader, { totalArmyCount, armies }] of sortedLeaders) {
        console.log(`${leader}: ${totalArmyCount}`);
        const sortedArmies = Object.entries(armies).sort((a, b) => b[1] - a[1]);
        for (const [armyName, armyCount] of sortedArmies) {
            console.log(`>>> ${armyName} - ${armyCount}`);
        }
    }
}


processArmyInformation(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000',
    'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302',
    'Rick Burr defeated', 'Porter: Retix, 3205']);
processArmyInformation(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500',
    'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);