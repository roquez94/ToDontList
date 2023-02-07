
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
    //could convert into a form that pops up
    let title = prompt("Enter Title for Todo Item");
    let description = prompt ("Write short description for Todo Item");
    
    //might need intergrate date-fns library somehow with this
    let dueDate = prompt("Type in a date");

    //change for users to select priortiy for toDoItem with button later


};

function showTodoItems (){

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


