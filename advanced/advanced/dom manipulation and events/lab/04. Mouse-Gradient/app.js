function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');
    gradient.addEventListener('mousemove', onMove)

    function onMove(event) {
        let x = event.offsetX;
        let percentage = Math.floor(x / 300 * 100);
        result.textContent = percentage + '%'
    }
}