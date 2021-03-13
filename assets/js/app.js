import Countdown from './modules/countdown.js';

let attYear = 2021;

let diasInner = document.querySelector('.diasNumero').innerText;
let horasInner = document.querySelector('.diasNumero').innerText;
let minutosInner = document.querySelector('.diasNumero').innerText;
let segundosInner = document.querySelector('.diasNumero').innerText;

if(diasInner, horasInner, minutosInner == 0 && segundosInner == 1) {
    attYear++;
}


const diasProNatal = new Countdown(`24 December ${attYear} 23:59:59 GMT-0300`);


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







