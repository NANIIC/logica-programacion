
//Seleccionamos (elemento)titulo para editar (se ve en index)
let titulo = document.querySelector('h1');
let parrafo = document.querySelector('p');
//le insertamos el titulo
titulo.innerHTML ='Mira Caritoo';
parrafo.innerHTML = 'estoy haciendo una pagina';

//declaramos la funcion que pusimos para la parte de index donde esta lo de click que le pusimos
//onclick="intentoDeUsuario();"  todo eso dentro de un buton

  function intentoDeUsuario(){
alert ('click desde el botón');

}
