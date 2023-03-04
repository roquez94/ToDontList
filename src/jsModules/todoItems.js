export {getToDoItemsDetails};
//todoItems holds the other functions properties & methods
//attempting to follow SOLID oop principles

//creates todo object-items constructor with title, description, dueDate
//..notes and checklist
let items = [];

 function addTodoItems (title,description,dueDate) {
   let todoItems = {
        title,
        description,
        dueDate,
        checked: false,
        id: Date.now(),
    };

    items.push(todoItems);
    showTodoItems(todoItems);
    console.log(todoItems);  
 }

 //added inside the showTodoItems function below 2/27/23
function toggleDone(key){
    //findIndex = array method returning position of element in that array

    let index = items.findIndex( item => item.id === Number(key));
        //Locates the todo item in the Items array and set its checked
        //property to opposite. True will become false and vice versa

        items[index].checked = !items[index].checked;
        showTodoItems(items[index]);
};

//deletes Todo items from DOM 3/3/23
function removeTodo(key) {
    //finds corresponding todo in the items array
    let index = items.findIndex(item => item.id === Number(key));
    //create new object property to current todo
    //and 'deleted' property which is set to true
    let todoItems = {
        deleted: true,
        ...items[index]
    };
    //remove the todo items from the array by filtering it out
    items = items.filter(item => item.id !== Number(key));
    showTodoItems(todoItems);
};
 
//shows-renders users input
function showTodoItems (todoItems){

    //grabs container to hold todo items
    let listUL = document.getElementById("listContainer");

    //select the current todo item in the DOM
    let item = document.querySelector(`[data-key='${todoItems.id}']`);

    //inserts remove item property
    if (todoItems.deleted){
        //removes item from the DOM
        item.remove();
        return
    }

    let isChecked = todoItems.checked ? 'done': '';

    let listNode = document.createElement('li');

    listNode.setAttribute('class', `todo-item ${isChecked}`);
    //set data-key attrib. to the id of todo item
    listNode.setAttribute('data-key', todoItems.id);

    //put the contents of the 'li' element made above
    //3.1.23 Find a delete svg icon to place in button spot
    listNode. innerHTML = `
    <input id="${todoItems.id}" type="checkbox"/>
    <label for="${todoItems.id}" class="tick js-tick"></label>
    <span>${todoItems.title}</span>
    <p>${todoItems.description}</p>
    <p>${todoItems.dueDate}</p>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
                `;

        //if the item already exists in the DOM
        if (item){
            //replace it
            listUL.replaceChild(listNode, item);
        } else {
            //Appends the element to DOM of listUL
            listUL.append(listNode);
        }
        
}


//2.23.23 Update to clear form after submission
//or make new function to clear form after submission
function clearForm () {
              //resets form to blank and focus back to top (3.2.23)
              document.querySelector('#title').value = '';
              document.querySelector('#description').value = '';
              document.querySelector('#duedate').value = '';

              document.querySelector('#title').focus();              
}



function getToDoItemsDetails() {
    const form = document.querySelector('#listInfo');

    form.addEventListener('submit', e => {
        //prevent page refresh when form submits
        e.preventDefault();
        //selects text input for each part
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const dueDate = document.querySelector('#duedate').value;
 
        if (title !== '') {
            addTodoItems(title,description,dueDate);

            clearForm();
                }
    });

};

   //grabs container to hold todo items
   let listUL = document.getElementById("listContainer");

    //Add Mark task done event listeneer to the list and children
       listUL.addEventListener('click', e => {
        if(e.target.classList.contains('js-tick')){
            let itemKey = e.target.parentElement.dataset.key;
            toggleDone(itemKey);
        }

        //Adds delete/remove todo items button
        if (e.target.classList.contains('js-delete-todo')){
            let itemKey = e.target.parentElement.dataset.key;
            removeTodo(itemKey);
        }
    });





