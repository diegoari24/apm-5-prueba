//funcion declaracion arreglo
function arreglo ()
{
	var tamaño = prompt ("Ingrese el numero de nombres");
		var nombres = new Array(tamaño);

	for (var i = 0; i < nombres.length; i++) {
		var nombre = prompt ("Ingrese el nombre #" + i);
		nombres[i]= nombre;
				alert("mensaje" + nombres);
	}

}

