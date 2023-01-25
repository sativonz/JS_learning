const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();
    
    const getAllData = async () => {
        try {
            let res = await fetch("http://localhost:3000/santos"),
            json = await res.json();

            if (!res.ok) throw {status: res.status, statusText: res.statusText};

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

        } catch(err) {
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
                    let options = {
                      method: "POST",
                      headers: {
                        "Content-type": "application/json; charset=utf-8"
                      },
                      body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                      })
                    },
                      res = await fetch("http://localhost:3000/santos", options),
                      json = await res.json();
        
                    if (!res.ok) throw { status: res.status, statusText: res.statusText };
        
                    location.reload(true);
                } catch(err) {
                    let message = err.statusText || "Ocurrión un error";
                    $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.statusText}: ${message}</b></p>`);
                }
               
            } else {
                //Update - PUT
                try{
                    let options = {
                        method: "PUT",
                        headers: {
                        "Content-type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            nombre: $form.nombre.value,
                            constelacion: $form.constelacion.value
                        })
                    },
                        res = await fetch(`http://localhost:3000/santos/${e.target.id.value}`, options),
                        json = await res.json();
        
                    if (!res.ok) throw { status: res.status, statusText: res.statusText };
        
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
            //DELETE
            let isDeleted = confirm(`¿Estás seguro de eliminar el id: ${e.target.dataset.id}?`);
            if(isDeleted){
                try{
                    let options = {
                        method: "DELETE",
                        headers: {
                        "Content-type": "application/json; charset=utf-8"
                        }
                    },
                        res = await fetch(`http://localhost:3000/santos/${e.target.dataset.id}`, options),
                        json = await res.json();

                    if (!res.ok) throw { status: res.status, statusText: res.statusText };
        
                    location.reload(true);
                } catch(err) {
                    let message = err.statusText || "Ocurrión un error";
                    alert(`Error ${err.statusText}: ${message}`);
                }
            }
        }
    })


