const B = document.querySelectorAll('.objetivos');
console.log(B.length);

for(let i = 0; i < B.length; i++){
    console.log(i);
    B[i].onclick = function(){
     for(let j = 0; j < B.length; j++){
        B[j].classList.remove('select');
     }
    B[i].classList.add('select');
    }
}