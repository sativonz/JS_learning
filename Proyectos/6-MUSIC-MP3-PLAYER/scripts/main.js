const d = document,
    $controlsBox = d.getElementById("controls-box"),
    $artBox = d.getElementById("art-box"),
    $statusBox = d.getElementById("status-box"),
    $artBoxIMG = d.querySelector(".art-box-img"),
    $actualTime = d.querySelector(".actual-time"),
    $totalTime = d.querySelector(".total-time"),
    $play = d.querySelector(".controls .play"),
    $pause = d.querySelector(".controls .pause"),
    $next = d.querySelector(".controls .next"),
    $previous = d.querySelector(".controls .previous"),
    $equalizer = d.querySelector(".equalizer"),
    $progressBar = d.querySelector(".progress-bar-mp3");


let nextSong = 0,
    progressBarCT,
    setIntervalTime;

const fetchSongs = async () => {
    try {
        const res = await fetch("./assets/db.json");
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        let message = error.statusText || "Ocurrió un error al recibir los datos";
        $controlsBox.innerHTML = `<p>Error ${error.status}: ${message}</p>`;
    }
};

const loadSongs = async () => {
    const data = await fetchSongs();
    let { img, name, artist, url } = data.songs[nextSong];

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./assets/sprite.svg", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const hiddenSvg = document.createElement("svg");
            hiddenSvg.style.display = "none";
            hiddenSvg.innerHTML = xhr.responseText;
            document.body.appendChild(hiddenSvg);
        }
    };
    xhr.send();

    let actualAudio = new Audio(url);

    const songsLength = data.songs.length;

    $artBoxIMG.src = img;
    $controlsBox.querySelector(".name-song").innerHTML = name;
    $controlsBox.querySelector(".artist-song").innerHTML = artist;

    let $ul = document.createElement("ul"),
        $fragment = d.createDocumentFragment(),
        playlistIndex = 0;

    $ul.classList.add("playlist"),
    data.songs.forEach(song => {
        const $li = document.createElement("li");
        $li.textContent = song.name;
        $li.dataset.id = playlistIndex;
        $fragment.appendChild($li);
        playlistIndex++;
    });

    $ul.appendChild($fragment);
    $artBox.appendChild($ul);

    const getCurrentTime = () => {
        const currentTime = actualAudio.currentTime,
            totalSeconds = Math.floor(currentTime),
            minutes = Math.floor(totalSeconds / 60),
            seconds = totalSeconds % 60,
            formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        $actualTime.innerHTML = formattedTime;
    }
    
    const progressBarCurrentTime = () => {
        if($progressBar.value == $progressBar.max){
                clearInterval(progressBarCT);
                $progressBar.setAttribute('max', 0);
                $progressBar.setAttribute('value', 0);
            if($next.classList.contains("last")){
                $pause.classList.add("hide");
                $play.classList.remove("hide");
            } else {
                playNextSong();
            }
            
        } else {
            $progressBar.setAttribute('max', actualAudio.duration);
            $progressBar.setAttribute('value', actualAudio.currentTime);
        }
        
    }

    progressBarCT = setInterval(progressBarCurrentTime, 1000);

    const getTotalTime = () => {
        let totalMinutes = Math.floor(actualAudio.duration / 60),
            totalSeconds = Math.floor(actualAudio.duration - totalMinutes * 60),
            totalTime = totalMinutes + ':' + totalSeconds;
        if (totalTime != NaN)  $totalTime.innerHTML = totalTime;
      
    }

    async function playMusic() { 
        $totalTime.innerHTML = "";
        clearInterval(setIntervalTime);
        if ($equalizer.classList.contains("pause")) $equalizer.classList.remove("pause"); 
        setIntervalTime = setInterval(getCurrentTime, 500);
        await actualAudio.play();
        $actualTime.classList.remove("hide");
        $play.classList.add("hide");
        $equalizer.classList.remove("hide");
        $pause.classList.remove("hide");
        $actualTime.classList.remove("hide");
        getTotalTime();
    }

    const playNextSong = () => {
        if ($previous.classList.contains('last')) $previous.classList.remove('last');
            if (nextSong + 1 < songsLength) {
                $actualTime.innerHTML = "";
                $totalTime.innerHTML = "";
                $actualTime.classList.add("hide")
                $equalizer.classList.add("pause");
                clearInterval(setIntervalTime);
                clearInterval(progressBarCT);
                actualAudio.pause();
                actualAudio.currentTime = 0;
                nextSong++;
                actualAudio = new Audio(data.songs[nextSong].url);
                actualAudio.addEventListener("canplaythrough", () => { if ($play.classList.contains('hide')){
                    playMusic();
                    $actualTime.classList.remove("hide")
                }}) 
                $artBoxIMG.src = data.songs[nextSong].img;
                $controlsBox.querySelector(".name-song").innerHTML = data.songs[nextSong].name;
                $controlsBox.querySelector(".artist-song").innerHTML = data.songs[nextSong].artist;
                if (nextSong == songsLength - 1) $next.classList.add("last");
                progressBarCT = setInterval(progressBarCurrentTime, 1000);
            }
    }


    d.addEventListener("click", (e) => {

        if (e.target.matches("progress.progress-bar-mp3")) {
            if (actualAudio.currentTime > 0) {
                clearInterval(progressBarCT);
                const x = e.pageX - $progressBar.offsetLeft;
                let clickedValue = x * $progressBar.max / $progressBar.offsetWidth;
                clickedValue = clickedValue.toFixed(0);
                $progressBar.value = clickedValue;
                actualAudio.currentTime = clickedValue;
                progressBarCT = setInterval(progressBarCurrentTime, 1000);
                getCurrentTime();
            }
        }

        if (e.target.matches(".play")) playMusic();

        if (e.target.matches(".pause")) {
            $equalizer.classList.add("pause");
            actualAudio.pause();
            $pause.classList.add("hide");
            $play.classList.remove("hide");
            clearInterval(setIntervalTime)
        }

        if (e.target.matches(".next")) playNextSong();

        if (e.target.matches(".previous")) {
            if (nextSong > 0) {
                $actualTime.innerHTML = "";
                $totalTime.innerHTML = "";
                $actualTime.classList.add("hide")
                $equalizer.classList.add("pause");
                if ($next.classList.contains('last')) $next.classList.remove('last');
                clearInterval(setIntervalTime);
                actualAudio.pause();
                actualAudio.currentTime = 0;
                nextSong--;
                actualAudio = new Audio(data.songs[nextSong].url);
                actualAudio.addEventListener("canplaythrough", () => { if ($play.classList.contains('hide')) {
                    playMusic();
                    $actualTime.classList.remove("hide")
                }});
                $artBoxIMG.src = data.songs[nextSong].img;
                $controlsBox.querySelector(".name-song").innerHTML = data.songs[nextSong].name;
                $controlsBox.querySelector(".artist-song").innerHTML = data.songs[nextSong].artist;
                if (nextSong == 0) $previous.classList.add("last");
            }
        }

        if(e.target.matches(".playlist_add") || e.target.matches(".playlist_add use") ){

            
            let $playlist = d.querySelector(".playlist"),
                $playlistDisplay =  getComputedStyle($playlist).getPropertyValue("visibility");
        
                if ($playlistDisplay === 'hidden') $playlist.classList.add("open");
                else $playlist.classList.remove("open");     
        }
       
        if(e.target.matches(".playlist li")){
            nextSong = parseInt(e.target.dataset.id);
            if (nextSong == 0) $previous.classList.add("last"), $next.classList.remove("last");
            else if  (nextSong == songsLength - 1) $next.classList.add("last"),$previous.classList.remove("last")
            else if (nextSong != songsLength - 1 || nextSong != 0) $next.classList.remove("last"),$previous.classList.remove("last");
            clearInterval(setIntervalTime);
            clearInterval(progressBarCT);
            actualAudio.pause();
            actualAudio.currentTime = 0;
            actualAudio = new Audio(data.songs[e.target.dataset.id].url);
            playMusic();
            $artBoxIMG.src = data.songs[e.target.dataset.id].img;
            $controlsBox.querySelector(".name-song").innerHTML = data.songs[e.target.dataset.id].name;
            $controlsBox.querySelector(".artist-song").innerHTML = data.songs[e.target.dataset.id].artist;
            progressBarCT = setInterval(progressBarCurrentTime, 1000);
        }

    })
}

d.addEventListener("DOMContentLoaded", e => loadSongs());