
const whatButton = document.getElementById("what-button");
const noiseButton = document.getElementById("noise-button");
const interviewButton = document.getElementById("interview-button");
const stubbornbutton = document.getElementById("stubborn-button");
// const guestbookPGButton = document.getElementById("guestbook-pg-button");
// const guestbookMSMSButton = document.getElementById("guestbook-msms-button");
// const guestbookBHSButton = document.getElementById("guestbook-bhs-button");

const gbButton = document.getElementById("gb-button");
// file archive
const faPGButton = document.getElementById("fa-pg-button");
const faMSMSButton = document.getElementById("fa-msms-button");
const faBHSButton = document.getElementById("fa-bhs-button");

// back buttons
const backnoise = document.getElementById("back-noise");
const backpicture = document.getElementById("back-msms");
const backinterview = document.getElementById("back-interview");


whatButton.onclick = function () {
  window.open("About_Bordeaux.html");
} 
noiseButton.onclick = function () {
  window.open("Noise.html");
}
interviewButton.onclick = function () {
  window.open("Interview.html");
}

// back clicks
backnoise.onclick = function () {
  animPut(noiseDiv,"Downloads/Laptop.mp3", commonImagePath + "pinksky.jpeg", homescreen);
}

// extras
picButton.onclick = function () {
  window.open("Pictures.html");
}
// What button
whatButton.onclick = function () {
  window.open("About_Bordeaux.html");
}


