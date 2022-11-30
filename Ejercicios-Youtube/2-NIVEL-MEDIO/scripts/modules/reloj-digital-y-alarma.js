const d = document;
const btnInitClock = d.querySelector(".init-clock"),
      btnStopClock = d.querySelector(".stop-clock"),
      btnInitAlarm = d.querySelector(".init-alarm"),
      btnStopAlarm = d.querySelector(".stop-alarm"),
      formClock = d.querySelector(".form-clock"),
      audio = d.querySelector(".box-audio audio");

export default function relojDigitalAlarma(){
    
    let momentoActual = new Date(),
        hora = momentoActual.getHours(),
        minuto = momentoActual.getMinutes(),
        segundo = momentoActual.getSeconds(),
        str_segundo = new String (segundo),
        str_minuto = new String (minuto),
        str_hora = new String (hora);

        if (str_segundo.length == 1)
           segundo = "0" + segundo
    
        if (str_minuto.length == 1)
           minuto = "0" + minuto
    
        if (str_hora.length == 1)
           hora = "0" + hora

    let horaImprimible = hora + " : " + minuto + " : " + segundo;
    d.form_reloj.reloj.value = horaImprimible
    
    d.addEventListener("click", (e)=>{

        if(e.target.matches(".init-clock")){
                formClock.style.display = "block";
                btnInitClock.disabled = true;
                btnStopClock.disabled = false;
        } 

        if(e.target.matches(".stop-clock")){
                formClock.style.display = "none";
                btnInitClock.disabled = false;
                btnStopClock.disabled = true;
        } 

        if(e.target.matches(".init-alarm")){
            audio.play();
            btnInitAlarm.disabled = true;
            btnStopAlarm.disabled = false;
        } 

        if(e.target.matches(".stop-alarm")){
            audio.pause();
            audio.currentTime = 0;
            btnInitAlarm.disabled = false;
            btnStopAlarm.disabled = true;
        } 

    })
    

}