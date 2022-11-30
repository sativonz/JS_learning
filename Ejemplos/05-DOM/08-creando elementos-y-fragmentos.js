/* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** */
///// - > Abajo del todo vemos la manera mas óptima de rellenar para crear elementos
///// -> Para crear elementos del dom con .createElement()
const $figure = document.createElement("figure"),
      $figure2 = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      ///// -> Para crear un nodo de texto en el elemento creado con .createTextNode()
      $figcaptionText = document.createTextNode("Animals"),

      $cards = document.querySelector(".cards");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");

$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
      $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

// -> Primera manera de rellenar
estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});



const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
      $ul2 = document.createElement("ul");
document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
// -> Segunda manera de rellenar
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// -> Tercera con fragmentos LA MAS OPTIMA Y RÁPIDA 
document.write("<h3>Meses del Año</h3>");
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

// -> Segunda manera de rellenar y LA MAS OPTIMA Y RÁPIDA CON .createDocumentFragment();
meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});


$ul3.appendChild($fragment);
document.body.appendChild($ul3);

