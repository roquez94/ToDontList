export {getToDoItemsDetails};
//todoItems holds the other functions properties & methods
//attempting to follow SOLID oop principles

//creates todo object-items constructor with title, description, dueDate
//..notes and checklist
let items = [];

let todoItems = function (title,description,dueDate,priortity, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priortity = priortity;
    this.id = id;

    return {title, description, dueDate, priortity, id};
};

//needed to make the todo items ... 

function createTodoItems (title,description,dueDate,priortity, id) {

    let currentTodoItem = new todoItems(title,description,dueDate,priortity, id);
    
    return currentTodoItem;
};


//shows users input
function showTodoItems (currentTodoItem){

    //grabs container to hold todo items
    let listUL = document.getElementById("listContainer");
    //Add Mark task done event listeneer to the list and children
    listUL.addEventListener('click', e => {
        if(e.target.classList.contains('js-tick')){
            let itemKey = e.target.parentElement.dataset.key;
            toggleDone(itemKey);
        }
    });

    let isChecked = currentTodoItem.checked ? 'done': '';

    let listNode = document.createElement('li');

    listNode.setAttribute('class', `todo-item ${isChecked}`);
    //set data-key attrib. to the id of todo item
    listNode.setAttribute('data-key', currentTodoItem.id);

    //put the contents of the 'li' element made above
    //2.27.23 Find a delete svg icon to place in button spot
    listNode. innerHTML = `
    <input id="${currentTodoItem.id}" type="checkbox"/>
    <label for="${currentTodoItem.id}" class="tick js-tick"></label>
    <span>${currentTodoItem.title}</span>
    <p>${currentTodoItem.description}</p>
    <p>${currentTodoItem.dueDate}</p>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
                `;

        //Appends the element to DOM of listUL
        listUL.append(listNode);

}

function addTodoItems (createTodoItems){
    items.push(createTodoItems);
    showTodoItems(createTodoItems);
    console.log(createTodoItems);  
};

//2.23.23 Update to clear form after submission
//or make new function to clear form after submission
function getToDoItemsDetails() {
    const form = document.querySelector('#listInfo');

    form.addEventListener('submit', e => {
        //prevent page refresh when form submits
        e.preventDefault();
        //selects text input for each part
        let newItems;

        let title = document.querySelector('#title').value;
        let description = document.querySelector('#description').value;
        let dueDate = document.querySelector('#duedate').value;
        let priority = document.querySelector('#priority').value;
        let id = Date.now();

        if (title !== ''){
            newItems = createTodoItems(title,description,dueDate,priority, id);
            
            addTodoItems(newItems);
            console.log(newItems);
                }
        //showTodoItems(newItems);
    });

};

//added inside the showTodoItems function 2/24/23
function toggleDone(){
    //findIndex = array method returning position of element in that array

    let index = items.findIndex( item => item.id === Number(key));
        //Locates the todo item in the Items array and set its checked
        //property to opposite. True will become false and vice versa

        items[index].checked = !items[index].checked;
        showTodoItems(items[index]);
};

//reference Library/Book app on removing/changing items from DOM (2/6/23)
function removeTodoItems() {

};





