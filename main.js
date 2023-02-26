//-------------------------------------------------------------declaro variables q' utilizaré-------------------------
let inputs, clock, alarma, horas, minutos, segundos, repetidor;

//-------------------------------------------------------------------------------------------------------------

window.addEventListener('load', () => { /* Espero a que cargue el documento HTML */
    inputs = Array.from(document.getElementsByClassName('numero')); /* Busco los inputs */
    clock = document.querySelector('.reloj'); /* Busco el reloj p/poder luego cambiar los nros a medida q' pasa el tiempo*/
    alarma = new Audio('alarm.mp3'); /* Genero la alarma */
});

/*----------------------------------------------------------Funciones------------------------------------- */
//Función ppal.
//---creo una función q' en base al llamado de otras funciones, haga q' el temporizador arranque
//startTimer() primero lee los inputs, luego actualiza la vista y la pestaña del navegador, dsp arranca el temporizador.

function startTimer() { 
    parseTime(); /* Busca y transforma los valores del input a numeros */
    setTimer();  /* Setea el temporizador visualmente */
    countdown()  /* Arranca el contador */
}

//----------------------------------------------------------
//por defecto el Array viene ordenado como horas, minutos y segundos
/* Función para convertir los valores q' ingresa el user (string) en los inputs a numeros */
//Guardo los valores q' ingresa el user.
function parseTime() {
    horas = Number(inputs[0].value); //posición uno que ingresó el user (inputs es el nombre del Array)
    minutos = Number(inputs[1].value);
    segundos = Number(inputs[2].value);

}

//---------------------------------------------------------

/* Funcion para cambiar el temporizador en la pantalla y en la pestaña */
//actualiza pantalla c/los valores de las variables (lo q' ingrese el user)
function setTimer() {
    /* Cambio la hora en pantalla */
    clock.innerHTML = `<p class="numero">${horas > 9 ? horas : ('0' + horas)} 
    </p><span>hs</span><p class="numero">
    ${minutos > 9 ? minutos : ('0' + minutos)}
    </p><span>min</span><p class="numero">
    ${segundos > 9 ? segundos : ('0' + segundos)}
    </p><span>seg</span>`;

    /*----------- Cambio la hora en la pestaña del navegador -------------------------------------*/
    //En vez de utilizar el <span> se usa los dos puntos y el valor.
    document.title = `${horas > 9 ? horas : ('0' + horas)}:
                      ${minutos > 9 ? minutos : ('0' + minutos)}:
                      ${segundos > 9 ? segundos :('0' + segundos)}`;
}

//-------------------------------------------------------
//función q' arranca el contador
//en la variable reoetidor se guarda lo que ejecute setInterval Falta declarar la función 'runner' q' será llamada c/1"
function countdown() {
    repetidor = setInterval(runner,1000);
}

/*--------------------------------------------------------- */
