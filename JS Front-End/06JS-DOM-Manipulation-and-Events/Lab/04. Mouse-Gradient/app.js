function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', gradientMouseoverHandler);
    gradientElement.addEventListener('mousout', gradientOut);

    function gradientMouseoverHandler(e) {
        let percent = e.offsetX / (e.target.clientWidth - 1);
        percent = Math.trunc(percent * 100);

        resultElement.textContent = `${percent}%`;
    }

    function gradientOut(e) {
        resultElement.textContent = '';
    }

}

attachGradientEvents();