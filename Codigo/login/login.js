
// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser () {
    
    // Verifica todos os itens do banco de dados de usuarios 
    // para localizar o usuário informado no formulario de login
    var db_usuario = JSON.parse(localStorage.getItem('cadastroP'));
    console.log(db_usuario);
    for (var i = 0; i < db_usuario.data.length; i++) {
        var usuario = db_usuario.data[i];
        login = document.getElementById('username').value;
        senha = document.getElementById('password').value;
        
        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (login == usuario.usuario && senha == usuario.password) {
            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            let corrente = db_usuario.data[i];
            sessionStorage.setItem ('usuarioCorrenteP', JSON.stringify (corrente));
            // Retorna true para usuário enc
            return true;
        }
    }

    // Se chegou até aqui é por que não encontrou o usuário e retorna falso
    return false;
}

usuarioCorrente = {};
// Apaga os dados do usuário corrente no sessionStorage
function logoutUser () {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrenteP', JSON.stringify (usuarioCorrente));
    window.location = "../Tela inicial/index.html";
}




