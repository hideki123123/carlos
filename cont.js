const B = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-cont');






for(let i = 0; i < B.length; i++){
    console.log(i);
    B[i].onclick = function(){

     for(let j = 0; j < B.length; j++){
        B[j].classList.remove('select');
        textos[j].classList.remove('select2');
     }

    B[i].classList.add('select');
    textos[i].classList.add('select2');
    }
}