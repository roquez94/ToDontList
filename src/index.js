import './style.css';

function dontApp() {
    const main = document.getElementById('main');

    main.innerHTML = "<p>App for Listing what you Won't Do!</p>";

    return main;
}

document.body.appendChild(dontApp());