// ==UserScript==
// @name         botYahoo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  War whith Yahoo
// @author       Anton Klimenko
// @match        https://www.yahoo.com/*
// @icon         https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png
// @grant        none
// ==/UserScript==

<!-- кнопка и окно поиска -->
let findText = document.getElementById("ybar-sbq");
let poisk = document.getElementById("ybar-search");
let keywords = ["Кронштейн быстросъёмный"];
let link;


if(poisk !== undefined) {
  findText.value = keywords[getRandomInt(0, keywords.length - 1)];
  poisk.click();
  }
  else {
  console.log("Мы на целевом сайте");
  }


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
