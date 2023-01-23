(() => {

    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        console.log(res);
        let json = res.data;
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.name} -- ${el.phone}`;
            $fragment.appendChild($li)
        });
        $axios.appendChild($fragment);
    })
    .catch(err=>{
        let message = err.response.statusText || "Ocurrión un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(console.log('Esto se ejecuta independientemente del resultado del fetch'));

})();