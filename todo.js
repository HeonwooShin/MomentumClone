const todoBtn = document.querySelector('.todoBtn'),
    todoDiv = document.querySelector('.todoDiv'),
    todoList = todoDiv.querySelector('.todoList'),
    todoForm = todoDiv.querySelector('.todoForm'),
    todoInput = todoForm.querySelector('input');

let todoData = [];
let RAM = [];

function deleteTodo(event) {
    todoData.splice(event.target.parentNode.id, 1);
    localStorage.setItem('todos', JSON.stringify(todoData));
    todoList.innerHTML = "";
    todoData.forEach(data => {
        paintTodo(data);
    });

    RAM = [];

}

function loadTodo() {
    todoData = JSON.parse(localStorage.getItem('todos'));
    todoData.forEach(data => {
        paintTodo(data);       
    });
    RAM = [];    
}

function saveTodo(data) {
    todoData.push(data);
    localStorage.setItem('todos', JSON.stringify(todoData));
}

function paintTodo(inputOrData) {

    const newTodo = document.createElement('p');
    newTodo.classList.add('todo');
    newTodo.innerText = inputOrData;
    const todoDelBtn = document.createElement('img');
    todoDelBtn.classList.add('delBtn');
    todoDelBtn.src = "./ui/x.png";
    const lineBreak = document.createElement('br');
    const listSpan = document.createElement('span');
    listSpan.classList.add('listSpan');
    listSpan.id = RAM.length;
    RAM.push(inputOrData);
    
    todoList.append(listSpan);
    listSpan.append(todoDelBtn);
    listSpan.append(newTodo);
    listSpan.append(lineBreak);
    
    
    todoDelBtn.addEventListener('click', deleteTodo);
}

function inputTodo(event) {
    event.preventDefault();
    const inputedTodo = todoInput.value;
    if (inputedTodo != "") {
        todoInput.value = null;
        
        paintTodo(inputedTodo);
        saveTodo(inputedTodo);
    }
}

function init() {
    if(localStorage.getItem('todos') == null){
        localStorage.setItem('todos', "[]");
    }
    loadTodo();
    todoBtn.addEventListener('click', function(){
        todoDiv.toggleAttribute('hidden');
        todoBtn.classList.toggle('todoOpened');
    });
    todoForm.addEventListener('submit', inputTodo);
}

init();