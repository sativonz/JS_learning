const d = document,
    $main = d.querySelector("main"),
    $search = d.getElementById("tvmaze-search"),
    $audiodb = d.getElementById("audiodb-search"),
    $lyrics = d.getElementById("lyrics-search");
    $sectionCantante = d.querySelector(".cantante");
    $sectionLetra = d.querySelector(".letra");

    
async function displayData(artist, title) {
    try {
        let resAudioDB = await fetch(`https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`),
            audioInfo = await resAudioDB.json(),
      
            resLyrics = await fetch(`http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=${artist}&song=${title}/`),
            xmlString = await resLyrics.text(),

            parser = new DOMParser(),
            xmlDoc = parser.parseFromString(xmlString, "text/xml"),
            resLyricXML = xmlDoc.getElementsByTagName("Lyric"),
            $template;
        
        if (!resAudioDB.ok) throw { errorAudiodb:{status: resAudioDB.status, statusText: resAudioDB.statusText }};
        if (!resLyrics.ok) throw { errorLyrics:{status: resLyrics.status, statusText: resLyrics.statusText }};
       
        console.log('audioInfo', audioInfo.artists[0]);
        
        $template = `<figure>
                          <p>Nombre: ${audioInfo.artists[0].strArtist}</p>
                          <p>País: ${audioInfo.artists[0].strCountry}</p>
                          <p>Estilo: ${audioInfo.artists[0].strStyle}</p>
                          <p>Género: ${audioInfo.artists[0].strGenre}</p>
                          <img src="${audioInfo.artists[0].strArtistFanart}" alt="${audioInfo.artists[0].strArtist}">
                          <p>Biografía: ${audioInfo.artists[0].strBiographyES}</p>
                      </figure>`;
        
        $sectionCantante.innerHTML = $template;
        $sectionLetra.innerHTML = `<p>${resLyricXML[0].innerHTML}</p>`

    } catch (err) {
        if(err.errorLyrics) {
            let message = err.statusText || "Ocurrión un error al recibir la letra.";
            $sectionLetra.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        }
        if(err.errorAudiodb) {
            let message = err.statusText || "Ocurrión un error al recibir la información del cantante.";
            $sectionCantante.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        }
        
    }
  
}

d.addEventListener("click", e => {

    if(e.target.matches("#btn-search")){
        displayData($audiodb.value.toLowerCase(), $lyrics.value.toLowerCase())
    }

})