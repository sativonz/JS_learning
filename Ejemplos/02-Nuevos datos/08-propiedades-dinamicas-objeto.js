/* **********     Curso JavaScript: 56. Propiedades Dinámicas - #jonmircha     ********** */

let aleatorio = Math.round(Math.random() * 100 + 5);

const objUsuarios = {
  propiedad: "Valor",
  [`id_${aleatorio}`]: "Valor Aleatorio",
};

console.log(objUsuarios);

const usuarios = ["Jon", "Irma", "Miguel", "Kala", "kEnAi"];

//Añadir id dinamico con forEach
usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios);
