(() => {

    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

    
    async function getData(){
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;

           

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.name} -- ${el.phone}`;
                $fragment.appendChild($li)
            });

            $axiosAsync.appendChild($fragment);
        } catch (err){
            let message = err.response.statusText || "Ocurrión un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            console.log('Esto se ejecuta independientemente del resultado del fetch');
            }
            
        }

    getData()

})();