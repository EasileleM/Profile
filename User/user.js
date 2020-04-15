const login = sessionStorage.getItem('isLogined');
if (login) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((item) => login === item.login);
    document.querySelector('#firstName').innerHTML = user.firstName;
    document.querySelector('#lastName').innerHTML = user.lastName;
} else {
    window.location.replace(`../Login/login.html`);
}

document.addEventListener('onmousemove', (e) => {
    document.querySelector('#mouseCoordinates').innerHTML = e.clientX + ' ' + e.clientY;
});

function logout() {
    sessionStorage.clear();
    window.location.replace(`../Login/login.html`);
}