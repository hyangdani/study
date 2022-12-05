const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

const toDoInput = toDoForm.querySelector("input");
// -> const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // -> JSON.parse(toDos)
}

function paintToDo(newToDo){
    console.log("I will paint", newToDo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newToDo.id;
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo.text;
    toDoList.appendChild(li);
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((item) => item.id !== parseInt(li.id) );
    saveToDos();
    li.remove();
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newTodo
        , id : Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

function sayHello(item){
    console.log("this is the turn of", item);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //parsedToDos.forEach(sayHello);
    //parsedToDos.forEach((item)=>console.log("this is the turn of", item));
    if(parsedToDos !== null) { 
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo);
    }    
}


function sexyFilter(item){
    console.log(`sexyFilter ${item}`);
}

[1, 2, 3, 4].filter(sexyFilter);
