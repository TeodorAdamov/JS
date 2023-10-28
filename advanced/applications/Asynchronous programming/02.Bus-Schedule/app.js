function solve() {
    let nextStop = 'depot';

    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`;
        const infoSpan = document.querySelector('.info');
        try {
            const response = await fetch(url)
            const data = await response.json();
            nextStop = data.next;
            infoSpan.textContent = `Next stop ${data.name}`
            document.getElementById('depart').setAttribute('disabled', 'true');
            document.getElementById('arrive').removeAttribute('disabled');

        } catch (error) {
            info.textContent = 'Error'
            document.getElementById('depart').setAttribute('disabled', 'true');
            document.getElementById('arrive').setAttribute('disabled', 'true');
        }
    }

    function arrive() {
        const infoSpan = document.querySelector('.info');
        infoSpan.textContent = infoSpan.textContent.replace('Next stop', 'Arriving at');
        document.getElementById('arrive').setAttribute('disabled', 'true');
        document.getElementById('depart').removeAttribute('disabled');

    }

    return {
        depart,
        arrive
    };
}

let result = solve();