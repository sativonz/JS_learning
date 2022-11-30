   /* **********     Curso JavaScript: 27. Objeto Date - #jonmircha     ********** */
    console.log("Date(): " + Date());
    let fecha = new Date();
    console.log("new Date(): " + fecha);
    
    //día del mes
    console.log("Dia del mes: " + fecha.getDate());

    //día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
    console.log("Dia de la semana: " + fecha.getDay());

    //mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
    console.log("Dia del mes: " + fecha.getMonth());

    console.log(fecha.getFullYear());
    console.log(fecha.getHours());
    console.log(fecha.getMinutes());
    console.log(fecha.getSeconds());
    console.log(fecha.getMilliseconds());
    console.log(fecha.toString());
    console.log(fecha.toDateString());
    console.log(fecha.toLocaleString());
    console.log(fecha.toLocaleDateString());

    console.log('Hora reloj');
    console.log(fecha.toLocaleTimeString());

    console.log(fecha.getTimezoneOffset());
    console.log(fecha.getUTCDate());
    console.log(fecha.getUTCHours());
    console.log("Segundos pasados desde el 1 de Enero de 1970" + Date.now());
    let cumpleJon = new Date(1984, 4, 23);
    console.log(cumpleJon); 


//Creamos intervalo para el reloj

setInterval(() => {
    let fechaReloj = new Date();
    document.querySelector("#reloj").innerHTML = fechaReloj.toLocaleTimeString()
    }, 1000);
    
