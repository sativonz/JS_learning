//Calcular factorial de un número
let resultado = document.querySelector("#resultado");
let btnSend = document.querySelector("#send-factorial");

btnSend.addEventListener("click", function(){
    let numbers = [];
    let number = document.querySelector("#numero").value;
    
    number = parseInt(number);
    let total = number - 1;
    numbers.push(number);
    for(let i = total; i > 0; i--){
        //console.log('index' + i);
        numbers.push(i);
    }

    const sumWithInitial = numbers.reduce(
        (previousValue, currentValue) => previousValue * currentValue,
        
    );
      
    //console.log("resultado:" + sumWithInitial);
    resultado.innerHTML = `Resultado: ${sumWithInitial}`;
        
})