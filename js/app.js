window.addEventListener("load", crearTrello);

function crearTrello (){
	var contenedor = document.getElementById("js-contenedor");
	var lista = document.getElementById("js-add-lista");
	var spanListaAgregada = document.getElementById("js-add-agregarLista");
	var formulario = document.getElementById("js-formularioLista");
	var listaInput = document.getElementById("js-lista-input");
	var btnGuardar = document.getElementById("js-add-button");

	spanListaAgregada.addEventListener("click", mostrarFormulario);
	btnGuardar.addEventListener("click", aparecerTareas);		
	
	function mostrarFormulario (e){
		e.preventDefault();
		spanListaAgregada.style.display="none";
		formulario.style.display ="block";
		listaInput.focus();
	}
	
	function aparecerTareas(e){
		e.preventDefault();
		formulario.style.display ="none";
		
		var spanCreado = document.createElement("span");
		var botonNuevo = document.createElement("button");
		spanCreado.innerHTML = listaInput.value;
		
		spanCreado.setAttribute("id", "spanCreado");
		spanCreado.innerHTML = listaInput.value;
		botonNuevo.setAttribute("id", "botonNuevo");
		botonNuevo.innerHTML ="Añadir tarjeta...";
		
		spanListaAgregada.parentElement.appendChild(spanCreado);
		spanListaAgregada.parentElement.appendChild(botonNuevo);
		listaInput.value="";
		
		var divCreado = document.createElement("div");
	botonNuevo.parentElement.insertBefore(divCreado,botonNuevo.parentElement.children[3]);
		divCreado.setAttribute("class", "divCreado");
		botonNuevo.addEventListener("click", blabla);
		botonNuevo.addEventListener("click", nuevaFila);		
	}
	
	
	function nuevaFila(){
		var nuevoDiv = document.createElement("div");
		contenedor.appendChild(nuevoDiv);
		nuevoDiv.setAttribute("id", "nuevoDiv");
		nuevoDiv.appendChild(botonNuevo);
		nuevoDiv.appendChild(formNuevo);
		botonNuevo.style.display = "inline-block";
		
	}	
	
	function blabla (e){
		e.preventDefault();
/*		botonNuevo.style.display ="none";*/
			
		var formNuevo = document.createElement("form");
		divCreado.appendChild(formNuevo);
		formNuevo.setAttribute("class", "formNuevo");
		var textArea = document.createElement("textarea");
		formNuevo.appendChild(textArea);
		textArea.focus();
		textArea.setAttribute("class", "textarea");
		var botonTextArea = document.createElement("button");
		formNuevo.appendChild(botonTextArea);
		botonTextArea.setAttribute("class", "botonTextArea");
		botonTextArea.innerHTML ="Guardar";
		botonTextArea.addEventListener("click", function(e){
				e.preventDefault();
				formNuevo.style.display = "none";

				var newSpan = document.createElement("span");
				newSpan.innerHTML = textArea.value;
				divCreado.appendChild(newSpan);
				lista.appendChild(botonNuevo);
				botonNuevo.style.display = "block";
				newSpan.setAttribute("class","newSpan");
	/*			newSpan.setAttribute("id", "idNewSpan");
				newSpan.setAttribute("draggable", "true");*/
				botonNuevo.style.display ="inline-block";						   
		});		
	}

};