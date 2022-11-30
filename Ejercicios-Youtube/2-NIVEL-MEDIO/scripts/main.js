import hamburgerMenu from './modules/hamburger_menu.js';
import relojDigitalAlarma from './modules/reloj-digital-y-alarma.js';

const d = document;

d.addEventListener('DOMContentLoaded', () =>{
    hamburgerMenu();
    setInterval(relojDigitalAlarma,1000);
})
