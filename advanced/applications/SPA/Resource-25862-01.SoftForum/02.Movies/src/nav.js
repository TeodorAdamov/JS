export function navBar() {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
        document.querySelectorAll('.nav-item.guest').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.nav-item.user').forEach(el => el.style.display = 'block');
        document.getElementById('welcome-msg').textContent = `Welcome, ${sessionStorage.getItem('email')}`;
    }
    else {
        document.querySelectorAll('.nav-item.user').forEach(el => el.style.display = 'none');      
        document.querySelectorAll('.nav-item.guest').forEach(el => el.style.display = 'block');
    }
}