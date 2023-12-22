function getInfo() {
    const stopIDInput = document.getElementById('stopId');
    const stopNameContainer = document.getElementById('stopName');
    const busesContainer = document.getElementById('buses');
    const baseURL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const stopID = stopIDInput.value;

    stopNameContainer.textContent = '';
    busesContainer.innerHTML = '';
    fetch(`${baseURL}${stopID}`)
        .then((res) => res.json())
        .then((busInfo) => {
            const { name, buses } = busInfo;
            stopNameContainer.textContent = name;
            for (const busID in buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${busID} arrives in ${buses[busID]} minutes`;
                busesContainer.appendChild(li);
            }
        })
        .catch((err) => {
            stopNameContainer.textContent = 'Error';
        })
}