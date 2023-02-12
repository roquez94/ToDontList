export {addTodoItems};
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

//create + button OR module that creates form/prompt for user input 
//needed to make the todo items ... 

function createTodoItems (title,description,dueDate,priortity) {

    let currentTodoItem = new todoItems(title,description,dueDate,priortity);
    
    return currentTodoItem;
};

function getToDoItemsDetails() {
    //could convert into a form that pops up instead
    let title = prompt("Enter Title for Todo Item");
    let description = prompt ("Write short description for Todo Item");
    
    //might need intergrate date-fns library somehow with this
    let dueDate = prompt("Type in a date");

    //change for users to select priortiy for toDoItem with button later
    let prioritiy = "pale";

    return createTodoItems(title,description,dueDate,prioritiy);
};

//-- testing (2/12/23) -- shows users input
function showTodoItems (){

    let currentTodoItem = getToDoItemsDetails();

    let titleInfo = `Title: ${currentTodoItem.title}`;
    let descriptionInfo = `Description: ${currentTodoItem.description}`;
    let dueDateInfo = `Due Date: ${currentTodoItem.dueDate}`;
    let prioritiyInfo = `Priority: ${currentTodoItem.priortity}`;

    //return display string files into a div 
    let todoInformation = document.createElement('div');
    todoInformation.appendChild(titleInfo);
    todoInformation.appendChild(descriptionInfo);
    todoInformation.appendChild(dueDateInfo);
    todoInformation.appendChild(prioritiyInfo);

    return todoInformation;
    //add to event listener for addTodoItems

}


function addTodoItems (){
    let mainDiv = document.getElementById("main");

    let toDoItemDiv = document.createElement("div");
    toDoItemDiv.id = "Items";
    toDoItemDiv.innerHTML = "<p>Add Don't Items Here </p>";

    toDoItemDiv.addEventListener("click", showTodoItems);

    return mainDiv.appendChild(toDoItemDiv);
};

addTodoItems();



//reference Library/Book app on removing/changing items from DOM (2/6/23)
function removeTodoItems() {

};

function todoComplete (){
    //could add into changePriority to green completed
};

function changePriortiy () {
    //could combine with completed priory 
};


