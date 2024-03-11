let numeroSecreto = 9;

let chute = prompt('Escolha um número de 0 a 10');
while(chute == ''){

    if(chute == numeroSecreto){
        alert('Parabéns, você acertou');
    }else{
        alert('Que triste, FDS');
    }   
}