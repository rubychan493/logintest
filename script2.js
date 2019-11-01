var x = document.getElementById("username"); //攞你係input入嘅野
var y = document.getElementById("password"); //攞你係input入嘅野

document.getElementById("ok").onclick = function(){ok(x.value,y.value)}; //當你禁OK果陣, 就會Run ok() 呢個Function



function ok(name,pass) {
	if (x.value=="" || y.value=="") {
		alert("Please enter your username and password!");
	} else {
		var users = [name,pass]; //入夥落array
		var i = localStorage.length;
		var b = JSON.stringify(users); //將 data 轉成 string
		localStorage.setItem(i,b); // data 會變成 {username,password} 咁樣去儲存
		return window.location.href = "login.html";
	}
}