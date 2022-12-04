import hamburgerMenu from './modules/hamburger_menu.js';
import {alarmaSonido,relojDigital} from './modules/reloj-digital-y-alarma.js';
import {moveBall, shortcuts} from './modules/eventos-teclado.js';
import countdown from './modules/countdown.js';
import goToTop from './modules/go-to-top.js';
import { darkMode, activeDarkTheme } from "./modules/dark-mode.js";
import responsiveMedia from './modules/objeto-responsive.js';

const d = document;

d.addEventListener('DOMContentLoaded', () =>{
    hamburgerMenu();
    relojDigital();
    alarmaSonido();
    countdown("countdown", "Oct 10, 2023 00:00:00", "Feliz cumpleaños!" );
    goToTop();
    darkMode(".dark-btn", "dark-theme");
    responsiveMedia("youtube", "(min-width: 1024px)", "Contenido móvil", "Contenido desktop")
    responsiveMedia("gmaps", "(min-width: 1024px)", "Contenido móvil", "Contenido desktop")
})

d.addEventListener("keydown", (e)=> {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

activeDarkTheme({btn: ".dark-btn",classDark: "dark-theme"});