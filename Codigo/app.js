// declara um conjunto inicial de internados
var db_internados_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Carlos Almeida",
            "sangue": "A+",
            "observacoes": "Febre e dor na região do estômago",
            "email": "carlosalmeida@gmail.com",
            "telefone": "31987848487",
            "categoria": "Verde",
            "remedio": "Propanolol 10mg (2 vezes ao dia)",
            "alergia": ""
        },
        {
            "id": 2,
            "nome": "João Augusto",
            "sangue": "B-",
            "observacoes": "Fortes dores de cabeça",
            "email": "joaoaugusto@gmail.com",
            "telefone": "3194394852",
            "categoria": "Laranja",
            "remedio": "",
            "alergia": "Frutos do mar"
        },
        {
            "id": 3,
            "nome": "Julia Maria",
            "sangue": "O+",
            "observacoes": "Princípio de intoxicação alimentar",
            "email": "julia4545@outlook.com",
            "telefone": "3194092934",
            "categoria": "Verde",
            "remedio": "Lorazepam 5 mg (1 vez ao dia)",
            "alergia": "Amendoim"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_internado'));
if (!db) {
    db = db_internados_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertinternado(internado) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novointernado = {
        "id": novoId,
        "nome": internado.nome,
        "email" : internado.email,
        "sangue": internado.sangue,
        "observacoes": internado.observacoes,
        "telefone": internado.telefone,
        "cidade" : internado.cidade,
        "categoria": internado.categoria,
        "remedio": internado.remedio,
        "alergia": internado.alergia
    };

    // Insere o novo objeto no array
    db.data.push(novointernado);
    displayMessage("Internado inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_internado', JSON.stringify(db));
}

function updateinternado(id, internado) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = internado.nome,
    db.data[index].email = internado.email,
    db.data[index].telefone = internado.telefone,
    db.data[index].sangue = internado.sangue,
    db.data[index].cidade = internado.cidade,
    db.data[index].categoria = internado.categoria,
    db.data[index].remedio = internado.remedio,
    db.data[index].observacoes = internado.observacoes,
    db.data[index].alergia = internado.alergia

    displayMessage("Internado alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_internado', JSON.stringify(db));
}

function deleteinternado(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Internado removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_internado', JSON.stringify(db));
}