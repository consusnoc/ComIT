/*
Ejercicio 154

Crear un documento con el nombre ej154.js

Declarar un objeto con el nombre de jugador con los siguientes métodos y propiedades

propiedad: nombre, valor: null
propiedad: energia, valor: 100
propiedad: vidas, valor: 3
método: perderEnergia
método: recuperarEnergia
método: perderVida
método: recuperarVida
Establecer un nombre al jugador

El método perderEnergia acepta un parámetro danio y disminuye la energía del jugador

La energía del jugador no puede ser menor que 0
El jugador no puede tener energía negativa
El método recuperarEnergia acepta un parámetro energiaRecuperada e incrementa la energía del jugador

La energía del jugador no puede ser mayor que 100
No se puede recuperar energía negativa
El método perderVida le saca una vida al jugador

Las vidas del jugador no pueden ser negativas
El método recuperarVida recupera una vida al jugador

Las vidas del jugador no pueden ser más grandes que 99
Ejecutar las siguientes acciones llamando a los métodos correspondientes:

El jugador pierde una vida
El jugador pierde 10 de energía
El jugador pierde 5 de energía
El jugador pierde 15 de energía
El jugador pierde 20 de energía
El jugador recupera 10 de energía
El jugador pierde 30 de energía
El jugador pierde 40 de energía
El jugador pierde una vida
El jugador pierde una vida
El jugador gana una vida
El jugador gana una vida
El jugador gana una vida
El jugador pierde una vida
Luego de cada acción mostrar el estado del objeto jugador El jugador ${nombre} tiene ${energia}% de energía y ${vidas} vidas
*/
const mostrarEstadoDeJugador = function(){
    mensaje= `El jugador ${jugador.nombre} `;
    mensaje= `tiene ${jugador.vidas} `;
    mensaje= `${jugador.vidas} vidas`;
}

const jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,
    perderEnergia:function(danio){
        this.energia-=danio;
        if (this.energia<0){
            this.energia=0;
        }
    },
    recuperarEnergia: function(energiaRecuperada){
        if(energiaRecuperada >= 0){
            this.energia += energiaRecuperada;
            if(energiaRecuperada > 100){
                this.energia=100;
            }
        }
    },
    perderVida: function(){
        this.vidas--;
        if(this.vidas<0){
            this.vidas=0;
        }
    },
    recuperarVida : function(){
        this.vidas++;
        if(this.vidas>99){
            this.vidas=99;
        }
    },

}

//Dentro de los metodos hay una palabra reservada llamada this,lo puedo usar dentro de objeto. Es la referencia a un objeto 

jugador.nombre= 'Pepito';
jugador.perderVida();
jugador.perderEnergia(10);
jugador.perderEnergia(15);
jugador.perderEnergia(20);
jugador.recuperarEnergia(30);
jugador.recuperarEnergia(40);
jugador.recuperarVida();
jugador.recuperarVida();
jugador.recuperarVida();
