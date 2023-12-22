function solve() {
    const busContainer = document.querySelector('#info > span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const baseURL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let nextStopId = 'depot'
    let stopName = null;

    function depart() {
        arriveBtn.disabled = false;
        departBtn.disabled = true;
        fetch(`${baseURL}${nextStopId}`)
            .then((res) => res.json())
            .then((nextStopInfo) => {
                const { name, next } = nextStopInfo;
                busContainer.textContent = `Next stop ${name}`;
                nextStopId = next;
                stopName = name;
                console.log(nextStopInfo);
            })
            .catch((err) => {
                busContainer.textContent = 'Error';
                arriveBtn.disabled = true;
                departBtn.disabled = true;
            })
    }

    async function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;
        busContainer.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();