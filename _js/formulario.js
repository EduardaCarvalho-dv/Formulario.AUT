/*function adicionaLinha(nome, nota) {
    var conteudo = document.getElementById("conteudo");

    var novaLinha = conteudo.insertRow();

    var celulaNome = novaLinha.insertCell();
    var celulaNota = novaLinha.insertCell();

    celulaNome.innerText = nome;
    celulaNota.innerText = nota;
};*/

function adicionar() {
    var nomeA = document.getElementById('nome').value;
    var notaA = document.getElementById('nota').value;
    var content = document.getElementById('conteudo');


    var aluno = { nome: nomeA, nota: notaA };
    var guarda = JSON.parse(localStorage.getItem('alunos')) || [];

    guarda.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(guarda));

    var qtdlinhas = content.rows.length;
    var novaLinha = content.insertRow(qtdlinhas);

    var celulaNome = novaLinha.insertCell(0);
    var celulaNota = novaLinha.insertCell(1);

    celulaNome.innerHTML = nomeA;
    celulaNota.innerHTML = notaA;

    document.getElementById('formulario').reset();
    return;
};


function carregarLocalStorage() {
    var guarda = JSON.parse(localStorage.getItem('alunos')) || [];
    var content = document.getElementById('conteudo');

    guarda.forEach(function (aluno) {
        var qtdlinhas = content.rows.length;
        var novaLinha = content.insertRow(qtdlinhas);

        var celulaNome = novaLinha.insertCell(0);
        var celulaNota = novaLinha.insertCell(1);

        celulaNome.innerHTML = aluno.nome;
        celulaNota.innerHTML = aluno.nota;

    });
}

document.addEventListener('DOMContentLoaded', carregarLocalStorage);