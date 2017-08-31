/*Ejercicio 100

Crear un documento con el nombre ej100.js
Declarar una función que muestre en consola los números pares del 0 al 100*/

function numerosPares (argument) {
	for(let numero = 0; numero <= 1000; numero++){
		if ((numero % 2) === 0) {
			console.log('El numero es par: ', numero);
		}
	}
}