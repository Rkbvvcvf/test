// ==UserScript==
// @name         botYahoo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  War whith Yahoo
// @author       Anton Klimenko
// @match        https://www.yahoo.com/*
// @match        https://search.yahoo.com/*
// @match        https://mafia-guns.ru/*
// @icon         https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png
// @grant        none
// ==/UserScript==

<!-- кнопка и окно поиска -->
let findText = document.getElementById("ybar-sbq");
let poisk = document.getElementById("ybar-search");
let keywords = ["омерта оружие", "омерта Комиссионное оружие"];
let links = document.links;
let keyword = keywords[getRandomInt(0, keywords.length)];

if(poisk !== null) {
   setFindText(findText, keywords);
  }
  else if(location.hostname == "mafia-guns.ru") {
     setTargetSite("mafia-guns.ru");
  }
  else {
    let nextYahooPage = setFindHrefClick("mafia-guns.ru", true);
       if(nextYahooPage) getLastNavPanelClick();
 }

 function getLastNavPanelClick() {
     let divNext = document.querySelectorAll("div.pages a");
     divNext[2].innerText == '4' ? setNextClick(): location.href = "https://www.yahoo.com/";
 }


function setNextClick(siteName) {
    setTimeout(()=>{
       document.getElementsByClassName("next")[0].click();
      }, getRandomInt(2500, 3000));
   }


function setTargetSite() {
 console.log("Мы на сайте Омерта");
    setInterval(() => {
      let index = getRandomInt(0, links.length)
      if(getRandomInt(0, 100)>60) {
        location.href = "https://www.yahoo.com/";
      }
      if(links[index].href.indexOf("mafia-guns.ru") != -1) {
        links[index].click();
        }
       }, getRandomInt(2000, 3500));
}

function setFindText(findText, keywords) {
  let i = 0;
   let timerId = setInterval(() => {
      findText.value += keyword[i];
      i++;
      if(i == keyword.length) {
        clearInterval(timerId);
        setTimeout(() => {
        poisk.click();
        }, getRandomInt(1000, 2000));
      }
   }, 400);
}


function setFindHrefClick(nameSite, nextYahooPage) {
  for(let i = 0; i<links.length; i++) {
      if(links[i].href.indexOf(nameSite) != -1) {
        console.log("Нашел строку" + links[i]);
        nextYahooPage = false;
        setTimeout(() => {
        window.open(links[i], "_self")}, getRandomInt(3500, 4500));
        break;
      }
    }
     return nextYahooPage;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
