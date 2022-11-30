/* **********     Curso JavaScript: 64. DOM: Estilos y Variables CSS - #jonmircha     ********** */

const $linkDOM = document.querySelector(".link-dom");
const $claseUno = document.querySelector(".uno");

//-> OJO!! Importante que si queremos saber los estilos de ese elemento que estén definidos en una hoja de CSS
//   se tiene que hacer con window.getComputedStyle(elemento)
//   PAra objeter la propiedad seria con window.getComputedStyle(elemento).getPropertyValue(nombre)
console.log("Clase 1 getComputedStyle:");
console.log(window.getComputedStyle($claseUno));
console.log("Clase 1  $claseUno.style:");
console.log($claseUno.style);

//Para ver todas las propiedades en un objeto
console.log($linkDOM.style);
//Devuelve todas las propiedades css de ese elemento
console.log($linkDOM.getAttribute("style"));

console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//Para cambiar una propiedad CSS con setProperty()
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");

$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
      $body = document.body;
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$body.style.setProperty('background-color', 'var(--dark-color)');
$html.style.setProperty('--dark-color', 'black');