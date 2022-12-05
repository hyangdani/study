const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a");
const greeting = document.querySelector("h1#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greetings
    paintGreetings(savedUsername);
}

function onLoginBtnClick(){
    const value = loginInput.value;
    /* ->form change
    if(value === ""){    -> input attr <required>
        console.log("Please write your name!");
    }else if(value.length > 15){ -> input attr <maxlength="15">
        console.log("Your name is too long.");
    }else{
        console.log("click! "+ value);
    }
    */
    console.log("click! "+ value);
}

function onLoginSubmit(event){
    event.preventDefault();
    console.log(event); //SubmitEvent
    const value = loginInput.value;
    console.log("click!! "+ value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello "+ value;
    paintGreetings(value);
        //greeting.innerText = `Hello ${value}`;
        //greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, value);
    //localStorage.getItem("username");
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}!`;
}

//loginButton.addEventListener("click", onLoginBtnClick);


function handleLinkClick(event){
    //event.preventDefault(); //prevent Event 
    console.log(event); //MouseEvent
    alert("clicked!");     
}

link.addEventListener("click", handleLinkClick);
