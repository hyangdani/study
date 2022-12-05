const toDoForm = document.getElementById("playForm");
const inputGuessNum = document.getElementById("guessNum");
const inputMaxNum = document.getElementById("maxNum");
const playResultDesc = document.querySelector("#playResultDesc");
const playResultBox = document.querySelector("#playResultBox");

const superEventHandler = {
  onPlaySubmit : (event) => {
    event.preventDefault();
    const guessNum = inputGuessNum.value;
    const maxNum = inputMaxNum.value;

    if(superEventHandler.isInToNumber(maxNum)){
      superEventHandler.alertMsg("Check max number input!", true);
    }else if(parseInt(maxNum) < 0){
      superEventHandler.alertMsg("Check max number input(more than 0)!", true);
    }else if(superEventHandler.isInToNumber(guessNum)){
      superEventHandler.alertMsg("Check guess number input!", true);
    }else if(parseInt(guessNum) < 0){
      superEventHandler.alertMsg("Check guess number input(more than 0)!", true);
    }else if(parseInt(guessNum) > parseInt(maxNum)){
      superEventHandler.alertMsg("Check guess number input(less than max number)!", true);
    }else{
      const randomNum = Math.floor(Math.random()* (parseInt(maxNum)+ 1)) ;

      playResultDesc.innerText = `You choose: ${guessNum}, the machine choose: ${randomNum}.`;
      if(parseInt(guessNum) == parseInt(randomNum)){
        playResultBox.innerText = "You won!";
      }else{
        playResultBox.innerText = "You lost!";
      }
    }
  },
  isInToNumber : (value) => {
    if(value !== "" && value !== null && value !== undefined && !isNaN(value) ){
      return false;
    }
    return true;
  },
  clearPlayBox : () => {
    playResultDesc.innerText = "";
    playResultBox.innerText = "";
  },
  alertMsg : (msg, clear) => {
    alert(msg);
    if(clear){
      superEventHandler.clearPlayBox();
    }
  }
};

toDoForm.addEventListener("submit", superEventHandler.onPlaySubmit);
