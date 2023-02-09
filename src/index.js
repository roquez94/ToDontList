import './style.css';
import { addTodoItems } from './jsModules/todoItems';

function dontApp() {
    const main = document.getElementById('main');

    main.innerHTML = "<p>App for Listing what you Won't Do!</p>";

    addTodoItems();
    return main;
}

document.body.appendChild(dontApp());