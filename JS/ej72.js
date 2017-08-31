/*
Ejercicio 72

Crear un documento con el nombre ej72.js
Mostrar en consola el siguiente dibujo utilizando la estructura while
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************

*/

let estrella = '*' ;
var duplicarEstrella =  0;

while (duplicarEstrella <= 15) {
    console.log(estrella);
    duplicarEstrella++; //se pueden incrementar todas las variables que quiero en un bucle while
    estrella+='*';
}

