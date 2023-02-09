//Menu hamburguesa
const $menu = document.querySelector("#menu"),
      $elementsMenu = document.querySelector("nav.elements-menu"),
      d = document;

export default function hamburgerMenu(){
    
    d.addEventListener("click", (e)=>{

        if(e.target.matches(".hamburger *") || e.target.matches(".elements-menu a")){
            openCloseMenu();
        } 
        
    })
    
}

function openCloseMenu(){
    $menu.classList.toggle("is-active");
    $elementsMenu.classList.toggle("open");
    d.querySelector("body").classList.toggle("open-menu");
    $elementsMenu.scrollTop = 0;
}



