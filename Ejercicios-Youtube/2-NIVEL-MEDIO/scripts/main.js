import hamburgerMenu from './modules/hamburger_menu.js';
import {alarmaSonido,relojDigital} from './modules/reloj_digital_y_alarma.js';
import {moveBall, shortcuts} from './modules/eventos_teclado.js';
import countdown from './modules/countdown.js';
import goToTop from './modules/go_to_top.js';
import { darkMode, activeDarkTheme } from "./modules/dark_mode.js";
import responsiveMedia from './modules/objeto_responsive.js';
import responsiveTester from './modules/responsive_tester.js';
import { userAgent } from './modules/deteccion_dispositivos.js';
import { statusNetwork } from "./modules/status_network.js";
import webcam from './modules/webcam.js';
import getGeolocation from './modules/geolocation.js';

const d = document;

d.addEventListener('DOMContentLoaded', () =>{
    hamburgerMenu();
    relojDigital();
    alarmaSonido();
    countdown("countdown", "Oct 10, 2023 00:00:00", "Feliz cumpleaños!" );
    goToTop();
    darkMode(".dark-btn", "dark-theme");
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px)", 
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=94" target="_blank" rel="noopener">Ver video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
    responsiveMedia(
        "gmaps", 
        "(min-width: 1024px)", 
        `<a href="https://www.google.com/maps/place/El+Micalet/@39.4753233,-0.37782,17z/data=!3m1!4b1!4m5!3m4!1s0xd604f4d5f197de5:0xf363e338838b3485!8m2!3d39.4753233!4d-0.3756313" target="_blank" rel="noopener">Ver mapa</a>`, 
        `<iframe sr c="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.7346345316687!2d-0.3778199846324528!3d39.47532327948563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4d5f197de5%3A0xf363e338838b3485!2sEl%20Micalet!5e0!3m2!1ses!2ses!4v1670227490256!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        );
    responsiveTester("responsive-tester");
    userAgent("#user-device");
    webcam("webcam");
    getGeolocation("geolocation");
})

d.addEventListener("keydown", (e)=> {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

activeDarkTheme({btn: ".dark-btn",classDark: "dark-theme"});

statusNetwork();