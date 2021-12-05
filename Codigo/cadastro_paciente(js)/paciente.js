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
        "endereco": usuario.endereco,
        "password": usuario.password
    };

    db.data.push(novoUsuario);
    displayMessage("Usuario inserido com sucesso");

    localStorage.setItem('db_usuario', JSON.stringify(db));
}

function updateUsuario(id, usuario) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    db.data[index].nome = usuario.nome,
    db.data[index].email = usuario.email,
    db.data[index].telefone = usuario.telefone,
    db.data[index].cidade = usuario.cidade,
    db.data[index].Data = usuario.Data,
    db.data[index].password = usuario.password,
    db.data[index].endereco = usuario.endereco,
    db.data[index].cep = usuario.cep,
    db.data[index].uf = usuario.uf

    displayMessage("Usuario alterado com sucesso");

    localStorage.setItem('db_usuario', JSON.stringify(db));
}
