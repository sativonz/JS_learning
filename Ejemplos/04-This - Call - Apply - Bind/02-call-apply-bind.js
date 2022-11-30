/* **********     Curso JavaScript: 58. call, apply, bind - #jonmircha     ********** */
console.log(this);

this.lugar = "Contexto Global";
console.log(this);


function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Hola", "kEnAi");

const obj = {
  lugar: "Contexto Objeto",
};

//Incluimos el objeto obj para tener en este scope el this y cambiar el lugar
saludar.call(obj, "Hola", "Jon");
saludar.call(null, "Hola", "Jon");
saludar.call(this, "Hola", "Jon");

saludar.apply(obj, ["Adios", "MirCha"]);
saludar.apply(null, ["Adios", "MirCha"]);
saludar.apply(this, ["Adios", "MirCha"]);

this.nombre = "Window";

const persona = {
  nombre: "Jon",
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};

persona.saludar();

const otraPersona = {
  saludar: persona.saludar.bind(this),
};
console.log('Bindeado con this');
otraPersona.saludar();

const otraPersona2 = {
  saludar: persona.saludar.bind(persona),
};
console.log('Bindeado al objeto');
otraPersona2.saludar();
