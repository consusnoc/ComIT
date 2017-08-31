let nombres = ['Sara', 'Natasha', 'Emilce', 'Julieta'];
let apellidos =['Ferreyra', 'Romano', 'Romano', 'Romano'];
let edades = [52, 5, 21,23]; 

let mama = ['Sara', 'Ferreyra', 52];
let perra = ['Natasha', 'Romano',5];
let hermana1 =['Emilce', 'Romano', 21];
let hermana2= ['Julieta','Romano', 23];

let nomnbre ='Sara';
let apellido= 'Ferreyra';
let edad = 52;

let nombre1 = 'Natasha';
let apellido2 = 'Romano';
let edad2 = 5;

let nombre3 = 'Emilce';
let apellido3 = 'Romano';
let edad3 = 21;

let nombre4 = 'Julieta';
let apellido4 = 'Romano';
let edad4 = 23;

//El objeto de javaScript se crea con corchetes
//Las comas separan las propiedades de los objetos
let persona = {
    nombre: 'Sara',
    sexo: 'f',
    edad:'52',
    nacionalidad: 'arg',
    altura: '158',
    peso: '70',
    saludar : function (){
        console.log('Holu');
    }
};

persona.saludar();

//console.log('Hola, ' + persona.nombre + ', mama');
//console.log('Mama tiene ' + persona.edad + ' años');

