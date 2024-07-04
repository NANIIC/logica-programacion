

//declaramos la funcion que pusimos para la parte de index donde esta lo de click que le pusimos
//onclick="intentoDeUsuario();"  todo eso dentro de un buton
  
//automatizamos la asignación de texto  
function asignarTextoElento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;

  }
  function intentoDeUsuario(){
     alert ('click desde el botón');

    }
asignarTextoElento('h1','Juego del número secreto!');
asignarTextoElento('p','Indica un  número del 1 al 10!');
