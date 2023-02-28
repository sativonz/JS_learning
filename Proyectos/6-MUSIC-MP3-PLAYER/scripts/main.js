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
    progressBarCT;

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

    let actualAudio = new Audio(url),
        setIntervalCurrent;

    const songsLength = data.songs.length;

    $artBoxIMG.src = img;
    $controlsBox.querySelector(".name-song").innerHTML = name;
    $controlsBox.querySelector(".artist-song").innerHTML = artist;

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
        $totalTime.innerHTML = totalTime;
    }

    async function playMusic() {
        getTotalTime();
        setIntervalCurrent = setInterval(getCurrentTime, 500);
        if ($equalizer.classList.contains("pause")) $equalizer.classList.remove("pause");
        await actualAudio.play();
        $actualTime.classList.remove("hide");
        
        
        $play.classList.add("hide");
        $equalizer.classList.remove("hide");
        $pause.classList.remove("hide");
        $actualTime.classList.remove("hide");
        

    }

    const playNextSong = () =>{
        if ($previous.classList.contains('last')) $previous.classList.remove('last');
            if (nextSong + 1 < songsLength) {
                $actualTime.innerHTML = "";
                $totalTime.innerHTML = "";
                $actualTime.classList.add("hide")
                $equalizer.classList.add("pause");
                clearInterval(setIntervalCurrent)
                
                
                actualAudio.pause();
                actualAudio.currentTime = 0;
                nextSong++;
                actualAudio = new Audio(data.songs[nextSong].url);
                actualAudio.addEventListener("canplaythrough", () => { if ($play.classList.contains('hide')){
                    setIntervalCurrent = setInterval(getCurrentTime, 500);
                    playMusic();
                    $actualTime.classList.remove("hide")
                }}) 
                $artBoxIMG.src = data.songs[nextSong].img;
                $controlsBox.querySelector(".name-song").innerHTML = data.songs[nextSong].name;
                $controlsBox.querySelector(".artist-song").innerHTML = data.songs[nextSong].artist;
                if (nextSong == songsLength - 1) $next.classList.add("last");
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
            clearInterval(setIntervalCurrent)
        }

        if (e.target.matches(".next")) playNextSong();

        if (e.target.matches(".previous")) {
            if (nextSong > 0) {
                $actualTime.innerHTML = "";
                $totalTime.innerHTML = "";
                $actualTime.classList.add("hide")
                $equalizer.classList.add("pause");
                if ($next.classList.contains('last')) $next.classList.remove('last');
                clearInterval(setIntervalCurrent)
                
                actualAudio.pause();
                actualAudio.currentTime = 0;
                nextSong--;
                actualAudio = new Audio(data.songs[nextSong].url);
                actualAudio.addEventListener("canplaythrough", () => { if ($play.classList.contains('hide')) {
                    setIntervalCurrent = setInterval(getCurrentTime, 500);
                    playMusic();
                    $actualTime.classList.remove("hide")
                }});
                $artBoxIMG.src = data.songs[nextSong].img;
                $controlsBox.querySelector(".name-song").innerHTML = data.songs[nextSong].name;
                $controlsBox.querySelector(".artist-song").innerHTML = data.songs[nextSong].artist;
                if (nextSong == 0) $previous.classList.add("last");
            }
        }
    })
}

d.addEventListener("DOMContentLoaded", e => loadSongs());