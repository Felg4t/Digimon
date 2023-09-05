console.log(document);

const criancas = document.querySelectorAll('.crianca');
const digimons = document.querySelectorAll('.digimon');
const digivolucoes = document.querySelectorAll('.digivolucao');

criancas.forEach((crianca) => {
    crianca.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const criancaSelecionada = document.querySelector('.selecionada');
        criancaSelecionada.classList.remove('selecionada');

        crianca.classList.add('selecionada');

        const imagemGrande = document.querySelector('.imagem-grande');

        const idCrianca = crianca.attributes.id.value;
        imagemGrande.src = `./src/imagens/${idCrianca}-grande.png`;

        const nomeCrianca = document.getElementById('nome-crianca');
        nomeCrianca.innerText = crianca.getAttribute('data-name');

        const descricaoCrianca = document.getElementById('descricao-crianca');
        descricaoCrianca.innerText = crianca.getAttribute('data-description');
    });
});

digimons.forEach((digimon) => {
    digimon.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const digimonSelecionada = document.querySelector('.selecionada');
        digimonSelecionada.classList.remove('selecionada');

        digimon.classList.add('selecionada');

        const imagemGrande = document.querySelector('.imagem-grande');

        const idDigimon = digimon.attributes.id.value;
        imagemGrande.src = `./src/imagens/${idDigimon}-grande.png`;

        const nomeDigimon = document.getElementById('nome-crianca');
        nomeDigimon.innerText = digimon.getAttribute('data-name');

        const descricaoDigimon = document.getElementById('descricao-crianca');
        descricaoDigimon.innerText = digimon.getAttribute('data-description');
    });
});


digivolucoes.forEach((digivolucao) => {
    digivolucao.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const digivolucaoSelecionada = document.querySelector('.selecionada');
        digivolucaoSelecionada.classList.remove('selecionada');

        digivolucao.classList.add('selecionada');

        const imagemGrande = document.querySelector('.imagem-grande');

        const idDigivolucao = digivolucao.attributes.id.value;
        imagemGrande.src = `./src/imagens/${idDigivolucao}-grande.png`;

        const nomeDigivolucao = document.getElementById('nome-crianca');
        nomeDigivolucao.innerText = digivolucao.getAttribute('data-name');

        const descricaoDigivolucao = document.getElementById('descricao-crianca');
        descricaoDigivolucao.innerText = digivolucao.getAttribute('data-description');

        
    });
});

function pegarDigimons() {
    const criancas = document.querySelector('.criancas');
    const digimons = document.querySelector('.digimons');
    criancas.style.display = "none";
    digimons.style.display = "flex";
    digimons.style.visibility = "visible";
}

function pegarCriancas() {
    const criancas = document.querySelector('.criancas');
    const digimons = document.querySelector('.digimons');
    digimons.style.display = "none";
    criancas.style.display = "flex";
    criancas.style.visibility = "visible";
}

function digivolver() {
    const digimons = document.querySelector('.digimons');
    const digivolucoes = document.querySelector('.digivolucoes');
    digimons.style.display = "none";
    digivolucoes.style.display = "flex";
    digivolucoes.style.visibility = "visible";
}

function digiVoltar() {
    const digivolucoes = document.querySelector('.digivolucoes');
    const digimons = document.querySelector('.digimons');
    digivolucoes.style.display = "none";
    digimons.style.display = "flex";
    digimons.style.visibility = "visible";
}