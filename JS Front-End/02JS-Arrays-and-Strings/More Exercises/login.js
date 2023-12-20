function login(inputArr) {
    let username = inputArr[0];
    let correctPassword = username.split('').reverse().join('');
    let countOfIncorrectPass = 0;

    for (let index = 1; index < inputArr.length; index++) {

        let currentPassword = inputArr[index];
        if (currentPassword === correctPassword) {
            console.log(`User ${username} logged in.`);
        } else {
            countOfIncorrectPass++;

            if (countOfIncorrectPass === 4) {
                console.log(`User ${username} blocked!`)
                break;
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);