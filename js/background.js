"use strict";

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;
console.log(bgImg);

document.body.appendChild(bgImg);
