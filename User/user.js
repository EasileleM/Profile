const login = sessionStorage.getItem('isLogined');
if (login) {
    const users = JSON.parse(localStorage.getItem('users'));
    console.log(users);
    const user = users.find((item) => login === item.login);
    document.querySelector('#firstName').innerHTML = user.firstName;
    document.querySelector('#lastName').innerHTML = user.lastName;
} else {
    window.location.replace(`../Login/login.html`);
}

function logout() {
    sessionStorage.clear();
    window.location.replace(`../Login/login.html`);
}