const images = [
  "nature1.jpg",
  "nature2.jpg",
  "nature3.jpg",
  "nature4.jpg",
  "nature5.jpg",
  "nature6.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
