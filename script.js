var i = 0;
var countingScreen = document.querySelector(".counter");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
btn1.addEventListener("click", function() {
  i--;
  countingScreen.innerHTML = i;
})
btn2.addEventListener("click", function() {
  i++;
  countingScreen.innerHTML = i;
})
btn3.addEventListener("click", function() {
  countingScreen.innerHTML = i=0;
})