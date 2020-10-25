import Countdown from './modules/countdown.js';

const diasProNatal = new Countdown('24 December 2020 23:59:59 GMT-0300');


const diasHtml = document.querySelector('.diasNumero');
const horasHtml = document.querySelector('.horasNumero');
const minutosHtml = document.querySelector('.minutosNumero');
const segundosHtml = document.querySelector('.segundosNumero');

setInterval(() => {
    diasHtml.innerText = diasProNatal.total.days;
    horasHtml.innerText = diasProNatal.total.hours;
    const attMinutes =  minutosHtml.innerText = diasProNatal.total.minutes;
    const attSeconds = segundosHtml.innerText = diasProNatal.total.seconds;
    

}, 1000);







