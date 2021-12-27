"use strict";

const clock = document.getElementById("clock");

function printTime() {
    const date = new Date();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const secondes = date.getSeconds();
    // const dates = date.getDate();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const day = week[date.getDay()];

    // 단위가 한자리일때 두자리로 바꿔주는 방법이 2가지가 있습니다.

    // 첫째 방법: 삼항 연산자 사용하기
    // clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    //     minutes < 10 ? `0${minutes}` : minutes
    // }:${secondes < 10 ? `0${secondes}` : secondes}, ${day}`;

    // 두번째 방법: padStart() 함수 사용하기.
    // padStart(문자열 길이, 부족한 길이에 채워질 내용)
    // new Date()는 number값을 가져오기 때문에 값을 string화 해줘야 합니다.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const secondes = String(date.getSeconds()).padStart(2, "0");
    const dates = String(date.getDate()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${secondes}`;
}

let timerId = null;

function startClock() {
    printTime();
    timerId = setInterval(printTime, 1000);
}

startClock();
