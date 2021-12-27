"use strict";

const clock = document.getElementById("clock");

function printTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    const dates = date.getDate();
    const day = date.getDay();

    clock.innerText = `${hours}:${minutes}:${secondes}`;
}

let timerId = null;

function startClock() {
    printTime();
    timerId = setInterval(printTime, 1000);
}

startClock();
