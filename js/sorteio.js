var timeA = [];
var timeB = [];

//sorteio do número
let sorteio = () => Math.floor((Math.random() * 10) + 1);

//pesquisa no array do time
let acharValor = (valor, lista) => lista.indexOf(valor);


//time A
while (timeA.length < 5){    
    let numeroSorteado = sorteio();
    let controleTimeA = acharValor(numeroSorteado, timeA);

    if(controleTimeA==-1){
        timeA.push(numeroSorteado);
    }
}

//time B
while (timeB.length < 5) {
    let numeroSorteado = sorteio();
    let controleTimeA = acharValor(numeroSorteado, timeA)
    let controleTimeB = acharValor(numeroSorteado, timeB)

    if ((controleTimeA == -1) && (controleTimeB == -1)) {
        timeB.push(numeroSorteado);
    }
}

console.log('Time A:',timeA);
console.log('Time B:',timeB);

