/* **********     Curso JavaScript: 52. WeakSets & WeakMaps - #jonmircha     ********** */
//Para apoyar la limpieza de memoria
/*Weak: debil. Significa que solo van a poder almacenar referencias debiles, es decir que las llaves sean de tipo objeto. Esto le permite al recolector 
de basura que al momento que alguna de las referencias debiles que tengan estos WeakSets o WeaksMaps se hayan limpiado dentro de la logica de nuestra 
programacion, cuando el recolector de basura del navegador ejecute su proceso, es decir que limpia lo que el navegador no necesite en la sesion que estes 
trabajando, todas estas referencias debiles al ya no existir las va a limpiar y eso mejora el rendimiento de nuestra aplicacion.*/

/* 
    Carencias:
      -> No se pueden iterar, es decir recorrer cada elemento con un bucle como el for of, ya que no son propieades iterables.

      -> No se pueden eliminar todos los elementos y propiedades directamente con el metodo clear

      -> No podemos verificar su tamaño, es decir no tienen la propiedad size
*/ 

    //no se pueden agregar los valores directamente como un set normal
    //const ws = new WeakSet([1, 2, 3, true, false, false, {}, {}, "HOLA", "HOla"])
    
// -> Forma incorrecta de instanciar: const ws = new WeakSet([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]);

const ws = new WeakSet();

//Necesario crear las variables para poder añadirlos posteriormente con el .add()
let valor1 = { valor1: 1 };
let valor2 = { valor2: 2 };
let valor3 = { valor3: 3 };

ws.add(valor1);
ws.add(valor2);

console.log(ws);
console.log(ws.has(valor1));
console.log(ws.has(valor3));

ws.delete(valor2);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);


setInterval(() => console.log("setinterval" + ws), 1000);

setTimeout(() => {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 5000);

/* // -> Forma incorrecta de instanciar:
const wm = new WeakMap([
  ["nombre", "kEnAi"],
  ["edad", 7],
  ["animal", "perro"],
  [null, "nulo"],
]);

const wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);

console.log(wm);
console.log(wm.has(llave1));
console.log(wm.has(llave3));
console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

wm.delete(llave2);

console.log(wm);

wm.set(llave2, 2);
wm.set(llave3, 3);

console.log(wm);

setInterval(() => console.log(wm), 1000);

setTimeout(() => {
  llave1 = null;
  llave2 = null;
  llave3 = null;
}, 5000);*/
