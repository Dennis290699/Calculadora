let operador = "";
let valor1 = 0;
let valor2 = 0;
let resultado = 0;

function agregar(valor) {
	document.getElementById("resultado").value += valor;
}

function limpiar() {
	document.getElementById("resultado").value = "";
	valor1 = 0;
	valor2 = 0;
	resultado = 0;
	operador = "";
}

function borrar() {
	let valor = document.getElementById("resultado").value;
	document.getElementById("resultado").value = valor.substring(0, valor.length - 1);
}

function operacion(op) {
	operador = op;
	valor1 = parseFloat(document.getElementById("resultado").value);
	document.getElementById("resultado").value = "";
}

function calcular() {
	valor2 = parseFloat(document.getElementById("resultado").value);
	switch (operador) {
		case "+":
			resultado = valor1 + valor2;
			break;
		case "-":
			resultado = valor1 - valor2;
			break;
		case "*":
			resultado = valor1 * valor2;
			break;
		case "/":
			resultado = valor1 / valor2;
			break;
		default:
			resultado = 0;
			break;
	}
	document.getElementById("resultado").value = resultado;
}

function cambiarModo() {
	var element = document.body;
	element.classList.toggle("dark-mode");
	var icon = document.getElementById("modo");
	if (icon.innerHTML === "🌙") {
		icon.innerHTML = "☀️";
	} else {
		icon.innerHTML = "🌙";
	}
}
