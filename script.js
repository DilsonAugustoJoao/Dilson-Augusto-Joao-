// script.js

// Função para mudar o idioma
function mudarIdioma() {
    const idiomaSelecionado = document.getElementById('navegacao1').value;
    const texto = document.getElementById('texto');
    const texto2 = document.getElementById('texto2');

    if (idiomaSelecionado === 'Inglês') {
        texto.innerHTML = "DILSON AUGUSTO JOÃO <br>PRIMARY EDUCATION TEACHER. <br>UNIVERSITY STUDENT <br>IN THE DEGREE COURSE OF TEACHING <br>OF COMPUTER SCIENCE, AT THE CATHOLIC UNIVERSITY OF MOZAMBIQUE – UCM (EaD).";
        texto2.innerHTML = "Dilson Augusto João, 30 years old, born on August 23, 1993, in the city of Nampula in the district of Mecuburi, son of Augusto João and Madalena Adriano. He lived his entire childhood in the districts of Mecuburi, Mossuril, and Monapo.<br>He attended school in the same districts mentioned above, starting from the 5th grade until high school, where he grew up and learned to survive in the world.";
    } else {
        texto.innerHTML = "DILSON AUGUSTO JOÃO <br>PROFESSOR DO ENSINO PRIMÁRIO. <br>ESTUDANTE UNIVERSITÁRIO <br>NO CURSO DE LICENCIATURA DE ENSINO <br>DE INFORMÁTICA, NA UNIVERSIDADE <br>CATÓLICA DE MOÇAMBIQUE – UCM (EaD).";
        texto2.innerHTML = "Dilson Augusto João, de 30 anos de idade, Nascido aos 23 de Agosto de 1993, na Cidade de Nampula no Distrito de Mecuburi, filho de Augusto João e de Madalena Adriano. Viveu toda a sua infância nos Distritos de Mecuburi, Mossuril e Monapo.<br>Frequentou a escolaridade nos mesmos distritos mencionados acima, a partir da 5ª Classe até ao nível médio frequentou no último distrito, e foi ai que este jovem cresceu e aprendeu a sobreviver no Mundo.";
    }
}

// Função para buscar
function buscar() {
    const consulta = document.getElementById('pesquisar').value;
    if (consulta) {
        // Redireciona para a página de busca com a consulta
        window.location.href = `buscar.html?query=${encodeURIComponent(consulta)}`;
    } else {
        alert("Por favor, digite algo na barra de pesquisa.");
    }
}

// Adicionando eventos aos elementos da página
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona evento para mudar o idioma
    document.getElementById('navegacao1').addEventListener('change', mudarIdioma);

    // Adiciona evento ao botão de busca
    document.getElementById('buscar').addEventListener('click', buscar);
    
    // Adiciona evento ao link da imagem de busca
    document.getElementById('buscarLink').addEventListener('click', buscar);
});