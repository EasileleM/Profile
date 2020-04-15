if (sessionStorage.getItem('isLogined')) {
    window.location.replace(`../User/user.html`);
}

function processlogin() {
    event.preventDefault();

    const formData = new FormData(document.querySelector('#loginForm'));
    const login = String(formData.get('login'));
    const password = hashCode(String(formData.get('password')));

    let users = JSON.parse(localStorage.getItem('users'));
    if (!users) {
        alert('Bad login or password!');
        return;
    }

    const user = users.find((item) => {
        return item.login === login
            && item.password === password;
    });

    if (!user) {
        alert('Bad login or password!');
    } else {
        sessionStorage.setItem('isLogined', login);
        window.location.replace(`../User/user.html`);
    }
}

function hashCode(token) {
    let result = 0;
    for (const char of token) {
        result += result * 31 + char.charCodeAt(0);
    }
    return result >> 10 & ~result;
}