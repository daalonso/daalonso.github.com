/*

DOM: Document object Model es la representacion virtual de nuestra pagina web que contiene un arbol con cada uno de los elementos
querySelector: devuelve un solo elemento / querySelectorAll: devuelve Todos los elemetos de un criterio de busqueda
let links = document.querySelectorAll("a"); // Dentro de las comillas se coloca el selector CSS que usaremos para buscar algun elemento

links.forEach(function(link){
  console.log(link);
})

*/


//Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){
    //Agregar un evento Click a cada uno de ellos
    link.addEventListener("click",function(ev) {
      ev.preventDefault(); // previene el comportamiento por defecto del evento click ("no retornara a la pagina anterior")
      let content = document.querySelector(".content");

      // Quitarle las clases de animaciones que ya tiene
      content.classList.remove("fadeInUpBig");
      content.classList.remove("animated");

      // Agregar clases para animar su salida  fadeOutUp
      content.classList.add("fadeOutUp");
      content.classList.add("animated");

      setTimeout(function(){
          location.href = "../index.html";
      },600);

      return false;

    });
});
