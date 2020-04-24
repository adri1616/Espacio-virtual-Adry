var miMenuDespegable, miMenuDespegable2;//declarando variables 
function mostrar() {
	// body...
	document.getElementById('miMenu').classList.toggle("mostrar");//selecciona un elemento del documento por medio del valor del atributo
	document.getElementById('miMenu2').classList.remove("mostrar");
}
window.onclick=function(e){
	if (!e.target.matches(".boton_desplegar")) {
		miMenuDespegable=document.getElementById('miMenu');
		if (miMenuDespegable.classList.contains('mostrar')) {/*contains:determina si una cadena de texto puede ser
		 encontrada dentro de otra cadena de texto*/
			miMenuDespegable.classList.remove("mostrar");//remove: elimina eventos de los elementos seleccionados.
		}
	}
}