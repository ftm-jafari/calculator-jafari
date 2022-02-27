
var result = document.getElementById('result');
var clear = document.getElementById('clear');
// var number = document.getElementsByClassName('num');
// var div = document.getElementById('div');
// var multi = document.getElementById('multi');
// var sub = document.getElementById('sub');
// var total = document.getElementById('total');
var equal = document.getElementById('equal');

var n1, n2, n3, n4, n5, n6, n7, n8, n9, n0
   ,div , sub , multi , total ,res;

clear.addEventListener("click", function () {
  result.innerHTML = "";
});

document.querySelector("#num7").addEventListener("click", function (event) {
  n7 = parseInt(event.target.getAttribute("data-value"));
  result.innerHTML += n7;
});

document.querySelector("#num8").addEventListener("click", function (event) {
  n8 = parseInt(event.target.getAttribute("data-value"));
  result.innerHTML += n8;
});
document.querySelector("#num9").addEventListener("click", function (event) {
  n9 = parseInt(event.target.getAttribute("data-value"));
  result.innerHTML += n9;
});

document.querySelector("#num4").addEventListener("click", function (event) {
  n4 = parseInt(event.target.getAttribute("data-value"));
  result.innerHTML += n4;
});

document.querySelector("#num5").addEventListener("click", function (event) {
  n5 = parseInt(event.target.getAttribute("data-value"));
  result.innerHTML += n5;
});

document.querySelector("#num6").addEventListener("click", function (event) {
  n6 = parseInt(event.target.getAttribute("data-value"));
  result.innerHTML += n6;
});

document.querySelector("#num1").addEventListener("click", function (event) {
  n1 = parseInt(event.target.getAttribute("data-value"));
  result.innerHTML += n1;
});

document.querySelector("#num2").addEventListener("click", function (event) {
  n2 = parseInt(event.target.getAttribute("data-value"));
  result.innerHTML += n2;
});

document.querySelector("#num3").addEventListener("click", function (event) {
  n3 = parseInt(event.target.getAttribute("data-value"));
  result.innerHTML += n3;
});

document.querySelector("#num0").addEventListener("click", function (event) {
  n0 = parseInt(event.target.getAttribute("data-value"));
  result.innerHTML += n0;
});

document.querySelector("#div").addEventListener("click", function (event) {
  div = event.target.getAttribute("data-value");
  result.innerHTML += div;
});

document.querySelector("#sub").addEventListener("click", function (event) {
  sub = event.target.getAttribute("data-value");
  result.innerHTML += sub;
});

document.querySelector("#total").addEventListener("click", function (event) {
  total = event.target.getAttribute("data-value");
  result.innerHTML += total;
});

document.querySelector("#multi").addEventListener("click", function (event) {
  multi = event.target.getAttribute("data-value");
  result.innerHTML += multi;
});


// document.querySelector("#equal").addEventListener("click", function (event) {
//   // console.log(eval(parseFloat(result)));
//   res = result.target.getAttribute("data-value");
//   result.innerHTML += event(res);
// });

equal.addEventListener("click", function () {
  res = parseFloat(result.getAttribute("data-value"));
  result.innerHTML = eval(res);
});