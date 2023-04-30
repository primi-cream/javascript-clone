
const mainTodo = document.querySelector("#todo > input");
const userFocus = document.querySelector(".main-container");
// const todoFocus = document.querySelector("#todo");


const MAIN_TODO_KEY = "main-todo";

let focusTodo = "";


// function saveMainTodo(){
//     localStorage.setItem(MAIN_TODO_KEY,focusTodo);
// }

function paintMainFocus(focusObj){
    todoFocus.classList.add(HIDEN_CLASSNAME);
    const div = document.createElement("div");
    div.id = focusObj.id;
    div.innerText = "TODAY";
    const childDiv = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "check";
    const checkboxLabel = document.createElement("label");
    checkboxLabel.for = "check";
    checkboxLabel.innerText = focusObj.text;
    div.appendChild(childDiv);
    childDiv.appendChild(checkbox);
    childDiv.appendChild(checkboxLabel);
    userFocus.appendChild(div);
}




function handleMainTodo(event){
    // console.log("sss : ", event);
    if(event.key==="Enter"){
        const focusValue = mainTodo.value;
        if(focusValue !== ""){
            const todoFocusObj = {
                text: focusValue,
                id: "today-focus"
            };
            paintMainFocus(todoFocusObj);  
            // focusTodo = focusValue;
            // saveMainTodo();
            
        }else{
            // event.preventDefault();
            console.log("Empty");
        }
    }
    
}

// const savedMainTodo = localStorage.getItem(MAIN_TODO_KEY);

// if(savedMainTodo !== null){
//     console.log(savedMainTodo);
// }

mainTodo.addEventListener("keyup",handleMainTodo);



