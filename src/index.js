import './style.css';
import { showTodoItems } from './jsModules/todoItems';

function dontApp() {
    const main = document.getElementById('main');

    main.innerHTML = "<p>App for Listing what you Won't Do!</p>";

    showTodoItems();
    return main;
}

document.body.appendChild(dontApp());