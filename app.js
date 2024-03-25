function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value); 

    let quantidadeLimite = ate + de + 1;
                                                                           
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || de == ate || de > ate || quantidadeLimite < quantidade) {
        alert('Verifique os dados e tente novamente')
    } else {
        let numero;
        let numerosSorteados = [];
    
        for (let i = 0; i < quantidade; i++) {
            numero = gerarNumeroAleatorio(de, ate)
            while (numerosSorteados.includes(numero)) {
                numero = gerarNumeroAleatorio(de, ate)
            }
            numerosSorteados.push(numero);
        }
        mostrarResultado(numerosSorteados)
        alterarEstadoBotaoReiniciar('habilitado');
    }
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function mostrarResultado(numeros) {
    textoResultado = document.getElementById('resultado');
    textoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeros}</label>`;
}

function alterarEstadoBotaoReiniciar(estado) {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (estado == 'habilitado') {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    } 
}

function reiniciar() {
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'

    alterarEstadoBotaoReiniciar('desabilitado');
}
