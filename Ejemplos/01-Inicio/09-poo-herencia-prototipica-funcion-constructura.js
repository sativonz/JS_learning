//Función constructora donde asignamos los métodos al Prototipo, no a la función como tal
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}

//Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function () {
    console.log("Hago sonidos por que estoy vivo");
  };
  Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  };

//Herencia Prototípica
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};
Perro.prototype.ladrar = function () {
  console.log("Guauuu Guauuu !!!!");
};

const snoopy = new Perro("Snoopy", "Macho", "Mediano");

console.log(snoopy);
console.log(snoopy.ladrar());
console.log(snoopy.sonar());
console.log(snoopy.saludar());
