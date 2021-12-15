var cadastroM_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "João Carlos",
            "usuario": "JoãoCarlos",
            "data": "02/09/1988" ,
            "email" : "joaocarlos_@gmail.com",
            "telefone": "(31)97892-3254",
            "cidade" : "Belo Horizonte" ,
            "uf" : "MG" ,
            "cep" : "32634050" ,
            "cpf" : "325.448.216-98" ,
            "crm" : "XXX.XXX.XXX-XX" ,
            "especialidade" : "Cardiologista" ,
            "endereco": "Rua Sebastião de Brito 122",
            "password": "123"
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