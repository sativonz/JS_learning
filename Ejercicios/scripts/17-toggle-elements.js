let enlacesA = document.querySelectorAll("a");
let parrafos = document.querySelectorAll("p");


enlacesA.forEach(element => {
    element.addEventListener("click", ()=>{
        let elementDiv = element.previousElementSibling;
        if (elementDiv.style.display === "none") {
            elementDiv.style.display = "block";
            element.innerHTML = "Ocultar contenidos"
        } else {
            elementDiv.style.display = "none";
            element.innerHTML = "Ver contenidos"
        }
    })
});