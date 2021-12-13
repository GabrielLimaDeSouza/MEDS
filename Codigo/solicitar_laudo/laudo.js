var db_usuario = JSON.parse(localStorage.getItem('cadastroM'));
usuario = [];
for (var i = 0; i < db_usuario.data.length; i++) {
    usuario[i] = db_usuario.data[i].nome;
}

var select = document.getElementById("selectmedico");

usuario.forEach((nome) => {
    option = new Option(nome, nome.toLowerCase());
    select.options[select.options.length] = option;
});

var solicitacao_laudo_inicial = {
    "data": [
        {
            "nome": "Julia Lima",
            "mensagem": "Preciso de um laudo médico para fazer um exame trabalhista",
            "medico": "Gabriel Lima de Souza"
        },
    ]
}

var db = JSON.parse(localStorage.getItem('solicitacaoLaudo'));
if (!db) {
    db = solicitacao_laudo_inicial;
    localStorage.setItem('solicitacaoLaudo', JSON.stringify(db));
};

var btn = document.getElementById("btnsubmit");
btn.addEventListener("click",function(){
    let mensagem = document.getElementById("inputmensagem").value;
    let medico = document.getElementById("selectmedico").value;
    var usermoment = JSON.parse(sessionStorage.getItem('usuarioCorrenteP'));
    let solicitante = usermoment.nome;

    let novaSolicitacao = {
        "nome": solicitante,
        "mensagem": mensagem,
        "medico": medico
    };

    db.data.push(novaSolicitacao);
    localStorage.setItem('solicitacaoLaudo', JSON.stringify(db));

});