const clockTitle = document.querySelector(".js-clock");

const christmasEve = new Date("2022-12-25 00:00:00");

function getClock(){
  const date = new Date();
  
  let diffTimes = christmasEve.getTime() - date.getTime() ;
  let diffTimeStatus = "";
  if(diffTimes < 0){
    diffTimes = Math.abs(diffTimes);
    diffTimeStatus = " over";
  }

  const days = Math.floor(diffTimes / (1000*60*60*24)); 
  const hours =  Math.floor((diffTimes / (1000*60*60)) % 24);
  const minutes =  Math.floor((diffTimes / (1000*60)) % 60);
  const seconds =  Math.floor((diffTimes / 1000) % 60);

  if(days == 0 && hours == 0 && minutes == 0 && seconds == 0){
    clockTitle.innerText = "Chirstmas Is Now!!!";
  }else{
    clockTitle.innerText = `${days==0?'':days+'d '}${days==0?'':days+'h '}${minutes==0?'':minutes+'m '}${seconds==0?'':seconds+'s'}${diffTimeStatus}`;
  }

}

getClock();
setInterval(getClock, 1000);
