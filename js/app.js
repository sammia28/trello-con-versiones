window.addEventListener("load", function(){
	var listaAgregada = document.getElementById("js-add-agregarLista");
	var formularioLista = document.getElementById("formularioLista");
//	variables formulario
	var listaInput = document.getElementById("lista-input");
//	div boton guardar y cerrar
	var listaControl = document.getElementById("js-lista-control");
	var btnGuardar = document.getElementById("js-add-button");
	var cerrar = document.getElementById("js-borrar");
	
	listaAgregada.addEventListener("click", formulario);
	function formulario (){
		listaAgregada.classList.add("ocultar");
		formularioLista.classList.remove("ocultar");
	}							   
	
	
	
});