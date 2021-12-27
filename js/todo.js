const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const target = event.target;
    const li = target.parentNode;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("good", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos, "out");
if (saveTodos) {
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach(sayHello); 함수를 만들어서 넣는 방법도 있다. //
    parsedToDos.forEach((item) => console.log(item));
}
