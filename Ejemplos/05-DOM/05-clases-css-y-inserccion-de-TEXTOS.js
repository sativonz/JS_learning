/* **********     Curso JavaScript: 65. DOM: Clases CSS - #jonmircha     ********** */

const $card = document.querySelector(".card");

console.log($card);
//Devuelve los nombres de las clases como string
console.log($card.className);
console.log($card.classList.contains("rotate-45"));

$card.classList.add("rotate-45");

console.log($card.classList.contains("rotate-45")); //Devuelve true o false
console.log($card.className);
//Devuelve los nombres de las clases como array llamado DOMTokenList
console.log($card.classList);

$card.classList.remove("rotate-45");

console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");

console.log($card.classList.contains("rotate-45"));

//Toggle si la tiene se la quita y sino se la pone
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");

//Cambiar una clase por otra con replace
$card.classList.replace("rotate-45", "rotate-135");
//Añadir una clase con add
$card.classList.add("opacity-80", "sepia");
//Eliminar una clase con remove
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia"); 



/* **********     Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha     ********** */
const $whatIsDOM = document.getElementById("que-es");
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

///// -> Desta manera con innerText lo introduce tal cual el texto, es decir, no reconoce las etiquetas html
//$whatIsDOM.innerText = text;

///// -> Pasa de igual manera que innerText pero sin respetar los espacios puestos en la declaración de la variable con los template string
$whatIsDOM.textContent = text;

///// -> Manera correcta de hacerlo para insertar etiquetas HTML, si es solo texto utilizamos innerText
$whatIsDOM.innerHTML = text;

///// -> Lo que hace este metodo es que remplaza el elemento que tenemos en '$whatIsDom' por el código de la variable 'text'
$whatIsDOM.outerHTML = text; 
