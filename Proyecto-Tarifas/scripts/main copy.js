import { Fibra } from "./fibra.js";
import { Television } from "./television.js";
import { Movil } from "./movil.js";

//Generamos los contenedores ul dinámicamente
let contenedorFibraMain = document.querySelector(".container-fibra");
let contenedorTVMain = document.querySelector(".container-tv");
let contenedorMovilMain = document.querySelector(".container-movil");

for (let i = 1; i < 6; i++){
  contenedorFibraMain.innerHTML += `<div class="container-fibra${i}-ul fibra"></div>`;
  contenedorTVMain.innerHTML += ` <div class="container-tv${i}-ul tv"></div>`;
  contenedorMovilMain.innerHTML += `<div class="container-movil${i}-ul movil"></div>`;
}

/////FIBRA
let fibra_tarifa = [];
fibra_tarifa[0] = new Fibra("F100S","100MB SIMÉTRICOS","100MB",true,25.9);
fibra_tarifa[1] = new Fibra("F200S","200MB SIMÉTRICOS","200MB",true,31.9);
fibra_tarifa[2] = new Fibra("F300S","300MB SIMÉTRICOS","300MB",true,35.9);
fibra_tarifa[3] = new Fibra("F500S","500MB SIMÉTRICOS","500MB",true,40.9);
fibra_tarifa[4] = new Fibra("F1000S","1GB SIMÉTRICOS","1GB",true,49.9);

let contenedorFibra = document.querySelectorAll(".fibra");
let fibra_values = [];

fibra_tarifa.forEach((element, index) => {
  fibra_values[index] = Object.values(element);
});

contenedorFibra.forEach((element, index) => {
  element.innerHTML += "<p>-" + fibra_values[index][0] + "</p>";
  element.setAttribute("data-price", fibra_values[index][1]);
  element.setAttribute("data-name", fibra_values[index][0]);
});

/////MOVIL
let movil_tarifa = [];
movil_tarifa[0] = new Fibra("M100M9GB","100 minutos 9 GB","100 minutos","9 GB",9.6);
movil_tarifa[1]  = new Fibra("M100M9GB","200 minutos 9 GB","200 minutos","9 GB",10.7);
movil_tarifa[2]  = new Fibra("M100M9GB","500 minutos 10 GB","500 minutos","10 GB",12.5);
movil_tarifa[3]  = new Fibra("M100M9GB","Ilimitadas 15 GB","Ilimitadas","15 GB",15.4);
movil_tarifa[4]  = new Fibra("M100M9GB","Ilimitadas 20 GB","Ilimitadas","20 GB",20.3);

let contenedorMovil = document.querySelectorAll(".movil");
let movil_values = [];

movil_tarifa.forEach((element, index) => {
  movil_values[index] = Object.values(element);
});

contenedorMovil.forEach((element, index) => {
  element.innerHTML += "<p>-" + movil_values[index][0] + "</p>";
  element.setAttribute("data-price", movil_values[index][1]);
  element.setAttribute("data-name", movil_values[index][0]);
});

/////TELEVISION
let tv_tarifa = [];
tv_tarifa[0] = new Television("TV50", "TV 50 CANALES", "50 Canales", 12.5);
tv_tarifa[1] = new Television("TV100", "TV 100 CANALES", "100 Canales", 22.5);
tv_tarifa[2] = new Television("TV150", "TV 150 CANALES", "150 Canales", 45.5);
tv_tarifa[3] = new Television("F500S","TV 150 CANALES + NETFLIX","50 Canales + Netflix",60.5);
tv_tarifa[4] = new Television("F1000S","TV 50 CANALES + NETFLIX + MOVISTAR","50 Canales + Netflix + Movistar",80.5);

let contenedorTV = document.querySelectorAll(".tv");
let tv_values = [];

tv_tarifa.forEach((element, index) => {
  tv_values[index] = Object.values(element);
});

contenedorTV.forEach((element, index) => {
  element.innerHTML += "<p>-" + tv_values[index][0] + "</p>";
  element.setAttribute("data-price", tv_values[index][1]);
  element.setAttribute("data-name", tv_values[index][0]);
});

let totalPriceFibra = document.querySelector(".container-total-fibra");
let totalPriceTV = document.querySelector(".container-total-tv");
let totalPriceMovil = document.querySelector(".container-total-movil");
let totalPrice = document.querySelector(".container-total-price");
const totalPriceArray = [0, 0, 0];

for (let ul of contenedorFibra) {
  ul.addEventListener("click", function () {
    for (let ul of contenedorFibra) {
      ul.classList.remove("selected");
    }
    this.classList.add("selected");
    let name = this.dataset.name;
    totalPriceFibra.innerHTML = name;
    let price = this.dataset.price;
    price = parseFloat(price);
    console.log(price);
    totalPriceArray.splice(0, 1, price);
    sum();
  });
}

for (let ul of contenedorTV) {
  ul.addEventListener("click", function () {
    for (let ul of contenedorTV) {
      ul.classList.remove("selected");
    }
    this.classList.add("selected");
    let name = this.dataset.name;
    totalPriceTV.innerHTML = name;
    let price = this.dataset.price;
    price = parseFloat(price);
    console.log(price);
    totalPriceArray.splice(1, 1, price);
    sum();
  });
}

for (let ul of contenedorMovil) {
  ul.addEventListener("click", function () {
    for (let ul of contenedorMovil) {
      ul.classList.remove("selected");
    }
    this.classList.add("selected");
    let name = this.dataset.name;
    totalPriceMovil.innerHTML = name;
    let price = this.dataset.price;
    price = parseFloat(price);
    console.log(totalPriceArray);
    totalPriceArray.splice(2, 2, price);
    sum();
  });
}

function sum() {
  const sum = totalPriceArray.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  console.log("Precio total: " + sum.toFixed(2));
  totalPrice.innerHTML = sum.toFixed(2);
}