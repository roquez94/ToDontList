import './style.css';
import { getToDoItemsDetails } from './jsModules/todoItems';

function dontApp() {
    const main = document.getElementById('main');

    main.innerHTML = "<p>App for Listing what you Won't Do!</p>";

    getToDoItemsDetails();
    return main;
}

document.body.appendChild(dontApp());