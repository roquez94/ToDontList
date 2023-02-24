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

    let isChecked = currentTodoItem.checked ? 'done': '';

    let listNode = document.createElement('li');

    listNode.setAttribute('class', `todo-item ${isChecked}`);
    //set data-key attrib. to the id of todo item
    listNode.setAttribute('data-key', currentTodoItem.id);

    //put the contents of the 'li' element made above
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


    // let titleInfo = document.createElement("li");
    // titleInfo.innerHTML = currentTodoItem.title;
    // let descriptionInfo = document.createElement("p");
    // descriptionInfo.innerHTML = currentTodoItem.description;
    // let dueDateInfo = document.createElement("p");
    // dueDateInfo.innerHTML = currentTodoItem.dueDate
    // let prioritiyInfo = document.createElement("p");
    // prioritiyInfo.innerHTML = currentTodoItem.priortity;

    // //return display string files into a div 
    // let todoInformation = document.createElement("div");
    // todoInformation.appendChild(titleInfo);
    // todoInformation.appendChild(descriptionInfo);
    // todoInformation.appendChild(dueDateInfo);
    // todoInformation.appendChild(prioritiyInfo);

    // return listDiv.appendChild(todoInformation);
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


//reference Library/Book app on removing/changing items from DOM (2/6/23)
function removeTodoItems() {

};

function todoComplete (){
    //could add into changePriority to green completed
};

function changePriortiy () {
    //could combine with completed priory 
};


