var botaoSorteio = document.querySelector('#botaoSorteio');
var botaoRemover = document.querySelector('#botaoRemover');
var ativo= false;

// adicona o resultado no html
function resultadoNumeros(){

    let localTimeA = document.querySelector('#caixa__time-a')
    let timeAtagP = document.createElement('p');
    timeAtagP.classList.add('listaA');
    localTimeA.appendChild(timeAtagP);
    timeAtagP.textContent = timeA;

    let localTimeB = document.querySelector('#caixa__time-b')
    let timeBtagP = document.createElement('p');
    timeBtagP.classList.add('listaB');
    localTimeB.appendChild(timeBtagP);
    timeBtagP.textContent = timeB;

    console.log('Time A:',timeA);
    console.log('Time B:',timeB);

    ativo=true;
}

// adicona e alerta que sorteio foi feito
botaoSorteio.addEventListener('click', () => { 
    if(!ativo){
        resultadoNumeros();
    }else if(ativo){
        alert('Sorteio já realizado!');
    }
});

// remove os times 
botaoRemover.addEventListener('click', () => { 
        limparDados();
        let listaA = document.querySelector('.listaA')
        let listaB = document.querySelector('.listaB')

        listaA.remove();    
        listaB.remove();
        window.location.reload(); 
    }
);