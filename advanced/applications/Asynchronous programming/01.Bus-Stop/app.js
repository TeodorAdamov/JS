async function getInfo() {
    const input = document.getElementById('stopId').value
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${input}`


    try {
        const response = await fetch(url)
        const data = await response.json();
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(([busNumber, minutes]) => {
            const li = createElement('li', `Bus ${busNumber} arrives in ${minutes} minutes`);
            busesList.appendChild(li);
        })
    } catch (error) {
        stopName.textContent = 'Error'
        busesList.textContent = '';
    }



    function createElement(type, text) {
        const newElement = document.createElement(type);
        newElement.textContent = text
        return newElement;
    }

}