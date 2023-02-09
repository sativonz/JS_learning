const d = document,
    $linkHome = d.querySelector(".home"),
    $linkAcerca = d.querySelector(".acerca"),
    $linkServicios = d.querySelector(".servicios"),
    $linkContacto = d.querySelector(".contacto"),
    $main = d.querySelector("#content");

const getHTML = (url) =>{
    fetch(
        url,
        {headers: {
            "Content-type": "text/html; charset=utf-8"
        }   
        })
    .then(res => res.ok ? res.text() : Promise.reject(res))
    .then(html => {
        $main.innerHTML = html
    })
    .catch(err =>{
        console.log(err);
    })
}
   
d.addEventListener("DOMContentLoaded", e => {
    getHTML("./pages/home.html");
})
/*
addEventListener("click", e =>{

    if(e.target === $linkHome){
        e.preventDefault();
        getHTML("../pages/home.html");
    }

    if(e.target === $linkAcerca){
        e.preventDefault();
        getHTML("../pages/acerca.html");
    }

    if(e.target === $linkServicios){
        e.preventDefault();
        getHTML("../pages/servicios.html");
    }

    if(e.target === $linkContacto){
        e.preventDefault();
        getHTML("../pages/contacto.html");
    }
})*/