let numeroSecreto=0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

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
          limpiarCaja();
        }
        return;
    }
    function limpiarCaja(){
       document.querySelector('#valorUsuario').value ='';  //usamos querySelector con el id poniendolee #
      
    }
  function generarNumeroSecreto(){
    let numeroGenerado = Math.floor( Math.random()* numeroMaximo )+1; //Generamos que el número secreto se cree sólo
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElento ('p','Ya se sortearon todos los números posibles');
    }else{
    //Si el número generado está incluido en la lista
    //includes lo que va a hacer es recorrer el arreglo y verficiar si algo ya existe y devuelve booleano
      if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

      } else{
        //guardamos el numero para que no vuelva a salir
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    }
  }
  function condicionesIniciales(){
    asignarTextoElento
    asignarTextoElento('h1','Juego del número secreto!');
    asignarTextoElento('p',`Indica un  número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; //lo iniciamos en 1 porque almenos una vez va a tener que haber intentado para acertar
    console.log(numeroSecreto);  // testeamos con este al inicio fuera de la funcion para verificar que diga vez en vés de veces cuando ponemos la respuesta a la primera

  }
  function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
   condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

  }
condicionesIniciales();