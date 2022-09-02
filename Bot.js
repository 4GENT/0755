// ==UserScript==
// @name Bing Bot
// @namespace http://tampermonkey.net/
// @version 0.1
// @description Bot for Bing
// @author Evgeniy Molchanov
// @match https://www.bing.com/*
// @grant none
// ==/UserScript==

let links = document.links;
let btnK = document.getElementsByName("search")[0];
let keywords = ["купить авто", "купить бу авто", "продам авто"];
let keyword = keywords[getRandom(0, keywords.length)];

if (btnK !== undefined) {
  document.getElementsByName("q")[0].value = keyword;
  btnK.click();
} else {

  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("auto.ru") !== -1) {
      console.log("Нашел строку" + links[i]);
      let link = links[i];
      link.click();
      break;
    }
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
