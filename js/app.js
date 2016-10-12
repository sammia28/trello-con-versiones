window.addEventListener("load", function(){
	var listaAgregada = document.getElementById("js-add-agregarLista");
	var formularioLista = document.getElementById("formularioLista");
	var divAlmacena = document.getElementById("js-add-lista");
//	variables formulario
//	div boton guardar y cerrar
	var listaControl = document.getElementById("js-lista-control");
	var btnGuardar = document.getElementById("js-add-button");
	var cerrar = document.getElementById("js-borrar");
	
	listaAgregada.addEventListener("click", mostrarFormulario);
	function mostrarFormulario (e){
		e.preventDefault();
		listaAgregada.classList.add("ocultar");
		formularioLista.classList.remove("ocultar");
	}
	
	btnGuardar.addEventListener("click", aparecerTareas);
								
	function aparecerTareas(e){
		e.preventDefault();
		formularioLista.classList.add("ocultar");
		
		var listaInput = document.getElementById("lista-input");
		var divContenedor = document.createElement("div");
		var titulo = document.createElement("h5");
		var anadirTarjeta = document.createElement("a");
		anadirTarjeta.setAttribute("href", "#");
		anadirTarjeta.innerHTML = "Añadir una tarjeta...";
		
		titulo.innerHTML = listaInput.value;
		
		divAlmacena.appendChild(divContenedor);
		divContenedor.appendChild(titulo);
		divContenedor.appendChild(anadirTarjeta);
		
		
	}
	
	
	
	
});