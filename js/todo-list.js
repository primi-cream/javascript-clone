const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const liDel = event.target.parentElement;
    liDel.remove();
    toDos = toDos.filter((toDo) => toDo.id != parseInt(liDel.id));
    saveToDos();
}

function paintToDo(newTodo){
    const liAdd = document.createElement("li");
    liAdd.id = newTodo.id;
    const spanAdd = document.createElement("span");
    spanAdd.innerText = newTodo.text;
    const buttonAdd = document.createElement("button");
    buttonAdd.innerText = "✖";
    buttonAdd.addEventListener("click", deleteToDo);
    liAdd.appendChild(spanAdd);
    liAdd.appendChild(buttonAdd);
    toDoList.appendChild(liAdd);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}