window.onload = () => {

    //  DECLARAÇÃO DE VARIAVEIS
    let nome = document.getElementById('nome');
    let nascimento = document.getElementById('nascimento');
    let CPF = document.getElementById('CPF');
    let numero = document.getElementById('numero');
    let email = document.getElementById('email');
    let CRM = document.getElementById('CRM');
    let especialidade = document.getElementById('especialidade');
    let rua = document.getElementById('rua');
    let complemento = document.getElementById('complemento');
    let senha = document.getElementById('senha');
    let csenha = document.getElementById('csenha');

    //VALIDAÇÕES DOS CAMPOS DO FORMULARIO
    //NOME
    nome.onchange = () => console.log('change', nome.value);
    nome.oninput = () => {
        let caracteresInvalidos = '1234567890';
        let ultimoCaracter = nome.value.charAt(nome.value.lenght - 1);
        if (caracteresInvalidos.indexOf(ultimoCaracter) >= 0){
            nome.value = nome.value.substr(0, nome.value.lenght - 1);}
    }
        
    //NASCIMENTO
    nascimento.onchange = () => console.log('change', nascimento.value);
    nascimento.oninput = () => {
        let caracteresInvalidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let ultimoCaracter = nascimento.value.charAt(nascimento.value.lenght - 1);
        if (caracteresInvalidos.indexOf(ultimoCaracter) >= 0){
            nascimento.value = nascimento.value.substr(0, nascimento.value.lenght - 1);} 
    }
            
    
 
    //CPF
    CPF.onchange = () => console.log('change', CPF.value);
    CPF.oninput = () => {
        let caracteresInvalidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let ultimoCaracter = CPF.value.charAt(CPF.value.lenght - 1);
        if (caracteresInvalidos.indexOf(ultimoCaracter) >= 0){
            CPF.value = CPF.value.substr(0, CPF.value.lenght - 1);}
        
    }

    //NUMERO
    numero.onchange = () => console.log('change', numero.value);
    numero.oninput = () => {
        let caracteresInvalidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let ultimoCaracter = numero.value.charAt(numero.value.lenght - 1);
        if (caracteresInvalidos.indexOf(ultimoCaracter) >= 0){
            numero.value = numero.value.substr(0, numero.value.lenght - 1);}
        
    }

    //EMAIL
    email.oninput = () => {
    let re = /\S+@\S+\.\S+/;

    let email = input.value;

    let errorMessage = `Insira um e-mail no padrão matheus@email.com`;

    if(!re.test(email)) {
      this.printMessage(input, errorMessage);
    }
    }

  
    //CRM
    CRM.onchange = () => console.log('change', CRM.value);
    CRM.oninput = () => {
        let caracteresInvalidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let ultimoCaracter = CRM.value.charAt(CRM.value.lenght - 1);
        if (caracteresInvalidos.indexOf(ultimoCaracter) >= 0){
            CRM.value = CRM.value.substr(0, CRM.value.lenght - 1);}
        
    }

    //ESPECIALIDADE
    especialidade.onchange = () => console.log('change', CRM.value);
    especialidade.oninput = () => {
        let caracteresInvalidos = '1234567890';
        let ultimoCaracter = especialidade.value.charAt(especialidade.value.lenght - 1);
        if (caracteresInvalidos.indexOf(ultimoCaracter) >= 0){
            especialidade.value = especialidade.value.substr(0, especialidade.value.lenght - 1);}
        
    }

    //RUA
    rua.onchange = () => console.log('change', rua.value);
    rua.oninput = () => {
        let caracteresInvalidos = '1234567890';
        let ultimoCaracter = rua.value.charAt(rua.value.lenght - 1);
        if (caracteresInvalidos.indexOf(ultimoCaracter) >= 0){
            rua.value = rua.value.substr(0, rua.value.lenght - 1);}

    }

    //COMPLEMENTO
    complemento.onchange = () => console.log('change', complemento.value);
    complemento.oninput = () => {
        let caracteresInvalidos = '1234567890';
        let ultimoCaracter = complemento.value.charAt(complemento.value.lenght - 1);
        if (caracteresInvalidos.indexOf(ultimoCaracter) >= 0){
            complemento.value = complemento.value.substr(0, complemento.value.lenght - 1);}

    }

    //SENHA
    senha.onchange = () => console.log('change', senha.value);
    senha.oninput = () =>{
    if (senha.value <= 6){
            alert('a senha deve ter no minimo 7 caracteres')
    }

    }

    csenha.onchange = () => console.log('change', csenha.value);
    if (csenha.value != senha.value){
            alert('As senhas devem ser iguais')
    }


    //SALVA OS INPUTS NO LOCAL STORAGE
    function insertContato(contato) {
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoCadastro = {
        "id": novoId,
        "nome": cadastro.nome,
        "email" : cadastro.email,
        "telefone": cadastro.telefone,
        "nascimento" : cadastro.nascimento,
        "CPF": cadastro.CPF,
        "CRM": cadastro.CRM,
        "CRM": cadastro.CRM,                            
        "especialidade": cadastro.especialidade,
        "rua": cadastro.rua,
        "complemento": cadastro.complemento,
        "bairro": cadastro.bairro,
        "UF": cadastro.UF,
        "CEP": cadastro.CEP,
        "password": cadastro.password
    
    };
    db.data.push(novoCadastro);

    localStorage.setItem('oCadastro', JSON.stringify(db));
    }
}