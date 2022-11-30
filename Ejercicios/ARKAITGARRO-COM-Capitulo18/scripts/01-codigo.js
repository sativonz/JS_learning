console.log("Hola Mundo!");
console.log("Soy el primer script");

let mensaje_alerta = `Hola Mundo
'comillas simples'
"comillas dobles"`;

//alert(mensaje_alerta);

let meses = ["Enero","Febrero","Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (let mes of meses){
    //console.log(mes);
}

let valores = [true, 5, false, "hola", "adios", 2];
let numero_cero = 0;

valores.forEach((value) =>{
    
    
    if (typeof value === 'string') {
        
       
        if(value.length > 4){
            //console.log("El valor con mas tamaño es: " + value);
        }
        
           // console.log("Valor:", valor + " " + "Tamaño:" + valor.length);
          
    }
})

if (valores.length == 6){
    //console.log(valores[0]); 
}

if (valores.length != 8){
    //console.log(valores[2]); 
}

// console.log(valores[1] + valores[5]);
// console.log(valores[1] - valores[5]);
// console.log(valores[1] * valores[5]);
// console.log(valores[1] / valores[5]);
// console.log(valores[1] % valores[5]);

var numero1 = 5;
var numero2 = 8;
 
if(numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(Math.sign(numero2) == 1) {
  console.log("numero2 es positivo");
}
if(Math.sign(numero1) != 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1++) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

