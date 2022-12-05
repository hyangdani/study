const clock = document.querySelector("#clock");

function sayHello(){
    console.log('hello');
}

//setInterval(sayHello, 5000); //5000ms == 5s

//setTimeout(sayHello, 5000);

//new Date(); -> Mon Nov 07 2022 15:35:59 GMT+0900 (한국 표준시)



//intervals
/*
function getClock(){
    const date = new Date();
    //console.log(`hello ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
setInterval(getClock, 1000);
*/

function getClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //console.log(`hello ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    //"1".padStart(2, "0") -> "01"
}
getClock();
setInterval(getClock, 1000);

