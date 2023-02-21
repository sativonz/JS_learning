const d = document,
    w = window,
    $site = d.getElementById("site"),
    $posts = d.getElementById("posts"),
    $loader = d.querySelector(".loader"),
    $template = d.getElementById("post-template").content,
    $fragment = d.createDocumentFragment(),
    DOMAIN = "https://css-tricks.com",
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    POSTS = `${API_WP}/posts?_embed`,
    PAGES = `${API_WP}/pages`,
    CATEGORIES = `${API_WP}/categories`;

    let page = 1,
        perPage = 5;

//Función con then catch
function getSiteData() {

    fetch(SITE)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json =>{

        $site.innerHTML = `
            <h3>Sitio web:</h3>
            <h2><a href="${json.url}" target="_blank">${json.name}</a></h2>
            <p>${json.description}</p>
            <small>${json.timezone_string}</small>
        `;
    })
    .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurrión un error";
        $site.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    })

}

//Función con async await - try catch
async function getPosts() {
    $loader.style.display = "block";
    try {
        const pages = await fetch(`${POSTS}&page=${page}&per_page=${perPage}`);
        const posts = await pages.json();
        console.log("posts", posts)
        if (!pages.ok) throw { status: res.status, statusText: res.statusText };

        posts.forEach(post => {
            let categories = '',
                tags = '';

            post._embedded["wp:term"][0].forEach(el => categories += `<li>${el.name}</li>`)
            post._embedded["wp:term"][1].forEach(el => tags += `<li>${el.name}</li>`)

            $template.querySelector(".post-image").src = post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].source_url : "./assets/img-por-defecto.jpg";
            $template.querySelector(".post-image").alt = post.title.rendered;
            $template.querySelector(".post-title").innerHTML = post.title.rendered;
            
            if(post._embedded.author[0].avatar_urls) {
                $template.querySelector(".post-author").innerHTML = `
                <img src="${post._embedded.author[0].avatar_urls['24']}" alt="${post._embedded.author[0].name}">
                <figcaption>${post._embedded.author[0].name}</figcaption>
                `;
            } else {
                $template.querySelector(".post-author").innerHTML = `
                <img src="./assets/default-avatar.jpg" alt="">
                `;
            }
            
            $template.querySelector(".post-date").innerHTML = new Date(post.date).toLocaleDateString();
            $template.querySelector(".post-link").href = post.link;
            $template.querySelector(".post-excerpt").innerHTML = post.excerpt.rendered.replace(". [&hellip;]", "...");
            if(categories != '') {
                $template.querySelector(".post-categories").innerHTML = `
                <p>Categorías:</p>
                <ul>${categories}</ul>
            `;
            }else {
                $template.querySelector(".post-categories").innerHTML = "";
            }
            
            if(tags != '') {
                $template.querySelector(".post-tags").innerHTML = `
                <p>Etiquetas:</p>
                <ul>${tags}</ul>
            `;
            }else {
                $template.querySelector(".post-tags").innerHTML = "";
            }
            $template.querySelector(".post-content > article").innerHTML = post.content.rendered;

            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $posts.appendChild($fragment);
        $loader.style.display = "none";

    }catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrión un error.";
        $posts.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    }
    

}

d.addEventListener("DOMContentLoaded", e => {
    getSiteData();
    getPosts();
})

w.addEventListener("scroll", e => {
    const { scrollTop, clientHeight, scrollHeight } = d.documentElement;
    if (scrollTop + clientHeight >= scrollHeight){
        page++;
        getPosts();
    }
})

