/*
Ejercicio 73

Crear un documento con el nombre ej73.js
Mostrar en consola el siguiente dibujo utilizando la estructura while
*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
*

*/

//primero declaro una variable con un nro definido, para despues ir decrementando
let linea = 8;

//va a entrar para darle lugar a la primer linea
while(linea >= 1){
    let cantidadDeCaracteres = 1;
    let asterisco = '';
    //va a entrar para ir sumando los asteriscos
    while (cantidadDeCaracteres <= linea){
        asterisco += '*';
        cantidadDeCaracteres++;
    }
    console.log(asterisco);
    linea--;
}