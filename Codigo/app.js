// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Carlos Almeida",
            "sangue": "A+",
            "observacoes": "Febre e dor na região do estômago",
            "categoria": "Verde",
            "idade": "36",
            "remedio": "Propanolol 10mg (2 vezes ao dia)",
            "alergia": ""
        },
        {
            "id": 2,
            "nome": "João Augusto",
            "sangue": "B-",
            "observacoes": "Fortes dores de cabeça",
            "categoria": "Laranja",
            "idade": "50",
            "remedio": "",
            "alergia": "Frutos do mar"
        },
        {
            "id": 3,
            "nome": "Julia Maria",
            "sangue": "O+",
            "observacoes": "Princípio de intoxicação alimentar",
            "categoria": "Verde",
            "idade": "28",
            "remedio": "Lorazepam 5 mg (1 vez ao dia)",
            "alergia": "Amendoim"
        },
        {
            "id": 4,
            "nome": "Eduarda Carvalho",
            "sangue": "Não identificado",
            "observacoes": "Sintomas de gripe",
            "categoria": "Azul",
            "idade": "15",
            "remedio": "",
            "alergia": ""
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "sangue": contato.sangue,
        "categoria": contato.categoria,
        "remedio": contato.remedio,
        "observacoes": contato.observacoes,
        "idade": contato.idade,
        "alergia": contato.alergia
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Internado inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].sangue = contato.sangue,
    db.data[index].categoria = contato.categoria,
    db.data[index].remedio = contato.remedio,
    db.data[index].observacoes = contato.observacoes,
    db.data[index].idade = contato.idade,
    db.data[index].alergia = contato.alergia

    displayMessage("Internado alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Internado removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}