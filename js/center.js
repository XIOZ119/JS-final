const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginComplete = document.querySelector("#login-Hi");

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    loginPaint();
}

const savedUsername = localStorage.getItem("username");

function loginPaint(savedUsername){
    loginComplete.innerText = `${savedUsername}'s Planner`;
    loginComplete.classList.remove("hidden");
}

if(savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", loginSubmit)
} else {
    loginPaint(savedUsername);
}

