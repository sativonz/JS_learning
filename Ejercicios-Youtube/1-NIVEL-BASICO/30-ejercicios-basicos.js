
/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */
function contarCaracteres(cadena){
    if (typeof cadena === 'string'){
        console.log('El número de caracteres de la cadena "' + cadena + '" es: ' + cadena.length);
    }else {
        cadena = cadena.toString();
        console.log('El número de caracteres de la cadena "' + cadena + '" es: ' + cadena.length);
    }
}
let cadena = 123456;
console.log(typeof cadena);
contarCaracteres(cadena);

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */
function textoRecortar(texto){
    let result = texto.slice(0, 4);
    console.log(result);
}
let texto = "Hola mundo";
textoRecortar(texto);


/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
function stringToArray(texto){
    let result = texto.split(" ");
    console.log(result);
}
let textoArray = "Hola que tal";
stringToArray(textoArray);


/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
function repetirTexto(texto, repeticion){
    for (i = 0; i < repeticion; i++){
        console.log('Repetir el texto', texto);;
    }
}
repetirTexto(textoArray, 3)


/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
function invertirCadena(cad) {
    console.log(cad.split("").reverse().join(""));
}
invertirCadena("hola");


/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

function textoEnCadena(cadena, texto){
    let i = 0;
    let contador = 0;
    while(i !== -1){
        i = cadena.indexOf(texto, i);
        if (i !== -1){
            i++;
            contador++;
        }
    }
    return console.log(`La variable ${texto} se repite ${contador} veces.`);
}

console.log(textoEnCadena('El ultimo de la lista de la españa', "de"));

//Segunda forma
let textodos = "Hola mundo que pasa mundo estoy aqui mundo";
let palabra = "mundo";

let total = 0,
  txt = textodos.split(" ");
for (let i = 0; i < txt.length; i++) {
  if (txt[i].toLowerCase() === palabra.toLowerCase()) {total++};
}
console.log(`El total de veces que se repitió ${palabra} es ${total}`);



/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */
function palindromo(palabra){
    palabra = palabra.toLowerCase();
    let alReves = palabra.split(" ").reverse().join();
    console.log("reves:" + alReves);

    console.log("palabra:" + palabra);
    return (palabra === alReves) ? console.log('Si es palindromo') : console.log('No es palindromo');

}

palindromo("salaso");

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
const eliminarCaracteres = (texto, patron) => 
    (!texto) 
    ? console.log('No ingresaste un texto') 
    : (!patron)
        ?console.log('No ingresaste un patron')
        :console.log(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");


/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
let randomNumber = getRandomArbitrary(501, 600);
randomNumber = randomNumber.toFixed();
console.log(randomNumber);



/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */

//SIN VALOR

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

//SIN VALOR

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

//SIN VALOR

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */

//SIN VALOR

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */


const convertirAF = (celsius) =>{
    let farenheit;
    farenheit = (celsius * 9/5) + 32;
    return farenheit
}

console.log(convertirAF(10));

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

function BinarioADecimal(num) {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
       sum += +num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
}

console.log(BinarioADecimal("1011"));

function convertToBinary (number, bin) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}


console.log(convertToBinary(100));
console.log(convertToBinary(8));


/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */



const montoFinal = (cantidad, descuento) =>{
    let resultado;
    resultado = descuento / 100;
    resultado = cantidad * resultado;
    resultado = cantidad - resultado;
    return resultado;
}

console.log(montoFinal(1000,20));


/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 38 años (en 2022) */

function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

console.log(calcularEdad(new Date(1992,4,23)));


/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

const contarVocalesConsonantes = palabra => {

    const vocales = "aáeéiíoóuú";
    const consonantes = "bcdfghjklmnñpqrstvxzwy";
    
    let cantidadVocales = 0;
    let cantidadConsonantes = 0;

    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
        if (consonantes.includes(letra.toLowerCase())) {
            cantidadConsonantes++;
        }
    }
    return `La cantidad de vocales es: ${cantidadVocales} y la cantida de consonantes es ${cantidadConsonantes}`;
};

console.log(contarVocalesConsonantes("Hola mundo"));



/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */

//SIN VALOR

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */

//SIN VALOR

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

//SIN VALOR

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

//SIN VALOR

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

//SIN VALOR

/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

console.clear();

let arreglo = [2,3,5,7,8,9,6,4,1,25,14,58,69];
console.log("De menor a mayor: " + arreglo.sort(function(a, b){return a - b})); 
console.log("De mayor a menor: " + arreglo.sort(function(a, b){return b - a})); 

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */

//SIN VALOR

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */

//SIN VALOR

/* 27) Programa una clase llamada Pelicula.
    La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
        - Todos los datos del objeto son obligatorios.
        - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
        - Valida que el título no rebase los 100 caracteres.
        - Valida que el director no rebase los 50 caracteres.
        - Valida que el año de estreno sea un número entero de 4 dígitos.
        - Valida que el país o paises sea introducidos en forma de arreglo.
        - Valida que los géneros sean introducidos en forma de arreglo.
        - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
        - Crea un método estático que devuelva los géneros aceptados*.
        - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
        - Crea un método que devuelva toda la ficha técnica de la película.
      - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

    * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
    */

//console.clear();

class Pelicula {

    constructor({id, titulo, director, estreno, pais, generos, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion)
    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", 
        "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados(){
        return console.info(`Los géneros aceptados son ${Pelicula.listaGeneros.join(", ")}.`);
    }

    validarCadena(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacio.`);
        if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto.`);
        return true;
    }

    validarEntero(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacio.`);
        if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado no es un número entero.`);
        return true;
    }

    validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacio.`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado no es un array.`);
        if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos.`);
        for (let cadena of valor){
            if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado no es una cadena de texto`)
        }
        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de carácteres permitidos (${longitud}).`);
        return true;
    }

    validarIMDB(id){
        if(this.validarCadena("IMDB id", id))
            (!(/^([a-z]){2}([0-9]){7}$/.test(id))) 
            ? console.error(`IMDB id ${id} no es válido, debe tener 8 carácteres, los 2 pri8meros letras minúsculas y los 7 restantes números.`)
            : console.log('IMDB id válido.');
    }

    validarTitulo(titulo){
        if(this.validarCadena("Título", titulo))
            this.validarLongitudCadena("Título", titulo, 100);
    }

    validarDirector(director){
        if(this.validarCadena("Director", director))
            this.validarLongitudCadena("Director", director, 50);
    }

    validarEstreno(estreno){
        if(this.validarEntero("Año de estreno", estreno))
        //Con regex
        // if(!(/^([0-9]{4}$)/.test(estreno))) 
        if(estreno.toString().length > 4)
            console.error("El año de estreno no puede ser superior a 4 números");
    }

    validarPais(pais){
        this.validarArreglo("País", pais);
    }

    validarGeneros(generos){
        if(this.validarArreglo("Géneros", generos))
            for(let genero of generos){
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Género(s) incorrecto(s) "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
            }
    }

    validarCalificacion(calificacion){
        if(this.validarEntero("Calificación", calificacion))
        return (calificacion < 0 || calificacion > 10)
            ? console.error(`La calificación tiene que estar en un rango entre 0 y 10.`)
            : this.calificacion = calificacion.toFixed(1);
    }

    fichaTecnica(){
        console.info(`Ficha técnica:\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join("-")}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"\nIMDB id: "${this.id}"`)
    }
    
}

const peli = new Pelicula({
id: "tt1234567",
titulo: "Scary Movie",
director: "John Perico",
estreno: 2001,
pais: ["México", "Francia"],
generos: ["Adult", "Sport"],
calificacion: 8.59
})

//peli.fichaTecnica();

//console.log(peli);

const misPelis = [
    {
        id: "tt1254785",
        titulo: "Into the wild",
        director: "Sean Pern",
        estreno: 1998,
        pais: ["USA"],
        generos: ["Adventure","Drama"],
        calificacion: 8.1
    },
    {
        id: "tt4587569",
        titulo: "Rocky Balboa",
        director: "sylvester Stalone",
        estreno: 2006,
        pais: ["USA"],
        generos: ["Action","Drama"],
        calificacion: 7.1
    },
    {
        id: "tt0215478",
        titulo: "The Dark Knith",
        director: "Perico Juan",
        estreno: 2050,
        pais: ["SPAIN"],
        generos: ["Action"],
        calificacion: 2.1
    }
]

//misPelis.forEach(el => new Pelicula(el).fichaTecnica());