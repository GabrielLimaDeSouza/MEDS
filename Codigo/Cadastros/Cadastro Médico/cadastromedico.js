var cadastroM_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Tarcísio Ney",
            "usuario": "TarcisioNey",
            "data": "23/09/2002" ,
            "email" : "tarcisio_@gmail.com",
            "telefone": "(31)99699-1299",
            "cidade" : "Pedro Leopoldo" ,
            "uf" : "MG" ,
            "cep" : "33600000" ,
            "cpf" : "148.648.766-54" ,
            "crm" : "XXX.XXX.XXX-XX" ,
            "especialidade" : "XXXXXXXXX" ,
            "endereco": "Rua comendador antonio alves 20",
            "password": "123456"
        },
    ]
}

var db = JSON.parse(localStorage.getItem('cadastroM'));
if (!db) {
    db = cadastroM_inicial
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
        "usuario": usuario.usuario,
        "data": usuario.data,
        "email" : usuario.email,
        "telefone": usuario.telefone,
        "cidade" : usuario.cidade,
        "uf" : usuario.uf,
        "cep" : usuario.cep,
        "cpf" : usuario.cpf,
        "crm" : usuario.crm,
        "especialidade" : usuario.especialidade,
        "endereco": usuario.endereco,
        "password": usuario.password
    };

    senha1 = document.getElementById("inputPassword").value;
    senha2 = document.getElementById("inputCPassword").value;
    email = document.getElementById('inputEmail');
    if (senha1==senha2)
    {
        if(!(email.value.length < 6 || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1))
        {
            db.data.push(novoUsuario);
            alert("Usuário salvo com sucesso. Faça o login para acessar o MEDS!!!");
        }
        else
        {
            alert("Email inválido!");
        }
    }
    else
    {
        alert("As senhas não conferem!");
    }

    localStorage.setItem('cadastroM', JSON.stringify(db));
}