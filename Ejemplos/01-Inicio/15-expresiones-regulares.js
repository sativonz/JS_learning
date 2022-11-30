///// Regex
/* **********     Curso JavaScript: 31. Expresiones Regulares - #jonmircha     ********** */
/*
     Expresiones Regulares
        Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres.
        https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    */

let cadena =
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id 
  sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.`;

let expReg = new RegExp("lorem", "i");

console.log("TEST:" + expReg.test(cadena));
console.log("EXEC:" + expReg.exec(cadena));

//En el siguiente ejemplo se basa en que con el 1, tiene que aparecer mas de una vez
//Si le ponemos un 3 quiere decir que tiene que estar 3 veces
let expReg2 = /lorem{1,}/ig;

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
