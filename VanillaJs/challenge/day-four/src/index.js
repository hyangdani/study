const superEventHandler = {
  onResizeWindow : (event) => {
    const windowWidth = event.target.innerWidth;
    superEventHandler.changeClassBgColors(windowWidth);
  },
  changeClassBgColors : (windowWidth) => {
    let windowBgColors = '';

    if(windowWidth <= 200){
      windowBgColors = "blue"
    }else if(windowWidth > 200 && windowWidth < 400){
      windowBgColors = "purple";
    }else{
      windowBgColors = "yellow";
    }
    document.body.className="";
    document.body.classList.add(windowBgColors);
  }
};

superEventHandler.changeClassBgColors(window.innerWidth);
window.addEventListener("resize", superEventHandler.onResizeWindow, false);
