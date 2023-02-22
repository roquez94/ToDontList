import './style.css';
import { getToDoItemsDetails } from './jsModules/todoItems';

function dontApp() {
    const main = document.getElementById('main');

    main.innerHTML = "<p>App for Listing what you Won't Do!</p>";

    //button that will submit list Info and run script
    // const submitbutton = document.querySelector('#submitButton');

    // submitbutton.addEventListener('click', getToDoItemsDetails());
    getToDoItemsDetails();
    return main;
}

document.body.appendChild(dontApp());