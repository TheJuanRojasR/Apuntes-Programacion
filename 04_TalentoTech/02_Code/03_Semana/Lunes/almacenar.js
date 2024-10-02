
window.addEventListener("load", () => {
	const boton = document.getElementById("grabar");
	boton.addEventListener("click", itemNuevo, false);	
});

function itemNuevo () {
	const clave = document.getElementById("clave").value; 
	const valor = document.getElementById("valor").value;
	
	localStorage.setItem(clave, valor);

	leer_mostrar(clave, valor);

	document.getElementById("clave").value="";
	document.getElementById("valor").value="";
	}

function leer_mostrar (clave, valor) {
	const zonadatos = document.getElementById("zonadatos");
	const elvalor = localStorage.getItem(clave);

	zonadatos.innerHTML = "<div>Clave: " + clave + "--" + "Valor: " + elvalor + "</div>";	
}	

