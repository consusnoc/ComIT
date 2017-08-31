/*const numeros = [1,2,3,4,5,6,7,8,9];

function forEach(coleccion ){
    for (let index=0; index<coleccion.length; index++){
        console.log(coleccion[index]);
    }
}
forEach(numeros);*/

const curso={
    alumnos: ['Juanito','Pepito', 'Menganito'],
    sede: 'Scalabrini',
    materia: 'js',
    forEach: function(){
        for (let index=0; index<this.alumnos.length; index++){
        console.log(this.alumnos[index]);
        }
    },
    agregarAlumno: function(alumno){
        this.alumnos.push(alumno);
    }
}

curso.agregarAlumno('Belen');
curso.forEach();