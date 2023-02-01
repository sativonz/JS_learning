//Ya devuelve en formato JSON la data no hace falta convertir

const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

    const getAllData = async () => {
        try {
            let res = await axios.get("http://localhost:3000/santos"),
                json = await res.data;
                console.log(json);

                json.forEach(el => {
                    $template.querySelector(".name").textContent = el.nombre;
                    $template.querySelector(".constellation").textContent = el.constelacion;
    
                    $template.querySelector(".edit").dataset.id = el.id;
                    $template.querySelector(".edit").dataset.name = el.nombre;
                    $template.querySelector(".edit").dataset.constellation = el.constelacion;
                    $template.querySelector(".delete").dataset.id = el.id;
    
                    let $clone = d.importNode($template, true);
                    $fragment.appendChild($clone);
                });
    
                $table.querySelector("tbody").appendChild($fragment);
        } catch (err) {
            let message = err.statusText || "Ocurrión un error";
            $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.statusText}: ${message}</b></p>`);
        }
    }

    d.addEventListener("DOMContentLoaded", getAllData);

    d.addEventListener("submit", async e => {
        if(e.target === $form){
            e.preventDefault();

            if(!e.target.id.value){
                //Create - POST
                try {
                    let headers = {headers: {'Content-Type': 'application/json;charset=UTF-8'}},
                        res = await axios.post(
                        "http://localhost:3000/santos",
                        {
                            nombre: e.target.nombre.value,
                            constelacion: e.target.constelacion.value
                        },
                        headers)
                   
                    location.reload(true);
                } catch(err) {
                    let message = err.statusText || "Ocurrión un error";
                    $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.statusText}: ${message}</b></p>`);
                }
               
            } else {
                //Update - PUT
                try{
                    let headers = {headers: {'Content-Type': 'application/json;charset=UTF-8'}},
                        res = await axios.put(
                        `http://localhost:3000/santos/${e.target.id.value}`,
                        {
                            nombre: e.target.nombre.value,
                            constelacion: e.target.constelacion.value
                        },
                        headers)
                   
                    location.reload(true);
                } catch(err) {
                    let message = err.statusText || "Ocurrión un error";
                    $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.statusText}: ${message}</b></p>`);
                }
                
            }
        }
    });

    d.addEventListener("click", async e => {

        if(e.target.matches(".edit")){
            $title.textContent = "Editar Santo";
            $form.nombre.value = e.target.dataset.name
            $form.constelacion.value = e.target.dataset.constellation;
            $form.id.value = e.target.dataset.id;
        }

        if(e.target.matches(".delete")){
            console.log(e.target);
            //DELETE
            let isDeleted = confirm(`¿Estás seguro de eliminar el id: ${e.target.dataset.id}?`);
            if(isDeleted){
                try{
                    let headers = {headers: {'Content-Type': 'application/json;charset=UTF-8'}},
                        res = await axios.delete(
                        `http://localhost:3000/santos/${e.target.dataset.id}`,
                        headers)
                   
                    location.reload(true);
                } catch(err) {
                    let message = err.statusText || "Ocurrión un error";
                    alert(`Error ${err.statusText}: ${message}`);
                }
            }
        }
    })


