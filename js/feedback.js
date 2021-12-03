var button = document.querySelector('a-button');
var ans = 0;

button.addEventListener('click', ()=> {
    var checkBox1 = document.getElementById('score1').getAttribute("checked");
    var checkBox2 = document.getElementById('score2').getAttribute("checked");
    var checkBox3 = document.getElementById('score3').getAttribute("checked");
    var checkBox4 = document.getElementById('score4').getAttribute("checked");
    var checkBox5 = document.getElementById('score5').getAttribute("checked");
    var checkBox6 = document.getElementById('score6').getAttribute("checked");
    var checkBox7 = document.getElementById('score7').getAttribute("checked");
    var checkBox8 = document.getElementById('score8').getAttribute("checked");
    var checkBox9 = document.getElementById('score9').getAttribute("checked");
    var checkBox10 = document.getElementById('score10').getAttribute("checked");
    var checkBox11 = document.getElementById('score11').getAttribute("checked");
    var checkBox12 = document.getElementById('score12').getAttribute("checked");
    var checkBox13 = document.getElementById('score13').getAttribute("checked");

    if(checkBox1 === "true") {
        ans++;
    }
    if(checkBox2 === "true") {
        ans++;
    }
    if(checkBox3 === "true") {
        ans++;
    }
    if(checkBox4 === "true") {
        ans++;
    }
    if(checkBox5 === "true") {
        ans++;
    }
    if(checkBox6 === "true") {
        ans++;
    }
    if(checkBox7 === "true") {
        ans++;
    }
    if(checkBox8 === "true") {
        ans++;
    }
    if(checkBox9 === "true") {
        ans++;
    }
    if(checkBox10 === "true") {
        ans++;
    }
    if(checkBox11 === "true") {
        ans++;
    }
    if(checkBox12 === "true") {
        ans++;
    }
    if(checkBox13 === "true") {
        ans++;
    }

    localStorage.setItem("score", ans);
	window.location = "result.html";
});
