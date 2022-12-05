//DEFINE VALUE
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];
const API_KEY = "de6181447712e6ac6401751c94a6a66b";

//DEFINE KEY
const TODOS_KEY = "toDos";
const LOGIN_KEY = "login";
const CLOCK_KEY = ".clock-box";

//CLASS
const HIDDEN_CLASSNAME = "hidden";

//COMPONENT
const welcomeBox = document.querySelector("#welcom-box");
const loginBox = document.querySelector("#login-box");
const weatherBox = document.querySelector("#weather-box");
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");


const thisPageEvent = {
  init : () => {
    //login
    thisPageEvent.loginCheck();
    
    //background
    thisPageEvent.getBackground();
    
    //clock 
    thisPageEvent.getClock();
    setInterval(thisPageEvent.getClock, 1000);

  },
  loginCheck : () => {
    const loginName = localStorage.getItem(LOGIN_KEY);
    
    if(loginName !== null && loginName !== "" ){
      thisPageEvent.getAfterLogin(loginName);
    }else{
      thisPageEvent.getBeforeLogin();
    }
  },
  getBeforeLogin : () => { //로그인 이전 화면
    welcomeBox.classList.remove(HIDDEN_CLASSNAME);
    loginBox.classList.add(HIDDEN_CLASSNAME);
    const loginSubmtBtn = welcomeBox.querySelector("input[type=submit]");
    loginSubmtBtn.addEventListener("click", thisPageEvent.onLoginSubmit);
  },
  getAfterLogin : (loginName) => { //로그인 이후 화면
    loginBox.classList.remove(HIDDEN_CLASSNAME);
    welcomeBox.classList.add(HIDDEN_CLASSNAME);

    loginBox.querySelector("#user-form>span").innerText = `Welcome ${loginName}!`;
    const logoutBtn = loginBox.querySelector("#user-form>input");
    logoutBtn.addEventListener("click",  thisPageEvent.onLogoutSubmit);
    //weahter 
    if (navigator.geolocation) {
      //위치 정보를 정기적으로 얻기
      navigator.geolocation.getCurrentPosition(geolocationEvent.onGeoOk, geolocationEvent.onGeoError);
    } else {
      geolocationEvent.onGeoError();
    }

    //todo
    thisPageEvent.getTodo();
  },
  getLoginName : () => {
    const loginName = localStorage.getItem(LOGIN_KEY);
    
    if(loginName !== null && loginName !== "" ){
      return loginName;
    }
  },
  getBackground : () => {
    const pickColor1 = colors[Math.floor(Math.random()* colors.length)];
    let pickColor2 = colors[Math.floor(Math.random()* colors.length)];
    while (pickColor1 == pickColor2) {
      pickColor2 = colors[Math.floor(Math.random()* colors.length)];
    }
    document.body.style.background =  `linear-gradient(90deg, ${pickColor1}, ${pickColor2})`;
  },
  getClock : () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const timeView = `${hours}:${minutes}:${seconds}`;
    if(welcomeBox.classList.contains(HIDDEN_CLASSNAME)){
      loginBox.querySelector(CLOCK_KEY).innerText = timeView;
    }else{
      welcomeBox.querySelector(CLOCK_KEY).innerText = timeView;
    }
  },
  getTodo : () => {
    const btnToggle = loginBox.querySelector(".todo-add-btn");
    btnToggle.addEventListener("click", todoEvent.showHideTodoAddBox);

    const savedToDos = localStorage.getItem(`${thisPageEvent.getLoginName()}_${TODOS_KEY}`);

    if(savedToDos !== null){
        const parsedToDos = JSON.parse(savedToDos);
        if(parsedToDos !== null) { 
          todoEvent.toDos = parsedToDos;
          parsedToDos.forEach(todoEvent.paintToDo);
        }    
    }
    toDoForm.addEventListener("submit", todoEvent.onTodoSubmit);
  },
  onLoginSubmit : (event) => {
    //login
    event.preventDefault();
    const loginInput = welcomeBox.querySelector("#login-form>input:first-child");
    const value = loginInput.value;
    if(value != ""){
      localStorage.setItem(LOGIN_KEY, value);
      thisPageEvent.getAfterLogin(value);
    }
  },
  onLogoutSubmit : (event) => {
    //logout
    event.preventDefault();
    localStorage.removeItem(LOGIN_KEY);
    location.reload();
  }
};

const toDoInput = toDoForm.querySelector("input");

const todoEvent = {
  toDos : [],
  showHideTodoAddBox : (event) => {
    event.preventDefault();
    console.log(">>toggle"+event.target.value);
    if(event.target.value == "+"){
      event.target.value = "-";
      toDoForm.classList.remove(HIDDEN_CLASSNAME);
    }else{
      event.target.value = "+";
      toDoForm.classList.add(HIDDEN_CLASSNAME);
    }
  },
  onTodoSubmit : (event) => {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newTodo
        , id : Date.now()
    };
    todoEvent.toDos.push(newToDoObj);
    todoEvent.paintToDo(newToDoObj);
    todoEvent.saveToDos();
  },
  saveToDos : () => {
    localStorage.setItem(`${thisPageEvent.getLoginName()}_${TODOS_KEY}`, JSON.stringify(todoEvent.toDos));
  },
  deleteToDo : (event) => {
    const li = event.target.parentElement;
    todoEvent.toDos = todoEvent.toDos.filter((item) => item.id !== parseInt(li.id) );
    todoEvent.saveToDos();
    li.remove();
  },
  paintToDo : (newToDo) => {
    console.log("I will paint", newToDo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newToDo.id;
    button.innerText = "X";
    button.addEventListener("click", todoEvent.deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo.text;
    toDoList.appendChild(li);
  }

}

const geolocationEvent = {
  pos : {
    lat : 0,
    lon : 0
  },
  onGeoOk : (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    geolocationEvent.getGeoApi(lat, lon);
  },
  onGeoError : ()=> {
    alert("Can't find you. No weather for you.");
    geolocationEvent.setGeoData("","");
  },
  getGeoApi : (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(">>>>getGeoApi");
    fetch(url).then(response => response.json().then(data =>{
      geolocationEvent.setGeoData(data.name, data.weather[0].main);
      geolocationEvent.pos.lat = lat;
      geolocationEvent.pos.lon = lon;
    }));
  },
  setGeoData : (city, weather)=> {
    const weatherSpan = weatherBox.querySelector("span:first-child");
    const citySpan = weatherBox.querySelector("span:last-child");

    citySpan.innerText = city;
    weatherSpan.innerText = weather;
  }
};

//initialize
thisPageEvent.init();
