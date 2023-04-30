const greetings = document.querySelector("#greetings");
const login = document.querySelector("#login > input");

const USERNAME_KEY = "";
const HIDEN_CLASSNAME = "hidden";

function getGreeting(event){
    if(event.key==="Enter"){
        console.log(login.value);
        const username = login.value;
        localStorage.setItem(USERNAME_KEY, username);
    }
}

login.addEventListener("keyup", getGreeting)