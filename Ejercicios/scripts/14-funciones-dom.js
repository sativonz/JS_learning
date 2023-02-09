/*A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:

Número de enlaces de la página
Dirección a la que enlaza el penúltimo enlace
Numero de enlaces que enlazan a http://prueba/
Número de enlaces del tercer párrafo*/


let enlacesA = document.querySelectorAll("a");
let totalEnlacesPrueba = [];
let ultimoParrafo = document.querySelectorAll("p");
ultimoParrafo = ultimoParrafo[ultimoParrafo.length -1];

console.log("El tamaño de los enlaces <a> es: " + enlacesA.length);
console.log("La dirección a la que enlaza el penúltimo enlace es: "+ enlacesA[6].href);

enlacesA.forEach(element => {
    if(element.href == "http://prueba/"){
        totalEnlacesPrueba.push(element.href)
    }
});

console.log("El numero de enlaces que enlazan a http://prueba/ es: " + totalEnlacesPrueba.length);

console.log('El número de enlaces del tercer párrafo es: ' + ultimoParrafo.querySelectorAll("a").length);


