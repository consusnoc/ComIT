/*
Ejercicio 74

Crear un documento con el nombre ej74.js
Mostrar en consola el siguiente dibujo utilizando la estructura while
*
***
*****
*******
*********
***********
*************

*/

//primero declaro una variable con un nro definido, para despues ir decrementando
let linea = 0;

//va a entrar para darle lugar a la primer linea
while(linea <
    = 8){
    let cantidadDeCaracteres = 1;
    let asterisco = '';
    
    while (cantidadDeCaracteres <= linea && linea%2){
       asterisco += '*';
       cantidadDeCaracteres++;
    }
    console.log(asterisco);
    linea++;
}
