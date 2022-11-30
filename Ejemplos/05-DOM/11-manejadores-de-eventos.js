
/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha y Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */
/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.
Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).
https://developer.mozilla.org/en-US/docs/Web/Events

/**
 * 📝 Los Eventos

    👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se cumplan algunas condiciones.

    👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.
    
    👉 Hay 3 maneras de definir los Eventos en JS : 
 */
    
/* ************************************************************************************************************************************** */
     
   //1️⃣ COMO ATRIBUTO DEL HTML
    
   //👀 Muy importante: 
   /*👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
    *👉 Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'
   */
    function holaMundo(){
       alert('Holaaa Mundo')
       console.log(event)  //👈 con esto en la consola, se desencadena un tipo de Objeto MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy importantes: type y target.
       
      //👉 type.- es el tipo de evento q se desencadeno
      //👉 target.- es el elemento que origino el evento
      
      //👉 Dentro de target estan todos los eventos y propiedades q se pueden usar por dicho elemento y los q estan en null son eventos q no tienen definida dicha función en dichos eventos. En cambio vemos el evento onclick q si tiene definida la funcion holaMundo
    }
    
/* *************************************************************************************************************************************** */
    
   //2️⃣ COMO MANEJADOR SEMÁNTICO
    
   // OJO No se pueden asignar diferentes funciones al mismo evento, solo uno
   //👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo
   //👉 cuando definamos un evento como semántico igualamos el evento semántico al nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar
    const $eventoSemantico = document.getElementById('evento-semantico')
    $eventoSemantico.onclick = holaMundo //👈 no le ponemos () a la función xq sino al momento q se recarga el Navegador, se estará ejecutando el evento, y luego la consola nos dará undefined, xq el objeto event q mandamos a la consola no estará definido, xq la función se ejecutó asi como va, osea a la hora de cargar como tiene los parentesis se ejecuta.
    
   //👇 esta es otra manera de definir un Evento de tipo semántico, puede ser una función anónima o una arrow function
     $eventoSemantico.onclick = function(e){  //👈 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
        alert(`Hola Manejador de Evento Semántico`)
        console.log(e)
        console.log(event)
     }
    
/* ************************************************************************************************************************************** */
     
   //3️⃣ COMO MANEJADOR MÚLTIPLE

   //👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos perimite levantar un Escuchador de Eventos
   const $eventoMultiple = document.getElementById('evento-multiple')
   //👇 este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
   // 1° Nombre de evento
   // 2° Función q se va a ejecutar, pero sin parentesis
   $eventoMultiple.addEventListener('click', holaMundo);

   
   //👇 tmb podemos trabajar con una arrow function
   $eventoMultiple.addEventListener('click', (e) => { //👈 este addEventListener nos dará 2 alerts y 4 console.log, nos da 2 alerts xq en vez de reemplazar como pasa más arriba con el evento de tipo semántico, esta es la ventaja de maneja evento múltiple con addEventListener xq puede ejecutar más funciones
      alert(`Hola Manejador de Evento Múltiple`)
      console.log(e)
      console.log(e.type)
      console.log(e.target)
      console.log(event)
   } )
     
     
     
   //📝NOTA:
   //👉 Cuando escuchemos de Event Handler hacemos referencia a la función q se ejecuta en dicho Evento   
   //👉 Una misma función nos puede servir para desencadenar eventos en diferentes elementos
   //👉 Los eventos semánticos tienen un pequeño inconveniente, si nos damos cuenta, cuando hablabamos de los Prototipos y hablamos de la funcion constructora, y si queriamos agregarle más métodos teniamos q agregarle a su Prototipo, aqui pasa algo similar, el onclick es como agregarle un método al Prototipo del Modelo de eventos del elemento del DOM q se estamos manejando
   //👉 Habrá veces q a lo mejor a un mismo elemento Html le asignemos diferentes Manejadores de Eventos, es decir diferentes funciones q hagan diferentes cosas, bueno la limitante q tienen los eventos de tipo semántico, es q una vez q esta definido el evento semántico sólo va poder ejecutar una función.
   //👉 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algún momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'



   /////->PARA ELIMINARLOS
   const $eventoRemover = document.getElementById("evento-remover");

   const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
  };
  $eventoRemover.addEventListener("dblclick", removerDobleClick); 


  //EJEMPLO CON PARAMETROS -easy
  function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
    console.log(event);
  }

  $eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Jon");
  });

  //EJEMPLO ADDEVENLISTENER DOBLE CLICK
  const $doubleclick = document.querySelector(".tit-double");
  $doubleclick.addEventListener("dblclick", () => {
    alert("dobleclick")
  });