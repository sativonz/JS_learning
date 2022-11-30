console.log(MouseEvent);
let boxRaton = document.querySelector("#raton");
let boxTeclado = document.querySelector("#teclado");
//Utilizamos scope solo para seleccionar los hijos directos
let divRaton = boxRaton.querySelector(":scope > div");
let divTeclado = boxTeclado.querySelector(":scope > div");


document.addEventListener('mousemove', (e) => {
    muestraInformacion(e);
});

function muestraInformacion(e) {
    divRaton.innerHTML = `Navegador [${e.clientX},${e.clientY}]\n Página [${e.pageX},${e.pageY}]`;
   
};
  

document.addEventListener("keypress", (e)=>{
    muestraInfoTeclado(e);
    
})


function muestraInfoTeclado(e) {
    let caracter = String.fromCharCode(e.charCode);
    divTeclado.innerHTML = `Carácter [${caracter}] <br> Código Unicode [${caracter.charCodeAt(0)}]`;
    cadena.charCodeAt(indice);
};