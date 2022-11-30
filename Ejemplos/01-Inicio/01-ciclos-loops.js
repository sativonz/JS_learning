///// While y Do while la unica diferencia es que en una estructura dowhhile primero ejecuta el codigo y luego lee la condición

// let contador1 = 0;
// let contador2 = 0;

// while (contador1 < 10){
//     console.log('while' + contador1);
//     contador1++;
// }

// do{
//     console.log('do while' + contador2);
//     contador2++;
// }while (contador2 < 10)



///// Loop for
/*for (inicializacion de variable; condicion; decremento o incremento){
    sentencias que ejecuta el for;
    sentencias que ejecuta el for;
    sentencias que ejecuta el for;
}*/

for (let i = 0; i < 10; i++) {
   console.log('for' + i);   
}

let numeros = [10,20,30,40,50,60,70,80,90,100];

for (let i = 0; i < numeros.length; i++) {
    console.log("numeros" + numeros[i]);
    
}


///// Loop for in -> mas indicado para objetos

const fernando = {
    nombre: "Fernando",
    apellido: "Garcia",
    edad: 30
}

for (const propiedad in fernando) {
  console.log(`
                Key:  ${propiedad}, Value: ${fernando[propiedad]}
            `); 
}


///// Loop for of -> diferencia es que este permite recorre cualquier elemento iterable

for (const elemento of numeros){
    console.log("For of:"+elemento);
}

let cadena = "Fernando Garcia";
for (const caracter of cadena){
    console.log(caracter);
}