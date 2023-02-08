const d = document,
    $comunidad = d.getElementById("comunidad"),
    $provincia = d.getElementById("provincia"),
    $municipio = d.getElementById("municipio"),
    $poblacion = d.getElementById("poblacion");

    let idCOM, idPRO, idMUN,
        app = angular.module('app', ['GeoAPI']);

app.controller('MainCtrl', function($scope, $timeout, GeoAPI){

    GeoAPI.setConfig("key", "74368ffedca1b11ecf2fcefa634bf34fba3e330db1b90f3b1f03e985374aaedb");
    GeoAPI.setConfig("type", "JSON");
    GeoAPI.setConfig("sandbox", 1);

    GeoAPI.comunidades({}).then(data => {
        let $template = "";
        data.data.forEach(comunidad => {
            $template += `<option data-id="${comunidad.CCOM}" value="${comunidad.COM}">${comunidad.COM}</option>`;
        });
       
        $comunidad.innerHTML =  `<option value="selecciona">Selecciona</option>${$template}`;

    }).catch(err => {
        console.log('Error: ', err);
    });

    $comunidad.addEventListener("change", e =>{
        $poblacion.innerHTML =  `<option value="selecciona">Selecciona</option>`;
        $municipio.innerHTML = `<option value="selecciona">Selecciona</option>`;
        let $template = "";
        idCOM = $comunidad.options[$comunidad.selectedIndex].dataset.id

        GeoAPI.provincias({
            CCOM: idCOM
        }).then(data => {
            data.data.forEach(provincia => {
                $template += `<option data-id="${provincia.CPRO}" value="${provincia.PRO}">${provincia.PRO}</option>`;
            });
            $provincia.innerHTML =  `<option value="selecciona">Selecciona</option>${$template}`;
        }).catch(err => {
            console.log('Error: ', err);
        });
    });

    $provincia.addEventListener("change", e =>{
        $poblacion.innerHTML =  `<option value="selecciona">Selecciona</option>`;
        let $template = "";
        idPRO = $provincia.options[$provincia.selectedIndex].dataset.id

        GeoAPI.municipios({
            CPRO: idPRO
        }).then(data => {
            data.data.forEach(municipio => {
                $template += `<option data-id="${municipio.CMUM}" value="${municipio.DMUN50}">${municipio.DMUN50}</option>`;
            });
            $municipio.innerHTML =  `<option value="selecciona">Selecciona</option>${$template}`;
        }).catch(err => {
            console.log('Error: ', err);
        });
    });

    $municipio.addEventListener("change", e =>{
        let $template = "";
        idMUN = $municipio.options[$municipio.selectedIndex].dataset.id

        GeoAPI.poblaciones({
            CMUM: idMUN,
            CPRO: idPRO
        }).then(data => {
            data.data.forEach(poblacion => {
                $template += `<option value="${poblacion.NENTSI50}">${poblacion.NENTSI50}</option>`;
            });
            $poblacion.innerHTML =  `<option value="selecciona">Selecciona</option>${$template}`;
        }).catch(err => {
            console.log('Error: ', err);
        });
    });

}); 

