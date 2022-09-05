// ==UserScript==
// @name Bing Bot
// @namespace http://tampermonkey.net/
// @version 0.1
// @description Bot for Bing
// @author Evgeniy Molchanov
// @match https://www.bing.com/*
// @match https://auto.ru/*
// @grant none
// ==/UserScript==

let links = document.links;
let btnK = document.getElementsByName("search")[0];
let keywords = ["купить авто", "купить бу авто", "продам авто"];
let keyword = keywords[getRandom(0, keywords.length)];
let bingInput = document.getElementsByName("q")[0];

if (btnK !== undefined) {
  let i = 0;

  let timerId = setInterval(()=> {
    bingInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      setTimeout(()=>{
        btnK.click();
      }, getRandom(1000, 2500));

   }
  },500);

  } else if (location.hostname == "auto.ru") {
  console.log("Мы на целевом сайте!");

  setInterval(()=>{
    let index = getRandom(0, links.length);

    if (getRandom(0, 101) > 70) {
      location.href = "https://www.bing.com/";
    }

    if (links[index].href.indexOf("auto.ru") !== -1) {
      links[index].click();
    }

  }, getRandom(4000, 5000));

} else {

  let nextBingPage = true;

  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("auto.ru") !== -1) {
      console.log("Нашел строку " + links[i]);
      let link = links[i];
      nextBingPage = false;
      setTimeout(()=>{
        link.click();
      }, getRandom(3500,4500))
      break;
    }
  }

  if (document.querySelector(".sb_pagS sb_pagS_bp b_widePag sb_bp").innerText == "4") {
    nextBingPage = false;
    location.href = "https://www.bing.com/";
  }

  if (nextBingPage) {
  setTimeout(()=>{
    document.getElementsByClassName("sw_next")[0].click();
  }, getRandom(3000, 5000));

  }
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
