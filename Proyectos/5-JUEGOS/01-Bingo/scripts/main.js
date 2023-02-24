const d = document,
    $cpuNumbers = d.querySelector(".cpu-numbers"),
    $playerNumbers = d.querySelector(".player-numbers"),
    $getNumber = d.querySelector(".get-number"),
    $drumNumbers = d.getElementById("drum-numbers");

let playerNumber = [],
    cpuNumber = [],
    drumNumber = [],
    playerWin = 0,
    cpuWin = 0,
    playerNumbersChilds = $playerNumbers.childNodes,
    cpuNumbersChilds = $cpuNumbers.childNodes,
    count = 200,
    defaults = {
      origin: { y: 0.7 }
    };
    
const fire = (particleRatio, opts) => {
    confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
    }));
}

const getRandomInt = (min, max) => {return Math.floor(Math.random() * (max - min + 1)) + min}

d.addEventListener("DOMContentLoaded", e =>{  
    while(playerNumber.length < 15) {
        let randomIntPlayer = getRandomInt(1, 90);
        if(playerNumber.indexOf(randomIntPlayer) == -1){
            playerNumber.push(randomIntPlayer);
            $playerNumbers.innerHTML += `<div class="player-number">${randomIntPlayer}</div>`;
        }
    }

    while(cpuNumber.length < 15) {
        let randomIntCpu = getRandomInt(1, 90);
        if(cpuNumber.indexOf(randomIntCpu) == -1){
            cpuNumber.push(randomIntCpu);
            $cpuNumbers.innerHTML += `<div class="cpu-number">${randomIntCpu}</div>`;
        }
    }
})

$getNumber.addEventListener("click", e => getNumber())

const getNumber = () => {
    if (drumNumber.length < 90) {
        let randomDrum = getRandomInt(1, 90);
        if(drumNumber.indexOf(randomDrum) == -1){
            drumNumber.push(randomDrum)
            $drumNumbers.innerHTML += `<div class="drum-number">${randomDrum}</div>`;
            checkSimilar(randomDrum);
        } else getNumber();
    }
}

const checkSimilar = (randomDrum) => {
    playerNumber.forEach(number => {if(number == randomDrum) checkDrumPlayer(number)});
    cpuNumber.forEach(number => {if(number == randomDrum) checkDrumCpu(number)});
}

const checkDrumPlayer = (number) => {
    for (let i = 0; i < 15; i++) {
        if (playerNumbersChilds[i].innerHTML == number) {
            playerNumbersChilds[i].classList.add("geted")
            playerWin++
            if (playerWin == 15) {
                d.querySelector(".player-carton").classList.add("win");
                $getNumber.remove();
                winConfetti();
            }
        }
    }
}

const checkDrumCpu = (number) => {
    for (let i = 0; i < 15; i++) {
        if (cpuNumbersChilds[i].innerHTML == number) {
            cpuNumbersChilds[i].classList.add("geted");
            cpuWin++
            if (cpuWin == 15) {
                d.querySelector(".cpu-carton").classList.add("win");
                $getNumber.remove();
                winConfetti();
            }
        }
    }

}

const winConfetti = () => {
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
}