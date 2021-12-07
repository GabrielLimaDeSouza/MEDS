// declara um conjunto inicial de internados
var db_internados_inicial = {
    data: [
        {
            "id": 1,
            "cpf": "000.000.000.00",
            "nome": "Carlos Almeida",
            "altura": "1.83",
            "peso": "81kg",            
            "sangue": "A+",
            "observacoes": "Febre e dor na região do estômago",
            "categoria": "Verde",
            "idade": "36",
            "remedio": "Propanolol 10mg (2 vezes ao dia)",
            "alergia": "Dipirona",
            "documentos": [

            ],
            "resumo": [
                "Teste"
            ],
            "data": [
                "07/12/2021"
            ],
            "agenda": {
                "dia": [
                    "2021-12-02",
                    "2021-12-02"
                ],
                "hora": [

                    ["10:10", "12:12"],
                    ["55:55", "55:55"]
                ]
            }
        },
        {
            "id": 2,
            "cpf": "111.111.111.11",
            "nome": "João Augusto",
            "altura": "1.75",
            "peso": "80kg",            
            "sangue": "B-",
            "observacoes": "Fortes dores de cabeça",
            "categoria": "Laranja",
            "idade": "50",
            "remedio": "",
            "alergia": "Frutos do mar",
            "documentos": [

            ],
            "resumo": [
                "Teste"
            ],
            "data": [
                "07/12/2021"
            ],
            "agenda": {
                "dia": [
                    "2021-12-02",
                    "2021-12-02"
                ],
                "hora": [

                    ["10:10", "12:12"],
                    ["55:55", "55:55"]
                ]
        }},
        {
            "id": 3,
            "cpf": "222.222.222.22",
            "nome": "Julia Maria",
            "altura": "1.69",
            "peso": "70kg",            
            "sangue": "B-",
            "observacoes": "Princípio de intoxicação alimentar",
            "categoria": "verde",
            "idade": "28",
            "remedio": "Lorazepam 5 mg (1 vez ao dia)",
            "alergia": "Amendoim",
            "documentos": [

            ],
            "resumo": [
                "Teste"
            ],
            "data": [
                "07/12/2021"
            ],
            "agenda": {
                "dia": [
                    "2021-12-02",
                    "2021-12-02"
                ],
                "hora": [

                    ["10:10", "12:12"],
                    ["55:55", "55:55"]
                ]
        }},
        {
            "id": 4,
            "cpf": "333.333.333.33",
            "nome": "Eduarda Carvalho",
            "altura": "1.69",
            "peso": "70kg",            
            "sangue": "Não identificado",
            "observacoes": "Sintomas de gripe",
            "categoria": "Azul",
            "idade": "15",
            "remedio": "",
            "alergia": "",
            "documentos": [

            ],
            "resumo": [
                "Teste"
            ],
            "data": [
                "07/12/2021"
            ],
            "agenda": {
                "dia": [
                    "2021-12-02",
                    "2021-12-02"
                ],
                "hora": [

                    ["10:10", "12:12"],
                    ["55:55", "55:55"]
                ]
        }}
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
        "categoria": internado.categoria,
        "remedio": internado.remedio,
        "observacoes": internado.observacoes,
        "idade": internado.idade,
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
    db.data[index].sangue = internado.sangue,
    db.data[index].categoria = internado.categoria,
    db.data[index].remedio = internado.remedio,
    db.data[index].observacoes = internado.observacoes,
    db.data[index].idade = internado.idade,
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
