
 /* **********     Curso JavaScript: 17. break & continue - #jonmircha     ********** */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
/* for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
    break;
    }
    console.log(numeros[i]);
}
for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
    continue;
    }
    console.log(numeros[i]);
} */


// IMPRIMIR PARES 
arrayPares = [];
for( let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        arrayPares.push(numeros[i])
    }
}

console.log(arrayPares);


// IMPRIMIR IMPARES 
arrayImpares = [];
for( let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 1) {
        arrayImpares.push(numeros[i])
    }
}

console.log(arrayImpares);