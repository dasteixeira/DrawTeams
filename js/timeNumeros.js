var botao = document.querySelector('#botaoSorteio');
var ativo= false;

function resultadoNumeros(){ // adicona o resultado no html
    var localTimeA = document.querySelector('.tituloA')
    var tagP = document.createElement('p');
    tagP.classList.add('listaA');
    localTimeA.appendChild(tagP);
    tagP.textContent = timeA;

    var localTimeB = document.querySelector('.tituloB')
    var tagP = document.createElement('p');
    tagP.classList.add('listaB');
    localTimeB.appendChild(tagP);
    tagP.textContent = timeB;

    ativo=true;
}

document.querySelector('#botaoRemover').onclick = function(){ // remove a tag com os times numericos dos times;
    limparDados();
    let listaA = document.querySelector('.listaA')
    let listaB = document.querySelector('.listaB')

    listaA.remove();    
    listaB.remove();
    window.location.reload(); 
}

botao.addEventListener('click', function () {// adicona e alerta que sorteio foi feito 
    if(!ativo){
        resultadoNumeros();
    }else if(ativo){
        alert('Sorteio já realizado!');
    }
});
