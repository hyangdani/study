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

function onClickBtn(){
  const pickColor1 = colors[Math.floor(Math.random()* colors.length)];
  let pickColor2 = colors[Math.floor(Math.random()* colors.length)];
  while (pickColor1 == pickColor2) {
    pickColor2 = colors[Math.floor(Math.random()* colors.length)];
  }
  document.body.style.background =  `linear-gradient(90deg, ${pickColor1}, ${pickColor2})`;
};

const button = document.querySelector("button");
button.addEventListener("click", onClickBtn);
