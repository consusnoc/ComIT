/*
Ejercicio 26

Crear un documento con el nombre ej26.js
Definir el concepto de curso utilizando diferentes variables y tipos de datos (Ejemplo: nombre, nro de aula, cantidad de alumnos, etc)
Encontrar al menos 6 variables que ayuden a describir el concepto de curso
Mostrar el valor de las variables de la siguiente forma: console.log(nombreDeLaVariable, valor)
Mostrar el tipo de dato de las variables de la siguiente forma: console.log(nombreDeLaVariable, typeof nombreDeLaVariable)
*/

let nombreDelCurso = 'NodeJs';
let nroDeAula = 5;
let cantidadDeAlumnos = 25;
let turnoMañana = false;
let turnoNoche = true;
let fechaDeFinalizado = undefined;
let examenFinal = null;

console.log(`nombreDelCurso, ${nombreDelCurso}`);
console.log(`nroDeAula, ${nroDeAula}`);
console.log(`cantidadDeAlumnos, ${cantidadDeAlumnos}`);
console.log(`turnoMañana, ${turnoMañana}`);
console.log(`turnoNoche, ${turnoNoche}`);
console.log(`fechaDeFinalizado, ${fechaDeFinalizado}`);
console.log(`examenFinal, ${examenFinal}`);

console.log('nombreDelCurso, ' + typeof nombreDelCurso);
console.log('nroDeAula, ' + typeof nroDeAula);
console.log('cantidadDeAlumnos, ' + typeof cantidadDeAlumnos);
console.log('turnoMañana, ' + typeof turnoMañana);
console.log('turnoNoche, ' + typeof turnoNoche);
console.log('fechaDeFinalizado,' + typeof fechaDeFinalizado);
console.log('examenFinal, ' + typeof examenFinal);