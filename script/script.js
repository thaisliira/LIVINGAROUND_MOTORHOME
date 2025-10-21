// BANCO DE DADOS ESTATICO JS
const destinosSuportados = {
    'Brasil': ['Rio de Janeiro','Recife'],
    'Portugal': ['Porto', 'Lisboa'],
};

// FUNCAO PARA PREENCHER LISTA DE DESTINOS
function atualizarCidades() {
    const selectPais = document.getElementById('select-pais');
    const selectCidade = document.getElementById('select-cidade');
    
    const paisSelecionado = selectPais.value;

    // LIMPA A LISTA E ADICIONA OPCAO PADRAO(PAIS/CIDADE)
    selectCidade.innerHTML = '<option selected value="">Cidade</option>'; 
    
    // Verifica se um país válido foi selecionado
    if (paisSelecionado && destinosSuportados[paisSelecionado]) {
        const cidades = destinosSuportados[paisSelecionado];

        // PREENCHE LISTA DE CIDADES
        cidades.forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade;
            option.textContent = cidade;
            selectCidade.appendChild(option);
        });
    }
}

// PARA CARREGAR MAPA NO IFRAME
function abrirMapa() {
    const selectPais = document.getElementById('select-pais');
    const selectCidade = document.getElementById('select-cidade');
    const mapaFrame = document.getElementById('mapa-frame');
    
    const pais = selectPais.value;
    const cidade = selectCidade.value;

    // VERIFICA SE O USUARIO REALMENTE ESCOLHEU UM PAIS E UMA CIDADE
    if (!pais || !cidade) {
        alert("Por favor, selecione um País e uma Cidade válidos.");
        // Limpa o mapa se a seleção for inválida
        mapaFrame.src = "about:blank"; 
        return; 
    }
    
    // PESQUISA DESTINO E EXIBE NO MAPA UTILIZANDO A PESQUISA DO GOOGLE
    const termoPesquisa = encodeURIComponent(`${cidade}, ${pais}`);

    const urlFinal = `https://maps.google.com/maps?q=${termoPesquisa}&output=embed`;

    mapaFrame.src = urlFinal;

    // ENCONTRA O ELEMENTO
    var mapaDiv = document.getElementById('map');

    // TORNA A DIV DO MAPA VISÍVEL
    mapaDiv.style.display = 'block';
}



// FUNCAO PARA QUE O MAPA NAO APAREÇA LOGO QUE CARREGUE A PAGINA
document.addEventListener('DOMContentLoaded', () => {
    atualizarCidades(); 
});


// FUNCAO PARA VALIDAR EMAIL DO FORMULARIO E ENVIAR UM ALERTA APOS PREENCHIMENTO
function validar(){

        
    var email=document.formulario.email.value;
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(String(email).toLowerCase())) {
            alert("Email Invalido.");
            return false;
        }
        alert("Obrigado pelo preechimento do formulário.")
        return true;}