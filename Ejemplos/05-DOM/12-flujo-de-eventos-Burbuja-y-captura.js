//* 👉 Principalmente hay 2 manera que nosotros podemos trabajar en como se va propagando el evento, a eso se refiere cuando hablamos del flujo del evento. 

//* 👉 Una vez que el evento se origina tiene una propagacion a lo largo del arbol del DOM. Por defecto esa propagacion se va dando desde el elemento mas interno 
      //hacia el elemento mas externo, que en este caso es el document, y esa fase se llama 💧FASE DE BURBUJA.

//? 🤔 Por que se le llama FASE DE BURBUJA? piensen en una burbuja, analizenlo. Desde el evento mas interno se propaga, y piensen en esa burbuja que se va extendiendo 
      //hasta el elemento padre mas superior, que en este caso es window. Por defecto ese es el esquema y el modelo que los navegadores soportan

const $divsEventos = document.querySelectorAll(".eventos-flujo div")


//* 💬 Imaginense que en una interfaz dinamica una botonera se forma a partir de un catalogo que tengamos en la base de datos, entonces tenemos que ir a 🔎 consultar 
//la base de datos, tenemos que imprimir un boton por cada registro que venga de la base de datos y a ese boton asignarle dinamicamente un evento. Entonces para eso 
//tendriamos que asignarle dinamicamente el evento a todos los elementos

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`)
}

console.log($divsEventos)//👈Devuelve un nodeList con las tres divs que se encuentran en esa seccion

$divsEventos.forEach((div) => {
  //* 3⃣ El tercer parametro principalmente recibe un boolean, si le ponemos false significa que estamos en fase de burbuja, el flujo de los eventos se 
  //propaga del mas interno al mas externo dentrod el arbol del DOM

  //* 💱 Si quisiera el modelo contrario que es la ✊FASE DE CAPTURA, asi se le llama porque estamos capturando esa burburja de los eventos, entonces va 
  //desde el elemento mas externo al elemento mas interno

  //💧 FASE DE BURBUJA
  //div.addEventListener("click", flujoEventos, false)

  //✊ FASE DE CAPTURA
  //div.addEventListener("click", flujoEventos, true)

  //Al tercer parametro tambien podemos pasarle un objeto
  div.addEventListener("click", flujoEventos, {
    //capture: false
    //capture: true,
    once: true//👈Significa que la funcion solamente se va a ejecutar una vez
  })
})

//* 🔻🔻 Cuando le doy click a '3' internamente la div tres esta dentro de la dos y de la uno, y como los tres elementos tienen asignado ese evento click, 
//justamente ahi vemos la propagacion del evento. Por eso tenemos un console.log de tres veces