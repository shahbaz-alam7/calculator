let screen = document.getElementById("value");
let equals = document.querySelector(".equals");
let clear = document.querySelector(".clear");
let backspace = document.querySelector(".backspace");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let dot = document.querySelector(".dot");
let num0 = document.querySelector(".num0");
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let num3 = document.querySelector(".num3");
let num4 = document.querySelector(".num4");
let num5 = document.querySelector(".num5");
let num6 = document.querySelector(".num6");
let num7 = document.querySelector(".num7");
let num8 = document.querySelector(".num8");
let num9 = document.querySelector(".num9");

//OPERATORS, CLEAR,  BACKSPACE
clear.addEventListener("click", function () {  //clear
  screen.innerText = "";
});
plus.addEventListener("click", function () { //plus
  screen.innerText += "+";
});
minus.addEventListener("click", function () { //minus
  screen.innerText += "-";
});
multiply.addEventListener("click", function () { //multiply
  screen.innerText += "*";
});
divide.addEventListener("click", function () { //divide
  screen.innerText += "/";
});
dot.addEventListener("click", function () { //dot
  screen.innerText += ".";
});

//NUMBERS
num0.addEventListener("click", function () {
  screen.innerText += "0";
});
num1.addEventListener("click", function () {
  screen.innerText += "1";
});
num2.addEventListener("click", function () {
  screen.innerText += "2";
});
num3.addEventListener("click", function () {
  screen.innerText += "3";
});
num4.addEventListener("click", function () {
  screen.innerText += "4";
});
num5.addEventListener("click", function () {
  screen.innerText += "5";
});
num6.addEventListener("click", function () {
  screen.innerText += "6";
});
num7.addEventListener("click", function () {
  screen.innerText += "7";
});
num8.addEventListener("click", function () {
  screen.innerText += "8";
});
num9.addEventListener("click", function () {
  screen.innerText += "9";
});

// BACKSPACE FUNCTIONING
backspace.addEventListener("click", function () {
  let a = document.getElementById("value").innerText;
  let length = a.length;
  // console.log(a, length);
  screen.innerText = a.substring(0, length - 1);
});


//EVALUTE THE EQUATION
equals.addEventListener("click", function () {
  let secrenvalue = document.getElementById("value").innerText;
  // console.log(secrenvalue);
  let result = eval(secrenvalue);
  screen.innerText = result;
});
