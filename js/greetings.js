"use strict";

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greetings = document.getElementById("gretting");

const HIDDEN_USERNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginClick(e) {
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_USERNAME);
    printGreetings(username);
    // greeting.classList.remove(HIDDEN_USERNAME);
    // greeting.innerText = `Hello ${username}!`;
}

function printGreetings(username) {
    greeting.classList.remove(HIDDEN_USERNAME);
    greeting.innerText = `Welcome ${username}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_USERNAME);
    loginForm.addEventListener("submit", handleLoginClick);
} else {
    printGreetings(savedUsername);
}
