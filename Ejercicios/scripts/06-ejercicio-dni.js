///// 18.6 EJERCICIO 6
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let btnSend = document.querySelector("#send-dni");
let errorMsg = document.querySelector("#error-msg");
let succesMsg = document.querySelector("#succes-msg");
let resultLetter = document.querySelector("#letter-dni-result");
let textResult = document.querySelector("#text-letter-dni-result");
textResult.style.display = "none";

btnSend.addEventListener("click", function() {
    let UserdniLetter = document.querySelector("#letter-dni").value;
    let UserdniLetterLength = UserdniLetter.length;
    let numbers = [];
    let letter;

    if(UserdniLetterLength == 9){
        for(let letters of UserdniLetter){
            
            if (isNaN(letters)){
                letter =  letters
                letter = letter.toUpperCase();
            } else{
                let arrayLetter = parseInt(letters);
                numbers.push(arrayLetter);
            }
        }
   
        if(UserdniLetterLength > 0 && UserdniLetterLength < 99999999){
            
            errorMsg.innerHTML = "Números introducidos correctamente ";
            let allNumbers = numbers.join("");
            allNumbers = parseInt(allNumbers);
            allNumbers = allNumbers%23;
            allNumbers = allNumbers.toFixed(0)
            errorMsg.innerHTML = " ";
            textResult.getElementsByClassName.display = "block";
            
            if (letras[allNumbers] != letter){
                errorMsg.innerHTML = "Letra incorrecta";
                succesMsg.innerHTML = " ";
                resultLetter.innerHTML =  " ";
                textResult.style.display = "none";
            }else {
                errorMsg.innerHTML = " ";
                textResult.style.display = "block";
                succesMsg.innerHTML = "Letra y números son correctos";
                resultLetter.innerHTML = letras[allNumbers];
            }
        }
    }else {
        errorMsg.innerHTML = "Introduce los 8 números";
    }
    
    
});


