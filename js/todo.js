const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const target = event.target;
    const li = target.parentNode;
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos(); // filter로 매치되는 id가 아닌 값들을 불러온 다음 그 값들을 다시 저장해 주는걸 잊지 말자.
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    console.log(newTodo);
    todoInput.value = "";
    const newToDoObj = {
        id: Date.now(),
        text: newTodo,
    };
    todos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("good", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos, "out");

if (savedToDos !== null) {
    // JSON.stringfy()로 localStorage에 저장된 string을 다시 사용가능한 Object로 변경해주기 위해
    // JSON.parse()을 이용한다.
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach(sayHello); 함수를 만들어서 넣는 방법도 있다. //

    todos = parsedToDos;

    // forEach에 함수를 넣으면 parsedToDos에서 받아오는 하나 하나의 item을 paintTodo함수에 전달한다.
    parsedToDos.forEach(paintTodo);
}

// toDos = [];는 항상 빈 array로 시작한다.
// toDos에 localStorage에 저장된 값을 넣어주지 않으면
// 새로고침이 될때마다 toDos는 새로운 값만 저장하게 되고 이전 데이터는 사라지게 된다.
// 그렇기 때문에 JSON.parse()로 가져온 값을 할당 받은 변수를 todos에 넣어줘야 한다.
