const greetings = document.querySelector("#greetings");
const login = document.querySelector("#login > input");

function getGreeting(event){
    if(event.key==="Enter"){
        console.log(login.value);
    }
}

login.addEventListener("keyup", getGreeting)