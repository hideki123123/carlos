let numeroSecreto = Math.random() * 10;
console.log(numeroSecreto);
let chuteV = 0;
let chute = '';

while(chute == ''){
    chute = prompt('Escolha um número de 0 a 10');
}
while(!chuteV || chute != ''){
    if(chute == numeroSecreto){
        alert('Parabéns, você acertou');
        chute = 1;
    }else{
        alert('Que triste, FDS');
    }   
}