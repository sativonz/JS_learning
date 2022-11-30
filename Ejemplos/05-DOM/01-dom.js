/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

console.log(window);
console.log(document);

let texto = "Hola, soy tu ordenador y te voy a cortar el cuello ijueputa!!!";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
//hablar(texto); 


//Esto es lo mismo que lo de arriba
function hablar2 (texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
//hablar2(texto); 


/* **********     Curso JavaScript: 61. DOM: Introducción - #jonmircha     ********** */
console.log("********** Elementos del Documento **********");
console.log(window.document);
console.log(document);
console.log("document.head:");
console.log(document.head);
console.log("document.body:");
console.log(document.body);
console.log("Obtener etiqueta <html> entera:");
console.log(document.documentElement);
console.log("Obtener el doctype de la etiqueta <html>:");
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
console.log('Para sacar la selección que hagamos en el texto:');
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000);

document.write("<h2>Hola Mundo desde el DOM</h2>"); 



