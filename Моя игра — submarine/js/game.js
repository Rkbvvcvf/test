let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let submarine = new Image();
let bg = new Image();
let fg = new Image();
let trubaUp = new Image();
let trubaBottom = new Image();

submarine.src = "img/submarine.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
trubaUp.src = "img/trubaUp.png";
trubaBottom.src = "img/trubaBottom.png";

let sonar = new Audio();
let score_audio = new Audio();

sonar.src = "audio/sonar.mp3";
score_audio.src = "audio/score.mp3";

let gap = 90;

document.addEventListener("keydown", moveUp);

function moveUp() {
 yPos -= 18;
 sonar.play();
}

let truba = [];

truba[0] = {
 x : cvs.width,
 y : 0
}

let score = 0;
let xPos = 700;
let yPos = 150;
let grav = 1.3;

function draw() {
 ctx.drawImage(bg, 0, 0);

 for(let i = 0; i < truba.length; i++) {
 ctx.drawImage(trubaUp, truba[i].x, truba[i].y);
 ctx.drawImage(trubaBottom, truba[i].x, truba[i].y + trubaUp.height + gap);

 truba[i].x--;

 if(truba[i].x == 1000) {
 truba.push({
 x : cvs.width,
 y : Math.floor(Math.random() * trubaUp.height) - trubaUp.height
 });
 }

 if(xPos + submarine.width >= truba[i].x
 && xPos <= truba[i].x + trubaUp.width
 && (yPos <= truba[i].y + trubaUp.height
 || yPos + submarine.height >= truba[i].y + trubaUp.height + gap) || yPos + submarine.height >= cvs.height - fg.height) {
 location.reload();
 }

 if(truba[i].x == 655) {
 score++;
 score_audio.play();
 }
 }

 ctx.drawImage(fg, 0, cvs.height - fg.height);
 ctx.drawImage(submarine, xPos, yPos);

 yPos += grav;

 ctx.fillStyle = "blue";
 ctx.font = "33px Mistral";
 ctx.fillText("Счет: " + score, 10, cvs.height - 20);

 requestAnimationFrame(draw);
}

trubaBottom.onload = draw;