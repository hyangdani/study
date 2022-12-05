// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const msg = ["The mouse is here!",
            "The mouse is gone!",
            "You just Resize!",
            "",
            "That was a right click!"];

const superEventHandler = {
  //init
  init : () => {    
    window.addEventListener("resize", superEventHandler.onResizeWindow, false);
    h2.addEventListener("mouseenter", superEventHandler.onMouseEnter);
    h2.addEventListener("mouseleave", superEventHandler.onMouseLeave); 
    window.addEventListener("contextmenu", superEventHandler.onContextMenu);
  },
  //The text of the title should change when the mouse is on top of it.
  onMouseEnter : function(event){
    event.preventDefault();
    console.log("onMouseEnter");
    superEventHandler.funcChangeText("mouseenter");
  },
  //The text of the title should change when the mouse is leaves it.
  onMouseLeave : function(event){
    event.preventDefault();
    console.log("onMouseLeave");
    superEventHandler.funcChangeText("mouseleave");
  },
  //When the window is resized the title should change.
  onResizeWindow : function(event){
    event.preventDefault();
    console.log("resizeThrottler");
    superEventHandler.funcChangeText("resize");
  },
  //On right click the title should also change.
  onContextMenu : function(event){
    event.preventDefault();
    console.log("contextMenu");
    superEventHandler.funcChangeText("contextmenu");
  },
  //change Text
  funcChangeText : function(type){
    let index = 0;
    let typeCheck = true;
    switch(type){
      case "mouseenter" : index = 0; break;
      case "mouseleave" : index = 1; break;
      case "resize"     : index = 2; break;
      case "contextmenu" : index = 4; break;
      default           : typeCheck = false; break;
    }
    if(typeCheck){
      h2.innerText = msg[index];
      h2.style.color = colors[index];
    }
  }
};


const h2 = document.querySelector("h2");
superEventHandler.init(); 
