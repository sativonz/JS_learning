
/* **********     Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores - #jonmircha     ********** */
//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

console.log(document.getElementsByTagName("li")); console.log('');
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelector(".card"));
console.log(document.querySelector("#menu li"));
console.log('');
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll("#menu li")); 
console.log('');
console.log(document.querySelectorAll(".card")[2]);
console.log('');
console.log(document.querySelectorAll("a").length);
console.log('');
document.querySelectorAll("a").forEach((el) => console.log(el));
