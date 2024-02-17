export function getUserData() {
    const userData = JSON.parse(localStorage.getItem('userData'))
    return userData;
}

export function clearUserData() {
    localStorage.clear();
}

export function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data))
}

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        callback(data, form);
    }
}