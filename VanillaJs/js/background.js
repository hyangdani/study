const image = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = image[Math.floor(Math.random() *3)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
