/* Ejemplo menos practico con fetch y async await:
async function displayData() {
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsResponse.json();

  const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await usersResponse.json();

  let output = '';
  posts.forEach(post => {
    const user = users.find(user => user.id === post.userId);
    output += `
      <div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <h4>Author: ${user.name}</h4>
      </div>
    `;
  });

  document.querySelector('#output').innerHTML = output;
}
*/

/*Ejemplo Promise.all en variables con destructuración y sin necesidad de hacer reject en la promesa
try {
let artistFetch = fetch(urlAPI),
    songFetch = fetch(urlAPI),
    [artistRes, songRes] = await Promise.all([artistFetch, songFetch]),
    artistData = await artistRes.json(),
    songData = await songRes.json();
    //
} catch (err) {
    console.log(err);
    let message = err.statusText || "Ocurrión un error";
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
}

*/

import stripeKeys from "../scripts/stripe-keys.js";
import STRIPE_KEYS from "../scripts/stripe-keys.js"

const d = document,
    $tacos = d.getElementById("tacos"),
    $template = d.getElementById("taco-template").content,
    $fragment = d.createDocumentFragment(),
    fetchOptions = {
        headers: {
            Authorization: `Bearer ${STRIPE_KEYS.secret}`
        }
    }

let prices, products;

const moneyFormat = (num) => {
    var numberString = num.toString();
    var numberStringLength = numberString.length;
    var numberStringFormatted = '';
    for (var i = 0; i < numberStringLength; i++) {
        if (i === numberStringLength - 2) {
        numberStringFormatted += ',';
        }
        numberStringFormatted += numberString[i];
    }
    return numberStringFormatted;
}
      
Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptions),
    fetch("https://api.stripe.com/v1/prices", fetchOptions)
])
.then((responses) => Promise.all(responses.map((res) => res.ok ? res.json() : Promise.reject(res))))
.then(json => {
    console.log(json);

    products = json[0].data;
    prices = json[1].data;
    console.log('Products', products);
    console.log('Precios', prices);
    
    const templateContent = [];

    products.forEach((product,index) => {
        templateContent.push({
            id: product.id,
            title: product.name,
            img: product.images[0],
            price: prices[index].unit_amount_decimal,
            currency: prices[index].currency,
            idPrice: prices[index].id
        })
    });

    /*let numero = 10;
    console.log('ASDFSADF', numero.slice(-2) );*/

    templateContent.forEach((el) => {
        if (el.currency === "eur") el.currency = "€"
        $template.querySelector(".taco").setAttribute("data-id-product", el.id)
        $template.querySelector(".taco").setAttribute("data-id-price", el.idPrice)
        $template.querySelector("img").setAttribute("src", el.img);
        $template.querySelector("img").setAttribute("alt", el.title);
        $template.querySelector("figcaption").innerHTML = `${el.title}<br>${moneyFormat(el.price)} ${el.currency}`;
      
        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
      });
      $tacos.appendChild($fragment); 
    
})
.catch((err) => {
    console.log(err);
    let message = err.statusText || "Ocurrión un error al conectar con la API de Stripe";
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
})

d.addEventListener("click", (e) => {
    if (e.target.matches(".taco *")) {
        let price = e.target.parentElement.getAttribute("data-id-price");
        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            lineItems: [{ price, quantity: 1 }],
            mode: "subscription",
            successUrl: "http://127.0.0.1:5501/Ejercicios-Youtube/3-AJAX/07-API-Stripe-carrito-compra/assets/stripe-success.html",
            cancelUrl: "http://127.0.0.1:5501/Ejercicios-Youtube/3-AJAX/07-API-Stripe-carrito-compra/assets/stripe-cancel.html"
        })
        .then(res => {
            if(res.error) {
                $tacos.insertAdjacentHTML("afterend", res.error);
            }
        })
    }
})


