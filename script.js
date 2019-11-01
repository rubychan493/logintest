var x1 = document.getElementById("loginusername"); //攞你係input入嘅野
var y1 = document.getElementById("loginpassword"); //攞你係input入嘅野


document.getElementById("loginok").onclick = function(){loginok(x1.value,y1.value)}; //當你禁OK果陣, 就會Run loginok() 呢個Function

function loginok(nameInput,passInput) {
	if (x1.value == "" || y1.value == "") {
		alert("Please enter your username and password!");
	} else {
		for (var ii=0;ii<localStorage.length;ii++) {
        var aa = localStorage.getItem(ii); //攞save 左係 localstorage 嘅 data
        var bb = JSON.parse(aa) //將 data 轉成 object
		var xx = bb[0]; //array 入面第一個 (username)
		var yy = bb[1]; //array 入面第二個 (password)
        if (xx == nameInput && yy == passInput) {
			document.body.appendChild(document.createTextNode("Suss"));
        }
    }
	}
    
}