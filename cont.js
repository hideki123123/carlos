const B = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-cont');



for(let i = 0; i < B.length; i++){
    B[i].onclick = function(){
    for(let j = 0; j < B.length; j++){
        B[j].classList.remove('select');
        textos[j].classList.remove('select2');
    }
    B[i].classList.add('select');
    textos[i].classList.add('select2');
    }
}
const contadores = document.querySelectorAll('contador');
let tempoAtual = new Date();
let tempoObjetivo1 = nem Date ('2024-04-19T00:00:00');
let tempoFinal = tempoObjetivo1 - tempoAtual;
let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

contadores[0].textContent = dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";