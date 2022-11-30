/* **********     Curso JavaScript: 53. Iterables & Iterators - #jonmircha     ********** */

const iterable = [1, 2, 3, 4, 5];
//const iterable = "Hola Mundo";
//const iterable = new Set([1, 2, 3, 3, 4, 5]);
//const iterable = new Map([["nombre", "jon"], ["edad", 35]]);


////Accedemos al iterador del iterable
//Siempre devuelve objeto con dos parametros, el valor y la propiedad done, para saber cuando se a acabado de iterar
const iterador = iterable[Symbol.iterator]();
console.log("Iterable: " + iterable);
console.log("Iterator: " + iterador);

//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());

//Forma correcta de iterar el iterador
let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}

