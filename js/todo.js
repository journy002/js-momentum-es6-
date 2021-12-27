const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

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
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);
