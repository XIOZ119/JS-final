const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deletTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deletTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem("todos");

if(savedTodos != null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}