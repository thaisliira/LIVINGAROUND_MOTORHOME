// BANCO DE DADOS ESTATICO JS
const destinosSuportados = {
    'Brasil': ['Rio de Janeiro','Recife'],
    'Portugal': ['Porto', 'Lisboa'],
};

// NOVO: Informações Detalhadas para cada destino (Chave: "Cidade, País")
const informacoesLocais = {
    'Rio de Janeiro, Brasil': {
        nome: 'Living Around - RJ',
        endereco: 'Rua da Alegria, 666 4000-789 - Rio de Janeiro',
        email: 'livingaround_rio@living.com'
    },
    'Recife, Brasil': {
        nome: 'Living Around - PE',
        endereco: 'Rua da Alegria, 666 4000-789 - Recife',
        email: 'livingaround_recife@living.com'
    },
    'Porto, Portugal': {
        nome: 'Living Around - OPO',
        endereco: 'Rua da Alegria, 666 4000-789 - Porto',
        email: 'livingaround_porto@living.com'
    },
    'Lisboa, Portugal': {
        nome: 'Living Around - LIS',
        endereco: 'Rua da Alegria, 666 4000-789 - Lisboa',
        email: 'livingaround_porto@living.com'
    },
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

// PARA CARREGAR MAPA NO IFRAME E EXIBIR INFORMAÇÕES
function abrirMapa() {
    const selectPais = document.getElementById('select-pais');
    const selectCidade = document.getElementById('select-cidade');
    const mapaFrame = document.getElementById('mapa-frame');
    
    // NOVAS REFERÊNCIAS PARA AS INFORMAÇÕES
    const mapaDiv = document.getElementById('map');
    const infoContatoDiv = document.getElementById('info-contato');
    const infoNomeSpan = document.getElementById('info-nome');
    const infoEnderecoSpan = document.getElementById('info-endereco');
    const infoEmailSpan = document.getElementById('info-email');
    
    const pais = selectPais.value;
    const cidade = selectCidade.value;
    const termoCompleto = `${cidade}, ${pais}`;

    // 1. VERIFICA SE O USUARIO REALMENTE ESCOLHEU UM PAIS E UMA CIDADE
    if (!pais || !cidade) {
        alert("Por favor, selecione um País e uma Cidade válidos.");
        // Oculta mapa e informações se a seleção for inválida
        mapaFrame.src = "about:blank"; 
        mapaDiv.style.display = 'none'; 
        infoContatoDiv.style.display = 'none';
        return; 
    }
    
    // 2. PESQUISA DESTINO E EXIBE NO MAPA 
    const termoPesquisa = encodeURIComponent(termoCompleto);
    // URL DE INCORPORAÇÃO CORRETA (ASSUMINDO 'http://maps.google.com/maps?q=...' para embed)
    const urlFinal = `https://maps.google.com/maps?q=${termoPesquisa}&output=embed`; 

    mapaFrame.src = urlFinal;

    // 3. TORNA A DIV DO MAPA VISÍVEL
    mapaDiv.style.display = 'block';

    // 4. PREENCHE E EXIBE AS INFORMAÇÕES DE CONTATO
    const info = informacoesLocais[termoCompleto];

    if (info) {
        infoNomeSpan.textContent = info.nome;
        infoEnderecoSpan.textContent = info.endereco;
        infoEmailSpan.textContent = info.email;
        infoContatoDiv.style.display = 'flex'; // Torna o bloco de informações visível
    } else {
        // Fallback caso o destino esteja na lista mas não nos detalhes (improável, mas seguro)
        infoNomeSpan.textContent = "Informação não disponível";
        infoEnderecoSpan.textContent = "N/A";
        infoEmailSpan.textContent = "N/A";
        infoContatoDiv.style.display = 'flex'; 
    }
}


// FUNCAO PARA QUE O MAPA E O BLOCO DE INFO NAO APAREÇAM LOGO QUE CARREGUE A PAGINA
document.addEventListener('DOMContentLoaded', () => {
    // Apenas a chamada inicial de 'atualizarCidades()' para limpar e configurar o seletor.
    // Ocultar os elementos é feito no CSS.
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