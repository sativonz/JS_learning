const d = document,
    $main = d.querySelector("main"),
    $links = d.querySelector(".links");

let pokeAPI = "https://pokeapi.co/api/v2/pokemon/";

async function loadPokemons(url) {

    try {
        $main.innerHTML = `<img class="loader" src="./assets/loader.svg" alt="Cargando..." />`;

        let res = await fetch(url),
            json = await res.json(),
            $template = "",
            $prevLink,
            $nextLink;

        console.log("JSON", json)

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        for (let i = 0; i < json.results.length; i++) {
            try {
                let res = await fetch(json.results[i].url),
                    pokemon = await res.json();

                //console.log("pokemon", res, pokemon)

                if (!res.ok) throw { status: res.status, statusText: res.statusText };

                $template += `
                    <figure>
                        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                        <figcaption>${pokemon.name}</figcaption>
                    </figure>`;

            } catch (err) {
                console.log(err);
                let message = err.statusText || "Ocurrión un error.";
                $template += `
                <figure>
                    <figcaption>Error ${err.status}: ${message}</figcaption>
                </figure>`
            }
        }

        $main.innerHTML = $template;
        $prevLink = json.previous ? `<a href="${json.previous}"><img class="arrow arrow_back" src="./assets/arrow_back.png" /></a>` : `<img class="disabled arrow arrow_back" src="./assets/arrow_back.png" />`;
        $nextLink = json.next ? `<a href="${json.next}"><img class="arrow arrow_next" src="./assets/arrow_next.png" /></a>` : `<img class="disabled arrow arrow_next" src="./assets/arrow_next.png" />`;
        $links.innerHTML = $prevLink + "" + $nextLink;

    } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrión un error.";
        $main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    }

}

d.addEventListener("DOMContentLoaded", (e) => {
    loadPokemons(pokeAPI);

})

d.addEventListener("click", e => {

    if (e.target.matches(".links a img")) {
        e.preventDefault();
        loadPokemons(e.target.parentElement.getAttribute("href"))
    }

})