
const d = document,
      w = window;

export function scrollSpy(){
    const $sections = d.querySelectorAll("div[data-scroll-spy]");

    const cb = (entries) => {

        entries.forEach(entry =>{
            const id = entry.target.getAttribute("id");
            if (entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).parentElement.classList.add("active");
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).parentElement.classList.remove("active");
            }
        })

    }
      
    const observer = new IntersectionObserver(cb, {
        //root
        //rootMargin: "-450px",
        //Para hacer lo mismo pero mas exacto
        threshold: [0.5, 0.75]
    });  
      
    $sections.forEach(el => observer.observe(el));

}