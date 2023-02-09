class Persona {

    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles() {
        return "Nombre: " + this.nombre + " Edad: " + this.edad + " Género: " + this.genero;
    }

}

class Estudiante extends Persona{

    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar(){
        console.log('Registrado.');
    }

}

class Profesor extends Persona{

    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar(){
        console.log('Asignado.');
    }

}

let persona2 = new Persona("Fernando Garcia", 30, "Hombre");
console.log(persona2.nombre);
console.log(persona2.obtDetalles());

let Fernando = new Estudiante("JuanFran Garcia", 30, "Hombre", "DAW", "2A");
console.log(Fernando);
console.log(Fernando.obtDetalles());

let Juan = new Profesor("Jon Mircha",0, "Hombre", "Programación", "Avanzado");;
console.log(Juan);
console.log(Juan.obtDetalles());