import './style.css';

function dontApp() {
    const main = document.getElementById('main');

    main.innerHTML = "<p>App listing what you won't do!</p>";

    return main;
}

document.body.appendChild(dontApp());