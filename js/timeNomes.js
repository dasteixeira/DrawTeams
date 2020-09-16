var botaoNomes = document.querySelector('#botaoNomes');   

// botao para pegar os valores do inputs e sortear em dois times
botaoNomes.addEventListener('click', function () {
    pegarInputs();
    carregandoNomes();
    camposVazios();
    if((!ativo)&&(vazio==1)){
        resultadoNomes();
    }else if(ativo)
        alert('PRESSIONE "LIMPAR" PARA UM NOVO SORTEIO');
    else if(vazio==0)
        alert('DIGITE OS NOMES!')
});

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