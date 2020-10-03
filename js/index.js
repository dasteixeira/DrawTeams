var timeA = [];
var timeB = [];
var listaJogadores = [];
var nomesA = [];
var nomesB = [];
let acharValor = (valor, lista) => lista.indexOf(valor);
var ativo = false;

// adicona o resultado na página
function resultadoNumeros() {

    let sorteioTime = new SorteioTime();

    let localTimeA = document.querySelector('#caixa__time-a')
    let timeAtagP = document.createElement('p');
    timeAtagP.classList.add('listaA');
    localTimeA.appendChild(timeAtagP);
    timeAtagP.textContent = sorteioTime.equipeA();

    let localTimeB = document.querySelector('#caixa__time-b')
    let timeBtagP = document.createElement('p');
    timeBtagP.classList.add('listaB');
    localTimeB.appendChild(timeBtagP);
    timeBtagP.textContent = sorteioTime.equipeB();

    console.log('Time A:', timeA);
    console.log('Time B:', timeB);

    ativo = true;
}

//pegando todoas os valores dos inputs
function pegarInputs() {
    let contador = 1;
    for (let i = 0; i <= 9; i++) {
        let identificador = '#valor' + contador;
        let nome = document.querySelector(identificador)
        listaJogadores[i] = nome.value;
        contador++;
    }

}

// carregando os nomes com o sorteio dos numeros
function carregandoNomes() {
    pegarInputs();
    let sorteioTime = new SorteioTime();
    sorteioTime.equipeA();
    sorteioTime.equipeB();
    for (let i = 0; i <= 4; i++) {
        nomesA.push(listaJogadores[timeA[i] - 1]);
    }

    for (let i = 0; i <= 4; i++) {
        nomesB.push(listaJogadores[timeB[i] - 1]);
    }
}

function resultadoNomes() {
    carregandoNomes();

    let localTimeA = document.querySelector('#caixa__time-a');
    let caixaA = document.createElement('div');
    caixaA.id = 'time__a';
    localTimeA.appendChild(caixaA);

    for (let i = 0; i <= 4; i++) {
        let tagJogador = document.createElement('p');
        tagJogador.classList.add('listaA');
        caixaA.appendChild(tagJogador);
        tagJogador.textContent = nomesA[i];
    }

    let localTimeB = document.querySelector('#caixa__time-b');
    let caixaB = document.createElement('div');
    caixaB.id = 'time__b';
    localTimeB.appendChild(caixaB);

    for (let i = 0; i <= 4; i++) {
        let tagJogador = document.createElement('p');
        tagJogador.classList.add('listaB');
        caixaB.appendChild(tagJogador);
        tagJogador.textContent = nomesB[i];
    }

    ativo = true;
}

// verificar se os campos dos inputs estão vazios
function camposVazios() {
    let total = 0;
    let contador = 1;
    for (let i = 0; i <= 9; i++) {
        let identificador = '#valor' + contador;
        let nome = document.querySelector(identificador)
        if(nome.value==""){
            total++;
        }
        contador++;
    }

    if (total > 0)
        return true;
    else{
        return false;
    }
}

//limpa os dados das inputs
function limparDados() {
    var contador = 1;
    for (let i = 0; i <= 9; i++) {
        let identificador = '#valor' + contador;
        let entrada = document.querySelector(identificador);
        entrada.value = '';
        contador++;
    }
}