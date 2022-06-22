import Countdown from "./modules/countdown.js";

const data = new Date();

const anoAtual = data.getFullYear();
const diaAtual = data.getDate();
const mesAtual = data.getMonth();

let intervalo;
let attYear = anoAtual;

let diasProNatal = new Countdown(`24 December ${attYear} 23:59:59 GMT-0300`);

const diasHtml = document.querySelector(".diasNumero");
const horasHtml = document.querySelector(".horasNumero");
const minutosHtml = document.querySelector(".minutosNumero");
const segundosHtml = document.querySelector(".segundosNumero");

const initIntervalo = () => {
  intervalo = setInterval(() => {
    if (mesAtual == 11 && diaAtual >= 25) {
      diasProNatal = new Countdown(
        `24 December ${attYear + 1} 23:59:59 GMT-0300`
      );
    }
    diasHtml.innerText = diasProNatal.total.days;
    horasHtml.innerText = diasProNatal.total.hours;
    minutosHtml.innerText = diasProNatal.total.minutes;
    segundosHtml.innerText = diasProNatal.total.seconds;
  }, 1000);
};

initIntervalo();
