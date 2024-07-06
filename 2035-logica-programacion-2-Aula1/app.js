let numeroSecreto = generarNumeroSecreto();


function asignarTextoElento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
return;
  }
  function verificarIntento(){
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        console.log(typeof(numeroDeUsuario));  //nos retorna si es numero, string o booleano
        console.log(numeroSecreto);
        console.log(typeof(numeroSecreto));
        console.log(numeroDeUsuario);
        console.log(numeroDeUsuario === numeroSecreto) //usamos === para decir que comparamos peras con peras
        return;
    }
  function generarNumeroSecreto(){
    return Math.floor( Math.random()*10 )+1;

  }
asignarTextoElento('h1','Juego del número secreto!');
asignarTextoElento('p','Indica un  número del 1 al 10');
