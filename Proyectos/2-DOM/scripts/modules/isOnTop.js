const d = document,
w = window;

export default function isOnTop(){
    const $section =  d.getElementById('section14');

    d.addEventListener("scroll", ()=>{
    
        if (chekIsOnTop('#section14')){
            $section.classList.add("onTopElement");
        } else {
            $section.classList.remove("onTopElement");
        }
        
        if (checkIsElementOutTop('#section14')){
            $section.classList.remove("onTopElement");
        }
        
    })
    
}
 
  
function chekIsOnTop(id){
    let element = document.querySelector(id),
    header = document.querySelector('header');

    return   element.getBoundingClientRect().top < header.getBoundingClientRect().bottom;
}

function checkIsElementOutTop(id){
    let element = document.querySelector(id),
    header = document.querySelector('header');

    return   element.getBoundingClientRect().bottom < header.getBoundingClientRect().bottom;
}






  