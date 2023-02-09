const d = document,
    $main = d.querySelector("main"),
    $search = d.getElementById("tvmaze-search");

async function loadTVmaze(value) {

    try {
        $main.innerHTML = `<img class="loader" src="./assets/loader.svg" alt="Cargando..." />`;

        let res = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`),
            json = await res.json(),
            $template = "";

        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        
        //console.log("JSON", json);

        json.forEach(el => {
            console.log('EL', el);
            $template += `
                <figure>
                    <img src="${el.show.image.medium}" alt="${el.show.name}">
                    <figcaption><b>${el.show.name}</b></figcaption>
                    <p>${el.show.summary}</p>
                    <k><a href="${el.show.url}" target="_blank">Mas información</a></k>
                </figure>`;
        });

        $main.innerHTML = $template;

    } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrión un error.";
        $main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    }

}

$search.addEventListener("keyup", e => {if ($search.value.length >= 3) loadTVmaze($search.value)})