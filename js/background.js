"use strict";

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

// bgImg.src = `./img/${randomImg}`;

// document.body.appendChild(bgImg);

document.body.style.background = `url('./img/${randomImg}')`;
