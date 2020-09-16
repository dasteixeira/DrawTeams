var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var timeA = [];
var timeB = [];

function sorteio() {//sorteia o numero
    return Math.floor((Math.random() * 10) + 1);
}

function acharValor(valor, lista) {//pesquisa na lista
    return lista.indexOf(valor);
}


while (timeA.length < 5) {// carregando o time que foi sorteado
    var num = sorteio();
    var resultado = acharValor(num, timeA)
    if (resultado == -1) {
        timeA.push(num);
    }
}

//console.log('Time A:',timeA););


//localizando os índices do primeiro time
let lista = [];
for (let i = 0; i <= 4; i++) {
    lista[i] = acharValor(timeA[i], numeros)
}
//console.log('Lista index:',lista);

//time B
while (timeB.length < 5) {
    var num = sorteio();
    var resultado = acharValor(num, timeA)
    var resultado2 = acharValor(num, timeB)
    if ((resultado == -1) && (resultado2 == -1)) {
        timeB.push(num);
    }
}

//console.log('Time B:',timeB);

