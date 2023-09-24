function encodeAndDecodeMessages() {
    const textInput = document.querySelector('#main>div:nth-child(1)>textarea');
    const textOutput = document.querySelector('#main>div:nth-child(2)>textarea');
    const encodeButton = document.querySelector('#main>div:nth-child(1)>button');
    const decodeButton = document.querySelector('#main>div:nth-child(2)>button');

    encodeButton.addEventListener('click', () => {
        let encodedMessage = '';
        
        for (let char of textInput.value) {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
        }
        textOutput.value = encodedMessage;
        textInput.value = '';
    })


    decodeButton.addEventListener('click', () => {
        let decodedMessage = '';
        for (let char of textOutput.value) {
            decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        }
        textOutput.value = decodedMessage;
    })
}