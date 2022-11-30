
/* **********     Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha     ********** */

const $cards = document.querySelector(".cards");
console.log($cards);

console.log($cards.children);

console.log($cards.children[2]);

console.log($cards.parentElement);
console.log($cards.parentNode);

console.log($cards.firstElementChild);

console.log($cards.lastElementChild);

console.log($cards.previousElementSibling);

console.log($cards.nextElementSibling);

//Con closest sacamos el elemento mar cercano que le digamos
console.log($cards.closest("div"));
console.log($cards.closest("section"));
console.log($cards.closest("body"));

console.log($cards.children[3].closest("section")); 
