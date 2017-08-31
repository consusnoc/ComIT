/*
Ejercicio 75

Crear un documento con el nombre ej75.js
Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while
Podes leer más sobre esta secuencia en Wikipedia
Acá podes encontrar una pequeña ayuda
*/

let numero1 = 0;
let numero2 = 1;
let contador = 0;
let sumaDeNumeros = 0;

while ( contador<10 ){
    numero1+numero2;
    sumaDeNumeros = numero1+numero2;
    numero2=numero1;
    numero1=sumaDeNumeros;
    console.log(sumaDeNumeros);
    contador++;

}