//Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabaVeces = 'vez';

while (numeroUsuario != numeroSecreto) {

     numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor: ");

    console.log(numeroUsuario);
    /*
    Este codig realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        alert (`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabaVeces}`);
        //alert('El numero secreto es: '+numeroSecreto);
        //acerto la condicion
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else {
            alert ('El úmero secreto es mayor');
        }
        intentos = intentos + 1;
        palabaVeces = 'veces';
        if (intentos > 3){
            alert ('Llegaste al número máximo de intentos :C');
           //ponemos el break para que corte con el while
            break;
        }
    // alert('Lo siento, no acertaste el numero');
    //no acerto la condicion
    }


}