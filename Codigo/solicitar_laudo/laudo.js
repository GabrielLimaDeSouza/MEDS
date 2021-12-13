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

