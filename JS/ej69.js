/*
Ejercicio 69

Crear un documento con el nombre ej69.js
Mostrar en consola la suma parcial de todos los números que van desde 0 hasta 1000 utilizando la estructura while.
*/

let numero = 0;
let suma = 0;
 
while (numero <= 1000) {
    numero++;
    suma = suma-numero;
    //numero++;

}
console.log(suma);