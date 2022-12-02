import hamburgerMenu from './modules/hamburger_menu.js';
import {alarmaSonido,relojDigital} from './modules/reloj-digital-y-alarma.js';
import {moveBall, shortcuts} from './modules/eventos-teclado.js';
import countdown from './modules/countdown.js';

const d = document;

d.addEventListener('DOMContentLoaded', () =>{
    hamburgerMenu();
    relojDigital();
    alarmaSonido();
    countdown("countdown", "Oct 10, 2023 00:00:00", "Feliz cumpleaños!" )
})

d.addEventListener("keydown", (e)=> {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})
