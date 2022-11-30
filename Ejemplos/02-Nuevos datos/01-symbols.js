/* **********     Curso JavaScript: 49. Symbols - #jonmircha     ********** */
let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
  [NOMBRE]: "Jon",
  edad: 35,
};

console.log(persona);

persona.NOMBRE = "Jonathan MirCha";

console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
  console.log(`Hola`);
};

console.log(persona);

persona[SALUDAR]();

for (let propiedad in persona) {
  //Accede a la propiedad
  console.log(propiedad);
  //Accede al valor de la propiedad
  console.log(persona[propiedad]);
}

//Para obtener los simbolos on el metodo getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(persona));
