const login = sessionStorage.getItem('isLogined');
if (login) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((item) => login === item.login);
    document.querySelector('#firstName').innerHTML = user.firstName;
    document.querySelector('#lastName').innerHTML = user.lastName;
} else {
    window.location.replace(`../Login/login.html`);
}


//EVENT LISTENERS TASK
window.addEventListener('load',() => {
    console.log('page is fully loaded!');

    window.addEventListener('mousemove', (e) => {
        document.querySelector('#mouseCoordinates').innerHTML = e.x + ' ' + e.y;
    });

    document.querySelector('#mouseCoordinates').addEventListener('click', (e) => {
        console.log(`Your mouse coordinates are: ${e.x + ' ' + e.y}`);
    });

    document.querySelector('#firstName').addEventListener('mouseover', (e) => {
        console.log('Yep, it is your first name!');
    });

    document.querySelector('#lastName').addEventListener('mouseout', (e) => {
        console.log('Yep, it is your last name!');
    });
});

function logout() {
    sessionStorage.clear();
    window.location.replace(`../Login/login.html`);
}