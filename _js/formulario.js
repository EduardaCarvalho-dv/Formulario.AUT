function adicionaLinha(nome, nota) {
    var conteudo = document.getElementById("conteudo");

    var novaLinha = conteudo.insertRow();

    var celulaNome = novaLinha.insertCell();
    var celulaNota = novaLinha.insertCell();

    celulaNome.innerText = nome;
    celulaNota.innerText = nota;
};