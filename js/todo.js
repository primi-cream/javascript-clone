const todoFocus = document.querySelector("#todo");
const mainTodo = document.querySelector("#todo > input");
const userFocus = document.querySelector(".main-container");

if(saveUsername!==null){
    todoFocus.classList.remove("hidden");
}


function saveMainTodo(event){
    
}

function paintMainFocus(focusObj){
    todoFocus.classList.add(HIDEN_CLASSNAME);
    const div = document.createElement("div");
    div.id = focusObj.id;
    div.innerText = "TODAY";
    const divChild = document.createElement("div");
    divChild.innerText = focusObj.text;
    div.appendChild(divChild); 
    userFocus.appendChild(div);
}

function handleMainTodo(event){
    if(event.key==="Enter"){
        const focusValue = mainTodo.value;
        if(focusValue !== ""){
            const todoFocusObj = {
                text: focusValue,
                id: "today-focus"
            };
            paintMainFocus(todoFocusObj);           
        }else{
            // event.preventDefault();
            console.log("Empty");
        }
    }

}

mainTodo.addEventListener("keyup",handleMainTodo);