let numeroSecreto = generarNumeroSecreto();
let intentos = 1; //lo iniciamos en 1 porque almenos una vez va a tener que haber intentado para acertar
console.log(numeroSecreto);  // testeamos con este al inicio fuera de la funcion para verificar que diga vez en vés de veces cuando ponemos la respuesta a la primera
function asignarTextoElento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
return;
  }
  function verificarIntento(){
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
      
        
        if (numeroDeUsuario === numeroSecreto){
          asignarTextoElento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
          document.getElementById('reiniciar').removeAttribute('disabled'); //con el removeAttribute removemos el elemento para que ande el buton
        }else {
          //El usuario no acerto
          if (numeroDeUsuario > numeroSecreto){
            asignarTextoElento ('p','El número secreto es menor');
          }else{
            asignarTextoElento ('p','El número secreto es mayor');
          }
          intentos++;
        }
        return;
    }
    function limpiarCaja(){
      let valorCaja = document.querySelector('#valorUsuario');  //usamos querySelector con el id poniendolee #
      valorCaja.value = '';
    }
  function generarNumeroSecreto(){
    return Math.floor( Math.random()*10 )+1; //Generamos que el número secreto se cree sólo

  }
asignarTextoElento('h1','Juego del número secreto!');
asignarTextoElento('p','Indica un  número del 1 al 10');
