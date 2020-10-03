const botaoSorteio = document.querySelector('#botaoSorteio');
const botaoRemover = document.querySelector('#botaoRemover');
const botaoNomes = document.querySelector('#botaoNomes');

// adicona e alerta que sorteio foi feito
botaoSorteio.addEventListener('click', () => {
    if (!ativo) {
        resultadoNumeros();
    } else if (ativo) {
        alert('SORTEIO JÁ REALIZADO');
    }
});

// remove os times 
botaoRemover.addEventListener('click', () => {

    ativo = false;
    nomesA.length = 0;
    nomesB.length = 0;
    
    let listaA = document.querySelector('.listaA');
    let listaB = document.querySelector('.listaB');
    let caixaA = document.querySelector('#time__a');
    let caixaB = document.querySelector('#time__b');

    if((caixaA === null && caixaB == null ) && (listaA == null && listaB == null)){    
        
        alert("CAMPO RESULTADO ESTÁ LIMPO");
    
    }else if (listaA.textContent == timeA && listaB.textContent == timeB) {
            listaA.remove();
            listaB.remove();
    }else{
        caixaA.remove();
        caixaB.remove();
    }
});

// botao para pegar os valores do inputs e sortear em dois times
botaoNomes.addEventListener('click', () => {

    let campos = camposVazios();

    if (!ativo && !campos){
        resultadoNomes();
        console.log("Nomes A:", nomesA);
        console.log("Nomes B:", nomesB);
    } else if(ativo){
        alert('PRESSIONE "LIMPAR" PARA UM NOVO SORTEIO');
    }else if (campos){
        alert('DIGITE OS NOMES!')
    }
});

