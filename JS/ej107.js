/*
Ejercicio 107

Crear un documento con el nombre ej107.js
Crear una función con el nombre numeroMasGrande que acepte dos parámetros numéricos llamados numero1 y numero2
Ejecutar la función pasando 2 números como parámetros
Mostrar en consola el siguiente mensaje: El número ${numero1} es más grande que ${numero2}
Agregar la validación para ver si son el mismo número, en caso de que así sea agregar el mensaje: Los dos números son ${numero1}
Validar que los parámetros que nos pasaron sean del tipo number, caso contrario mostrar un mensaje en consola que diga: Esta función espera valores del tipo number
*/

function numeroMasGrande(numero1, numero2) {
	if (numero1 > numero2){
		console.log('El numero ' + numero1 + ' es mas grande que ' + numero2);
	}
	else if (numero1 == numero2){
		console.log('Los dos numeros son: ' + numero1);
	}
	else {
		console.log('Esta funcion espera valores numericos');
	}
}

numeroMasGrande(1, 5);