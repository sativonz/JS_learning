(() => {

    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){

        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();

            if (!res.ok) throw {status: res.status, statusText: res.statusText};

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.name} -- ${el.phone}`;
                $fragment.appendChild($li)
            });

            $fetchAsync.appendChild($fragment);
        } catch (err){
            let message = err.statusText || "Ocurrión un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            console.log('Esto se ejecuta independientemente del resultado del fetch');
        }
        
    }

    getData()

})();