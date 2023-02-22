export {getToDoItemsDetails};
//todoItems holds the other functions properties & methods
//attempting to follow SOLID oop principles

//creates todo object-items constructor with title, description, dueDate
//..notes and checklist
let todoItems = function (title,description,dueDate,priortity) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priortity = priortity;
    //priorities:low (pale), medium (yellow), high (red), completed (green)

    return {title, description, dueDate, priortity};
};

//needed to make the todo items ... 

function createTodoItems (title,description,dueDate,priortity) {

    let currentTodoItem = new todoItems(title,description,dueDate,priortity);
    
    return currentTodoItem;
};


//shows users input
function showTodoItems (currentTodoItem){

    let listDiv = document.getElementById("listContainer");

    let titleInfo = document.createElement("p");
    titleInfo.innerHTML = currentTodoItem.title;
    let descriptionInfo = document.createElement("p");
    descriptionInfo.innerHTML = currentTodoItem.description;
    let dueDateInfo = document.createElement("p");
    dueDateInfo.innerHTML = currentTodoItem.dueDate
    let prioritiyInfo = document.createElement("p");
    prioritiyInfo.innerHTML = currentTodoItem.priortity;

    //return display string files into a div 
    let todoInformation = document.createElement("div");
    todoInformation.appendChild(titleInfo);
    todoInformation.appendChild(descriptionInfo);
    todoInformation.appendChild(dueDateInfo);
    todoInformation.appendChild(prioritiyInfo);

    return listDiv.appendChild(todoInformation);
    //add to event listener for addTodoItems
}



//2.21.23 update to fix bug of not showing/grabbing form info
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

        newItems = createTodoItems(title,description,dueDate,priority);
        console.log(newItems);
        showTodoItems(newItems);
    });

};


// function addTodoItems (){
//     let mainDiv = document.getElementById("main");

//     let toDoItemDiv = document.createElement("div");
//     toDoItemDiv.id = "Items";
//     toDoItemDiv.innerHTML = "<p>Add Don't Items Here </p>";

//     toDoItemDiv.addEventListener("click", showTodoItems);

//     return mainDiv.appendChild(toDoItemDiv);
// };

// addTodoItems();


//reference Library/Book app on removing/changing items from DOM (2/6/23)
function removeTodoItems() {

};

function todoComplete (){
    //could add into changePriority to green completed
};

function changePriortiy () {
    //could combine with completed priory 
};


