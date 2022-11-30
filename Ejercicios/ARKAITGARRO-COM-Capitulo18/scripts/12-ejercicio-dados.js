let dado1 = document.querySelector(".dado1");
let dado2 = document.querySelector(".dado2");
let tirarDados = document.querySelector(".tirar-datos button");
let resultado = [];

tirarDados.addEventListener("click", ()=>{
    function randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let resutadoDado1 = randomIntFromInterval(1, 6);
    let resutadoDado2 = randomIntFromInterval(1, 6);
    dado1.innerHTML = resutadoDado1;
    dado2.innerHTML = resutadoDado2;
    let total = resutadoDado1 + resutadoDado2;
    resultado.push(total)
    console.log(resultado);
});


//Burrada sin sentido
// for(let i = 0; i < 36000; i++){
//     function randomIntFromInterval(min, max) { 
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//     let resutadoDado1 = randomIntFromInterval(1, 6);
//     let resutadoDado2 = randomIntFromInterval(1, 6);
//     dado1.innerHTML = resutadoDado1;
//     dado2.innerHTML = resutadoDado2;
//     let total = resutadoDado1 + resutadoDado2;
//     resultado.push(total)
//     console.log(resultado);
// }




  
