function validityChecker(x1, y1, x2, y2) {

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    let distance1 = calculateDistance(x1, y1, 0, 0);
    let distance2 = calculateDistance(x2, y2, 0, 0);
    let distance3 = calculateDistance(x1, y1, x2, y2);

    let isValid1 = Number.isInteger(distance1);
    let isValid2 = Number.isInteger(distance2);
    let isValid3 = Number.isInteger(distance3);

    if (isValid1) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isValid2) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (isValid3) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}


validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
