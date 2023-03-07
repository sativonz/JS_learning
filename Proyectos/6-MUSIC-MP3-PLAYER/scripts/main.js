const d = document,
    $ = (selector) => d.querySelector(selector),
    $$ = (selector) => d.querySelectorAll(selector),
    $controlsBox = $("#controls-box"),
    $artBox = $("#art-box"),
    $statusBox = $("#status-box"),
    $artBoxIMG = $(".art-box-img"),
    $actualTime = $(".actual-time"),
    $totalTime = $(".total-time"),
    $play = $(".controls .play"),
    $pause = $(".controls .pause"),
    $next = $(".controls .next"),
    $previous = $(".controls .previous"),
    $equalizer = $(".equalizer"),
    $progressBar = $(".progress-bar-mp3");

let nextSong = 0,
    progressBarCT,
    setIntervalTime,
    actualAudio,
    songsLength;

const fetchSrpiteSVG = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./assets/sprite.svg", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const hiddenSvg = d.createElement("svg");
            hiddenSvg.style.display = "none";
            hiddenSvg.innerHTML = xhr.responseText;
            d.body.appendChild(hiddenSvg);
        }
    };
    xhr.send();
}

const fetchSongs = async () => {
    try {
        const res = await fetch("./assets/db.json");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
    } catch (error) {
        console.log(error);
        const message = error.statusText || "Ocurrió un error al recibir los datos";
        $controlsBox.innerHTML = `<p>Error ${error.status}: ${message}</p>`;
    }
};

const loadSongs = async () => {
    const { songs } = await fetchSongs(),
        { img, name, artist, url } = songs[nextSong];

    actualAudio = new Audio(url);
    songsLength = songs.length;

    $artBoxIMG.src = img;
    $(".name-song").innerHTML = name;
    $(".artist-song").innerHTML = artist;

    const playlist = songs
        .map((song, index) => `<li data-id="${index}">${song.name}</li>`)
        .join("");

    const $ul = d.createElement("ul");
    $ul.classList.add("playlist");
    $ul.innerHTML = playlist;
    $artBox.appendChild($ul);

    const playNextSong = () => {
        if (nextSong +1 != songsLength){
            nextSong++;
            nextSong+1  >= songsLength ? ($next.classList.add("last")) : $previous.classList.remove("last");
            const { img, name, artist, url } = songs[nextSong];
            $artBoxIMG.src = img;
            $(".name-song").innerHTML = name;
            $(".artist-song").innerHTML = artist;
            actualAudio.pause();
            actualAudio = new Audio(url);
            togglePlayPause();
            $progressBar.setAttribute("value", 0);
            audioListeners();
        } 

    };

    const playPreviousSong = () => {
        if (nextSong > 0) {
            nextSong--;
            if (nextSong === 0) $previous.classList.add("last");
            $next.classList.remove("last");
            const { img, name, artist, url } = songs[nextSong];
            $artBoxIMG.src = img;
            $(".name-song").innerHTML = name;
            $(".artist-song").innerHTML = artist;
            actualAudio.pause();
            actualAudio = new Audio(url);
            togglePlayPause();
            $progressBar.setAttribute("value", 0);
            audioListeners();
        } 
    };

    const audioListeners = () => {
        actualAudio.addEventListener("loadedmetadata", () => {
            const { duration } = actualAudio,
                totalSeconds = Math.floor(duration),
                minutes = Math.floor(totalSeconds / 60),
                seconds = totalSeconds % 60,
                formattedTime = `${String(minutes).padStart(2, "0")}: ${String(seconds).padStart(2, "0")}`;
        
            $totalTime.innerHTML = formattedTime;
        });
            
        actualAudio.addEventListener("play", () => {
            $play.classList.add("hide");
            $pause.classList.remove("hide");
            $artBoxIMG.classList.add("active");
            $equalizer.classList.add("active");
            $equalizer.classList.remove("hide");
            $equalizer.classList.remove("pause");
            progressBarCurrentTime();
            getCurrentTime();
            setIntervalTime = setInterval(() => {
                getCurrentTime();
                progressBarCurrentTime();
            }, 1000);
        });
        
        actualAudio.addEventListener("pause", () => {
            $pause.classList.add("hide");
            $play.classList.remove("hide");
            $artBoxIMG.classList.remove("active");
            $equalizer.classList.remove("active");
            $equalizer.classList.add("pause");
            clearInterval(progressBarCT);
            clearInterval(setIntervalTime);
        });
        
        actualAudio.addEventListener("ended", () => {
            clearInterval(progressBarCT);
            clearInterval(setIntervalTime);
            if ($next.classList.contains("last")) {
                $pause.classList.add("hide");
                $play.classList.remove("hide");
                $progressBar.setAttribute("max", 0);
                $progressBar.setAttribute("value", 0);
            } else {
                playNextSong();
            }
        });
    }

    audioListeners();

    d.addEventListener("click", e => {

        if (e.target.matches(".playlist li")) {
            
            nextSong = Number(e.target.dataset.id);
            if (nextSong === songsLength - 1) {
                $next.classList.add("last");
                $previous.classList.remove("last");
            } else if (nextSong === 0) {
                $previous.classList.add("last");
                $next.classList.remove("last");
            } else {
                $previous.classList.remove("last");
                $next.classList.remove("last");
            }
                        
            const { img, name, artist, url } = songs[nextSong];
            $artBoxIMG.src = img;
            $(".name-song").innerHTML = name;
            $(".artist-song").innerHTML = artist;
            actualAudio.pause();
            actualAudio = new Audio(url);
            togglePlayPause();
            $play.classList.add("hide");
            $pause.classList.remove("hide");
            $equalizer.classList.add("active");
            $equalizer.classList.remove("hide");
            setInterval(() => progressBarCurrentTime(), 1000);
            audioListeners();
        };

    })

    $play.addEventListener("click", togglePlayPause);
    $pause.addEventListener("click", togglePlayPause);
    $next.addEventListener("click", playNextSong);
    $previous.addEventListener("click", playPreviousSong);
    
};

const getCurrentTime = () => {
    const { currentTime } = actualAudio,
        totalSeconds = Math.floor(currentTime),
        minutes = Math.floor(totalSeconds / 60),
        seconds = totalSeconds % 60,
        formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    $actualTime.innerHTML = formattedTime;
};

const progressBarCurrentTime = () => {
    if ($progressBar.value === $progressBar.max) {
        clearInterval(progressBarCT);
        $progressBar.setAttribute("max", 0);
        $progressBar.setAttribute("value", 0);
        $next.classList.contains("last") ? ($pause.classList.add("hide"), $play.classList.remove("hide")) : playNextSong();
    } else {
        $progressBar.setAttribute("max", actualAudio.duration);
        $progressBar.setAttribute("value", actualAudio.currentTime);
    }
};

const togglePlayPause = () => actualAudio.paused ? actualAudio.play() : actualAudio.pause();

d.addEventListener("click", e => {

    if (e.target.matches("progress.progress-bar-mp3")) {
        if (actualAudio.currentTime > 0) {
            clearInterval(progressBarCT);
            const x = e.pageX - $progressBar.offsetLeft;
            let clickedValue = x * $progressBar.max / $progressBar.offsetWidth;
            clickedValue = clickedValue.toFixed(0);
            $progressBar.value = clickedValue;
            actualAudio.currentTime = clickedValue;
            getCurrentTime();
        }
    }

    if(e.target.matches(".playlist_add") || e.target.matches(".playlist_add use") ){
        let $playlist = d.querySelector(".playlist"),
            $playlistDisplay =  getComputedStyle($playlist).getPropertyValue("visibility");
        $playlistDisplay === 'hidden' ? $playlist.classList.add("open") : $playlist.classList.remove("open");     
    }

})

d.addEventListener("DOMContentLoaded", e => loadSongs(), fetchSrpiteSVG());