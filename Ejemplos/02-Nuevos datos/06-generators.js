/* **********     Curso JavaScript: 54. Generators - #jonmircha     ********** */
// Para volver iterable una funcion SE AÑADE EL ASTERISCO *
// Yield hace la función de return y porque sino no lo 'coge' en el array
function* iterable() {
  yield "hola";
  console.log("Hola consola");
  yield "hola 2";
  console.log("Seguimos con más instrucciones de nuestro código");
  yield "hola 3";
  yield "hola 4";
}

//// Guardamos la función en una variable

let iterador = iterable();
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());

for (let y of iterador) {
  console.log(y);
}

const arr = [...iterable()];
console.log(arr);


console.log('');
console.log('FUNCIÓN CUADRADO');
function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, resultado: valor * valor });
  }, Math.random() * 1000);
}

function* generador() {
  console.log("Inicia Generator");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.log("Termina Generator");
}

//Forma incorrecta
let gen = generador();

for (let y of gen) {
  console.log(y);
}
