/* **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     ********** */

//Utilizamos .content para obtener el contenido del elemento
const $cards = document.querySelector(".cards"),
      $template = document.getElementById("template-card").content,
      $fragment = document.createDocumentFragment();

const cardsContent = [
        {
        title: "Tecnología",
        img: "https://placeimg.com/200/200/tech",
        },
        {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",
        },
        {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
        },
        {
        title: "Gente",
        img: "https://placeimg.com/200/200/people",
        },
        {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature",
        },
    ];


cardsContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  //Ncesario clonar el nodo template, con el true conseguimos que copie todo el contenido tanto el padre como los hijos 
  // si fuera false solo cogeria la etiqueta padre sin su contenido
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});
$cards.appendChild($fragment); 

