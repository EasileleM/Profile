if (sessionStorage.getItem('isLogined')) {
    window.location.replace(`../User/user.html`);
}

function processRegistration() {
    event.preventDefault();

    const formData = new FormData(document.querySelector('#registrationForm'));
    const firstName = String(formData.get('firstName'));
    const lastName = String(formData.get('lastName'));
    const login = String(formData.get('login'));
    const password = hashCode(String(formData.get('password')));

    let users = JSON.parse(localStorage.getItem('users'));
    if (!users) {
        localStorage.setItem('users', JSON.stringify([]));
        users = [];
    } else {
        const user = users.find((item) => {
            return item.login === login;
        });
        if (user) {
            alert('Such login is already used!');
            return;
        }
    }

    users.push({firstName, lastName, login, password});

    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.setItem('isLogined', login);
    window.location.replace(`../User/user.html`);
}

function hashCode(token) {
    let result = 0;
    for (const char of token) {
        result += result * 31 + char.charCodeAt(0);
    }
    return result >> 10 & ~result;
}