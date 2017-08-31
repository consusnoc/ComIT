/*
Ejercicio 152

Crear un documento con el nombre ej152.js

Declarar un objeto usuario con las siguientes propiedades y métodos

propiedad: username, valor: null
propiedad: password, valor: null
método: saludar
método: updatePassword
método: updateUsername
El método saludar muestra un mensaje de saludo:

Este método muestra en consola el siguiente saludo: Hola, soy el usuario ${username}, Si el objeto tiene la propiedad username con un valor que no sea null
Sino muestra un mensaje de error: Este usuario no tiene username
El método updaterUsername acepta un parámetro con el nombre del usuario y asigna este valor a la propiedad username

El método updatePassword acepta un parámetro con el nombre del usuario y asigna este valor a la propiedad password

Mostrar en consola:

Saludo del objeto usuario
Propiedad username del objeto usuario
Propiedad password del objeto usuario
*/

let usuario = {
    username : null,
    password : null,
    updatePassword : function(){},
    updateUsername : function() {},
    saludar : function(){
        console.log('Hola, soy el usuario ${username}');
    }
}

usuario.saludar();