var i = 0;
var relogio;

function iniciar(ev) {
	i = 0;
	document.getElementById("btnIniciar").style.display = "none";
	document.getElementById("btnParar").style.display = "block";
	relogio = setInterval(function() {
		i++; // equivale a i = i + 1;
		document.getElementById("relogio").innerHTML = i;
	}, 1000);
}

function parar(ev) {
	clearInterval(relogio);
	document.getElementById("btnParar").style.display = "none";
	document.getElementById("btnIniciar").style.display = "block";
}