function pointsValidation(pointArray) {

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    let point1 = pointArray.slice(0, 2);
    let point2 = pointArray.slice(2);

    let distance1 = calculateDistance(point1[0], point1[1], 0, 0);

    let distance2 = calculateDistance(point2[0], point2[1], 0, 0);

    let distance3 = calculateDistance(point1[0], point1[1], point2[0], point2[1]);

    let isValid1 = Number.isInteger(distance1);
    let isValid2 = Number.isInteger(distance2);
    let isValid3 = Number.isInteger(distance3);

    if (isValid1) {
        console.log(`{${point1[0]}, ${point1[1]}} to {0, 0} is valid`);
    } else {
        console.log(`{${point1[0]}, ${point1[1]}} to {0, 0} is invalid`);
    }

    if (isValid2) {
        console.log(`{${point2[0]}, ${point2[1]}} to {0, 0} is valid`);
    } else {
        console.log(`{${point2[0]}, ${point2[1]}} to {0, 0} is invalid`);
    }

    if (isValid3) {
        console.log(`{${point1[0]}, ${point1[1]}} to {${point2[0]}, ${point2[1]}} is valid`);
    } else {
        console.log(`{${point1[0]}, ${point1[1]}} to {${point2[0]}, ${point2[1]}} is invalid`);
    }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);
