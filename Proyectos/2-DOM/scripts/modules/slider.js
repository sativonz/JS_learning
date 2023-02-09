//Para hacer autoplay utilizar setinterval i++
//Para hacer transición de izquierda a derecha unicamente con css, pero para mas funcionalidad mejor usar slick.js:
/*.slider-slide {
    transition: all 1s ease;
    transform: translate(166%, 0%);
}

.slider-slide.active {
    transform: translate(0%, 0%);
}*/

const d = document;

export default function sliderCarrousel(){
    const $nextBtn = d.querySelector(".slider-btns .next"),
          $prevBtn = d.querySelector(".slider-btns .prev"),
          $slides = d.querySelectorAll(".slider-slide");
    let i = 0;

    d.addEventListener("click", (e) =>{
        if(e.target === $prevBtn){
            e.preventDefault;
            $slides[i].classList.remove("active");
            i--;

            // Para volver a la última posición cuando este en -1 el indice
            if(i < 0){
                i = $slides.length - 1;
            }

            $slides[i].classList.add("active");
        }

        if(e.target === $nextBtn){
            e.preventDefault;
            $slides[i].classList.remove("active");
            i++;

            // Para volver a la última posición cuando este en -1 el indice
            if(i >= $slides.length){
                i = 0;
            }

            $slides[i].classList.add("active");
        }
    
    })
}