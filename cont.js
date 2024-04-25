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
const contadores = document.querySelectorAll('.contador');
let tempoAtual = new Date();
let tempoObjetivo1 = new Date ('2024-04-19T00:00:00');
let tempoObjetivo2 = new Date ('2024-05-19T00:00:00');
let tempoObjetivo3 = new Date ('2024-06-19T00:00:00');
let tempoObjetivo4 = new Date ('2024-07-19T00:00:00');

let tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

for(let i =0; i< contadores.lengtn; i++){
    contadores[i].textContent = CalculaTempo(tempos[i]);
}

function CalculaTempo(tempoObjetivo){
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

segundos %= 60;
minutos %= 60;
horas %= 24;

return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
}