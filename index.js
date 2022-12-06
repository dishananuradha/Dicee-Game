
// alert("working");

var randomNumber1 = Math.ceil(Math.random() * 6);
var randomSrcImage1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSrcImage1);


var randomNumber2 = Math.ceil(Math.random() * 6);
var randomSrcImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSrcImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
