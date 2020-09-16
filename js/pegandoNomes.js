var listaJogadores = [];
var nomesA = [];
var nomesB = [];

function pegarInputs() { //pegando todoas os valores dos inputs
    var contador = 1;
    for (let i = 0; i <= 9; i++) {
        let identificador = '#valor' + contador;
        let nome = document.querySelector(identificador)
        listaJogadores[i] = nome.value;
        contador++;
    }
    
}

function carregandoNomes(){ /// carregando os nomes com o sorteio dos numeros
    for(let i=0; i<=4; i++){
        nomesA.push(listaJogadores[timeA[i]-1]);
    }
    
    for(let i=0; i<=4; i++){
        nomesB.push(listaJogadores[timeB[i]-1]);
    } 
}

var vazio = 0;
function camposVazios(){ /// verificar se os campos dos inputs estão vazios
    let campoA = acharValor('',nomesA)
    let campoB = acharValor('',nomesB)

    if((campoA==0)&&(campoB==0))
        vazio = 0
    else
        vazio = 1;
    
}

function resultadoNomes (){
    for(let i = 0; i<=4;i++){
        let localTimeA = document.querySelector('.tituloA')
        let tagP = document.createElement('p');
        tagP.classList.add('listaA');
        localTimeA.appendChild(tagP);
        tagP.textContent = nomesA[i];
    }

    for(let i = 0; i<=4;i++){
        let localTimeB = document.querySelector('.tituloB')
        let tagP = document.createElement('p');
        tagP.classList.add('listaB');
        localTimeB.appendChild(tagP);
        tagP.textContent = nomesB[i];
    }

    ativo=true;
}