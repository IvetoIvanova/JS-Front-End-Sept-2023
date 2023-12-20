function subtract() {

    const firstNumberValue = Number(document.getElementById('firstNumber').value);
    const secondNumberValue = Number(document.getElementById('secondNumber').value);
    let result = document.getElementById('result');
    result.innerText = firstNumberValue - secondNumberValue;
}