const button = document.getElementById('color-changer');
const text = document.getElementById('bear-text');


button.addEventListener('click', function onclick(event){
    event.preventDefault()
    text.style.color = 'red';
    console.log(event.target.textContent);
})