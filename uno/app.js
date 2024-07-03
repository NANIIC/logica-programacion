//Variables
let opc = prompt("Ingresa el número máximo que deseas");
let numeroSecreto = Math.floor(Math.random()*opc)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabaVeces = 'vez';
let maximosIntentos = 3;
console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {

     numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${opc} por favor: `));

    console.log(numeroUsuario);
    /*
    Este codig realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //usamos operador ternario en la parte de intento para ver si se pone vez o veces y funciona como if == y else:
        alert (`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en  ${intentos} ${intentos == 1 ? 'vez' : 'veces' } `);
        //alert('El numero secreto es: '+numeroSecreto);
        //acerto la condicion
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else {
            alert ('El número secreto es mayor');
        }
        //incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabaVeces = 'veces';
        if (intentos > maximosIntentos){
            alert (`Llegaste al número máximo de ${maximosIntentos} intentos :C`);
           //ponemos el break para que corte con el while
            break;
        }
    // alert('Lo siento, no acertaste el numero');
    //no acerto la condicion
    }


}