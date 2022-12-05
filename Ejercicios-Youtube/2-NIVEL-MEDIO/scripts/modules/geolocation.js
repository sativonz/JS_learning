//Otro metodo:
//navigator.geolocation.watchPosition()

const d = document,
      n = navigator;
      

export default function getGeolocation(id){

    const $boxGeolocation = d.getElementById(id),
          options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
    
    const success = position => {
        let coords = position.coords;
        console.log(position);
        $boxGeolocation.innerHTML = `Latitud : ${coords.latitude}<br>Longitud: ${coords.longitude}<br>Precisión: ${Math.round(coords.accuracy)} metros
        <br><br><a href="http://www.google.com/maps/@${coords.latitude},${coords.longitude},14z" target="_blank" rel="noopener">Ver en Google maps</a>`;
    };

    const error = err => {
        $boxGeolocation.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error ${err.code}: ${err.message}`);
    };

    n.geolocation.getCurrentPosition(success, error, options);

    /*n.geolocation.getCurrentPosition((pos) => {
        let crd = pos.coords;
        
    $boxGeolocation.innerHTML = `Latitud : ${crd.latitude}<br>Longitud: ${crd.longitude}<br>Precisión${crd.accuracy} metros`,

    });*/
}