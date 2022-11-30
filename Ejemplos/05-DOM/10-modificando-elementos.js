
/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** */
 const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  //// ->Clonenode para clonar elementos necesario mandar un true para copiar todo el contenido con sus hijos
  $cloneCards = $cards.cloneNode(true);
$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//// -> Reemplazar elemento con replaceChild, primero el elemento que queremos reemplazar y luego, el elemento donde se tiene que reemplazar
//$cards.replaceChild($newCard, $cards.children[2]);

//$cards.removeChild($cards.lastElementChild);

$cards.insertBefore($newCard, $cards.firstElementChild);
document.body.appendChild($cloneCards); 


/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** */
/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)
Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/
const $cards2 = document.querySelector(".cards"),
  $newCard2 = document.createElement("figure");
let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;

$newCard2.classList.add("card");

$newCard2.insertAdjacentHTML("afterbegin", $contenCard);
$cards2.insertAdjacentElement("beforeend", $newCard2);
$newCard2.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); 
//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
//$cards.after($newCard);


let app = document.querySelector('#app');

let langs = ['CSS','JavaScript','TypeScript'];

let nodes = langs.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});

app.prepend(...nodes);