const d = document;
let participantes = ["JavaScript", "PHP", "C", "Python", "VB", "Java", "Rust", "Angular", "React"]

export default function sorteoDigital(box){
    const $box = d.getElementById(box),
          $ul = d.createElement("ul"),
          $btn = d.createElement("button");
    $btn.setAttribute('class', 'btnGetWinner');  
    $btn.textContent = "Obtener ganador";
    $box.append($ul);
    $box.append($btn);
    participantes.forEach((e)=>{
        $ul.innerHTML += `<li data-name="${e}">${e}</li>`;
    })

    $btn.addEventListener("click", ()=>{
        let ganador = participantes[Math.floor(Math.random() * participantes.length)];
        console.log("Ganador: ", ganador);
        alert(`Ganador:  ${ganador}`);
    })
    
}