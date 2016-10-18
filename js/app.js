window.addEventListener("load", crearTrello);

function crearTrello (){
	var contenedor = document.getElementById("js-contenedor");
	var lista = document.getElementById("js-add-lista");
	var spanListaAgregada = document.getElementById("js-add-agregarLista");
	var formulario = document.getElementById("js-formularioLista");
	var listaInput = document.getElementById("js-lista-input");
	var btnGuardar = document.getElementById("js-add-button");
	var elimina = document.getElementById("js-borrar");
	
	spanListaAgregada.addEventListener("click", mostrarFormulario);
	btnGuardar.addEventListener("click", function(e){
		e.preventDefault();
		aparecerTareas();
		nuevaFila();
		validarLista ();
	});		
	
	function validarLista (){
		if(listaInput.length.value =""){
			btnGuardar.disable = true;
			spanListaAgregada.style.display = "block";
		}
	}
	
	
	function mostrarFormulario (e){
		e.preventDefault();
		spanListaAgregada.style.display="none";
		formulario.style.display ="block";
		listaInput.focus();
		listaInput.value ="";
	}
	
	elimina.addEventListener("click", cerrar);
	function cerrar (){
		formulario.style.display="none";
		spanListaAgregada.style.display = "block";
		
	}
	
	function aparecerTareas(){
		formulario.style.display ="none";
		
		var spanCreado = document.createElement("span");
		spanCreado.innerHTML = listaInput.value;
		
		var botonNuevo = document.createElement("button");
		spanCreado.setAttribute("id", "spanCreado");
		botonNuevo.setAttribute("id", "botonNuevo");
		
		botonNuevo.innerHTML ="Añadir tarjeta...";
		
		spanListaAgregada.parentElement.appendChild(spanCreado);
		spanListaAgregada.parentElement.appendChild(botonNuevo);
		
		var divCreado = document.createElement("div");
		botonNuevo.parentElement.insertBefore(divCreado,botonNuevo.parentElement.children[3]);
		divCreado.setAttribute("class", "divCreado");
		botonNuevo.addEventListener("click", function(e){
			e.preventDefault();
			crearFormNuevo(divCreado, botonNuevo);
		});
	}
	
	function nuevaFila(){
		var nuevoDiv = document.createElement("div");
		contenedor.appendChild(nuevoDiv);
		nuevoDiv.setAttribute("id", "nuevoDiv");
		nuevoDiv.setAttribute("class", "divContenedor")
		nuevoDiv.appendChild(spanListaAgregada);
		nuevoDiv.appendChild(formulario);
		spanListaAgregada.style.display = "inline-block";
		
	}	
	
	function crearFormNuevo (content, botonNuevo){
		botonNuevo.style.display ="none";
		
		var formNuevo = document.createElement("form");
		content.appendChild(formNuevo);
		formNuevo.setAttribute("class", "formNuevo");
		
		var textArea = document.createElement("textarea");
		formNuevo.appendChild(textArea);
		textArea.focus();
		textArea.setAttribute("class", "textarea");
		
		var botonTextArea = document.createElement("button");
		formNuevo.appendChild(botonTextArea);
		botonTextArea.setAttribute("class", "botonTextArea");
		botonTextArea.innerHTML ="Añadir";
		
		var eliminaTarjeta = document.createElement("a");
		formNuevo.appendChild(eliminaTarjeta);
		eliminaTarjeta.setAttribute("id", "textareaElimina");
		eliminaTarjeta.setAttribute("a", "#");
		eliminaTarjeta.textContent = "X";
		
		botonTextArea.addEventListener("click", function(e){
				e.preventDefault();
				formNuevo.style.display = "none";

				var newSpan = document.createElement("span");
				newSpan.innerHTML = textArea.value;
				content.appendChild(newSpan);
				newSpan.setAttribute("class","newSpan");
				newSpan.setAttribute("draggable", "true")
				botonNuevo.style.display ="inline-block";						   
		});	
		
		eliminaTarjeta.addEventListener("click", aparecerTarjeta);
		function aparecerTarjeta (){
			formNuevo.style.display="none";
			botonNuevo.style.display = "block";
		}
		
//		funcion drag and drop 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}
};