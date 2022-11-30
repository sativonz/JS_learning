/* **********     Curso JavaScript: 75. DOM: stopPropagation & preventDefault - #jonmircha     ********** */

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
      $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  //Con el stopprogragation evitamos la propagacion que se ve en el ejemplo del js anteiror
  e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  //div.addEventListener("click", flujoEventos, {
    //capture: false,
    //once: true,
  //});
});

/// OJO Ejemplo para quitar el enlace a un a, con el prevent default y el stoppropagation para quitar la funcion de la tres
$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
  e.preventDefault();
  e.stopPropagation();
}); 

