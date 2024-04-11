const B = document.querySelectorAll('.objetivos');
console.log(B.length);

for(let i = 0; i < B.length; i++){
    console.log(i);
    B[i].classList.add('select');
    //B[0].classList.remove('select');
}