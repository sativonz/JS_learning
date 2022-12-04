//OJO necesario añadir html {scroll-behavior: smooth;} para que haga el paso suave y no de golpe

const d = document,
      w = window;

export default function goToTop(){
    let btn = d.querySelector(".goToTop");

    w.addEventListener("scroll", ()=>{
        d.body.scrollTop > 200 || d.documentElement.scrollTop > 200 ? btn.classList.remove("hidden") : btn.classList.add("hidden");
    })

    btn.addEventListener("click", ()=>{
        d.body.scrollTop = 0; 
        d.documentElement.scrollTop = 0; 

        //Otra forma de hacerlo con scrollTo
        /*w.scrollTo({
            behavior: "smooth",
            top: 0
        })*/
    }) 
}
    
