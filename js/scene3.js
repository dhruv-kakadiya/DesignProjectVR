var ans = null;
var button = document.querySelector('a-button');
var input = document.querySelector('a-input');

function isNum(ans) {
	if(!ans) return false;

	var n = ans.length;
	if(n === 0) return false;
	for (let i = 0; i < n; i++) {
		var temp = ans[i].charCodeAt(0) - '0'.charCodeAt(0);
		if (!(temp >= 0 && temp <= 9)) {
			return false;
		}
	}
	return true;
}

function getInteger(ans) {
	var ans = 0;
	var n = ans.length;
	for (let i = 0; i < n; i++) {
		var temp = ans[i].charCodeAt(0) - '0'.charCodeAt(0);
		ans = ans * 10;
		ans = ans + temp;
	}
	return ans;
}

button.addEventListener('click', ()=> {
	// ans = input.value;
	// console.log(ans);
	// if(isNum(ans)) {
	// 	// ans = getInteger(ans);
	// 	console.log(ans);
	// 	localStorage.setItem("score3", ans);
	// 	window.location = "scene4.html";
	// }
	window.location = "scene4.html";
});

