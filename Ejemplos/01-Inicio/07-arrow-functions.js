/* **********     Curso JavaScript: 21. Arrow Functions - #jonmircha     ********** */
const saludar1 = () => console.log(`Hola`);
saludar1();

const saludar2 = (nombre) => console.log(`Hola ${nombre}`);
saludar2("Irma");

const sumar1 = function (a, b) {
  return a + b;
};

//Sin necesidad de poner el return directamente se hace
const sumar2 = (a, b) => a + b;
console.log(sumar2(9, 9));


const funcionDeVariasLineas = () => {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
};

funcionDeVariasLineas();



const numeros = [1, 2, 3, 4, 5];

numeros.forEach((el, index) =>
  console.log(`${el} esta en la posición ${index}`)
);


//Mucho OJO con this, si es arrow function la añade a Window, el objeto padrisimo
function Perro() {
  console.log(this);
}
Perro();

const perro = {
  nombre: "kenai",
  ladrar() {
    console.log(this);
  },
};
perro.ladrar();
