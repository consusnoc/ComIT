/*Ejercicio 101

Crear un documento con el nombre ej101.js
Declarar una función que muestre los siguientes datos en consola:
Tu Nombre
Edad
Teléfono
Calle
Altura
Código postal
Casado true/false*/

function misDatos(nombre, edad, telefono, calle, alturaCalle, codigoPostal, estadoCivil) {
	/*
	let nombre = 'Consuelo';
	let edad = 25;
	let telefono = 1539143304;
	let calle = 'Alvear';
	let alturaCalle = 33;
	let codigoPostal = 1755;
	let estadoCivil = false;*/

	console.log('Mi nombre es: ', nombre);
	console.log('Mi edad es: ', edad);
	console.log('Mi numero de telefono es: ', telefono);
	console.log('Mi calle es: ', calle);
	console.log('Mi altura es: ', alturaCalle);
	console.log('Mi codigo postal es: ', codigoPostal);
	console.log('Estoy casado: ', estadoCivil);
}
 misDatos('Consuelo', 25, 2662, 'Alvear', 228, 2332, false);