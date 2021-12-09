var db_usuario_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Tarcísio Ney",
            "Data": "23/09/2002" ,
            "email" : "tarcisio_@gmail.com",
            "telefone": "(31)99699-1299",
            "cidade" : "Pedro Leopoldo" ,
            "UF" : "MG" ,
            "CEP" : "33600000" ,
            "CPF" : "XXX.XXX.XXX-XX" ,
            "CRM" : "XXX.XXX.XXX-XX" ,
            "Especialidade" : "XXXXXXXXX" ,
            "endereco": "Rua comendador antonio alves 20",
            "password": "123456"
        },
    ]
}

var db = JSON.parse(localStorage.getItem('db_usuario'));
if (!db) {
    db = db_usuario_inicial
};

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertUsuario(usuario) {
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoUsuario = {
        "id": novoId,
        "nome": usuario.nome,
        "Data": usuario.Data,
        "email" : usuario.email,
        "telefone": usuario.telefone,
        "cidade" : usuario.cidade,
        "UF" : usuario.uf,
        "CEP" : usuario.cep,
        "CPF" : usuario.cpf,
        "CRM" : usuario.crm,
        "Especialidade" : usuario.especialidade,
        "endereco": usuario.endereco,
        "password": usuario.password
    };

    db.data.push(novoUsuario);
    displayMessage("Usuario inserido com sucesso");

    localStorage.setItem('db_usuario', JSON.stringify(db));
}

