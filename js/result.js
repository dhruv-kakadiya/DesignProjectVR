// var score1 = localStorage.getItem("score1");
// var score2 = localStorage.getItem("score2");
// var score3 = localStorage.getItem("score3");
// var score4 = localStorage.getItem("score4");
var score = localStorage.getItem("score");
var inputScore = document.getElementById("score");

inputScore.setAttribute('value', "Your Score: " + score + "/13");
