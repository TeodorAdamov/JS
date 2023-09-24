function solve() {
    const addButtonElements = Array.from(document.getElementsByClassName('add-product'));
    const outputElement = document.getElementsByTagName('textarea')[0];
    const checkoutButtonElement = document.getElementsByClassName('checkout')[0];

    const boughtElements = new Set();
    let total = 0;

    addButtonElements.forEach(button => {
        button.addEventListener('click', (event) => {
            const parentElement = event.currentTarget.parentElement.parentElement;
            const productTitle = parentElement.getElementsByClassName('product-title')[0].textContent;
            const price = parentElement.getElementsByClassName('product-line-price')[0].textContent;

            boughtElements.add(productTitle);
            total += Number(price);

            outputElement.textContent += `Added ${productTitle} for ${Number(price).toFixed(2)} to the cart.\n`
        })
    })

    checkoutButtonElement.addEventListener('click', () => {
        addButtonElements.forEach(button => {
            button.disabled = true;
        })
        checkoutButtonElement.disabled = true;

        
        outputElement.textContent += `You bought ${Array.from(boughtElements).join(', ')} for ${total.toFixed(2)}.`
    })
}