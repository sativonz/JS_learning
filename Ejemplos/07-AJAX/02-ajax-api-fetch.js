(() => {

    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        console.log(json);
        //$fetch.innerHTML =  JSON.stringify(json);

        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.name} -- ${el.phone}`;
            $fragment.appendChild($li)
        });

        $fetch.appendChild($fragment);
    })
    .catch(err =>{
        console.log(err);
        let message = err.statusText || "Ocurrión un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(()=> {
        console.log('Esto se ejecuta independientemente del resultado del fetch');
    });


})();