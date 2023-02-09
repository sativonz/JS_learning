const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment(),
    xhr = new XMLHttpRequest();

    const ajax = (options) => {
        let {url, method, success, error, data} = options;

        xhr.addEventListener("readystatechange", e =>{

            if (xhr.readyState !== 4) return;
            
            if(xhr.status >= 200 && xhr.status < 300) {
                let json = JSON.parse(xhr.responseText);
                success(json);
    
            } else {
                let message = xhr.statusText || "Ocurrión un error";
                error(`Error ${xhr.status}: ${message}`);
            }
              
        })

        xhr.open(method || "GET", url);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.send(JSON.stringify(data));
    }

    const getAllData = () => {
        ajax({
            method: "GET",
            url: "http://localhost:3000/santos",
            success: (res) => {
                console.log(res);
                res.forEach(el => {
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
            },
            error: (error) => {
                console.log(error);
                $table.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`)
            },
            data: null
        })
    }

    d.addEventListener("DOMContentLoaded", getAllData);
    
    d.addEventListener("submit", e =>{
        if(e.target === $form){
            e.preventDefault();

            if(!e.target.id.value){
                //Create - POST
                ajax({
                    url:  "http://localhost:3000/santos",
                    method: "POST",
                    success: (res) => location.reload(true),
                    error: (error) => $form.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`),
                    data: {
                        nombre: $form.nombre.value,
                        constelacion: $form.constelacion.value
                    }

                })
            } else {
                //Update - PUT
                ajax({
                    url:  `http://localhost:3000/santos/${e.target.id.value}`,
                    method: "PUT",
                    success: (res) => location.reload(true),
                    error: (error) => $form.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`),
                    data: {
                        nombre: $form.nombre.value,
                        constelacion: $form.constelacion.value
                    }

                })
            }
        }
    });

    d.addEventListener("click", e => {

        if(e.target.matches(".edit")){
            $title.textContent = "Editar Santo";
            $form.nombre.value = e.target.dataset.name
            $form.constelacion.value = e.target.dataset.constellation;
            $form.id.value = e.target.dataset.id;
        }

        if(e.target.matches(".delete")){
            //DELETE
            $form.id.value = e.target.dataset.id;
            let isDeleted = confirm(`¿Estás seguro de eliminar el id: ${e.target.dataset.id}?`);
            if(isDeleted){
                ajax({
                    url:  `http://localhost:3000/santos/${e.target.dataset.id}`,
                    method: "DELETE",
                    success: (res) => location.reload(true),
                    error: (error) => alert(`${error}`)
                })
            }
        }
    })


   

    

    