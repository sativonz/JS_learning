const d = document;

export default function countdown(id, limitDate, finalMessage){
    const $countdownElement = d.getElementById(id),
          countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            days = Math.floor(limitTime / (1000*60*60*24)),
            hours = ("0" + Math.floor((limitTime % (1000*60*60*24)) / (1000*60*60))).slice(-2),
            minutes = ("0" + Math.floor((limitTime % (1000*60*60)) / (1000*60))).slice(-2),
            seconds = ("0" + Math.floor((limitTime % (1000*60)) / 1000)).slice(-2);
        
        $countdownElement.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutes ${seconds} segundos, para celebrar tu cumpleaños</h3>`

        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdownElement.innerHTML = finalMessage;
        }

    }, 1000)
}