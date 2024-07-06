let numeroSecreto = generarNumeroSecreto();


function asignarTextoElento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
return;
  }
  function verificarIntento(){
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

     
        if (numeroDeUsuario === numeroSecreto){
          asignarTextoElento ('p', 'Acertaste en número!');
        }else {
          if (numeroDeUsuario > numeroSecreto){
            asignarTextoElento ('p','El número secreto es menor');
          }else{
            asignarTextoElento ('p','El número secreto es mayor');
          }
        }
        return;
    }
    
  function generarNumeroSecreto(){
    return Math.floor( Math.random()*10 )+1; //Generamos que el número secreto se cree sólo

  }
asignarTextoElento('h1','Juego del número secreto!');
asignarTextoElento('p','Indica un  número del 1 al 10');
