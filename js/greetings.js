const greetings = document.querySelector("#greetings");
const login = document.querySelector("#login");
const loginValue = document.querySelector("#login > input");

const USERNAME_KEY = "username";
const HIDEN_CLASSNAME = "hidden";

function getGreeting(event){
    if(event.key==="Enter"){
        console.log(loginValue.value);
        const username = loginValue.value;
        login.classList.add(HIDEN_CLASSNAME);
        localStorage.setItem(USERNAME_KEY, username);

        paintGreetings(username);
    }
}

function paintGreetings(username){
    greetings.innerText = `Hello ${username}`;
}


login.addEventListener("keyup", getGreeting)

const saveUsername = localStorage.getItem(USERNAME_KEY);

