var corrente = JSON.parse(sessionStorage.getItem("usuarioCorrenteM"));
var medicocorrente = corrente.nome;

var db_consultas = JSON.parse(localStorage.getItem("novaConsulta"));

var medicos = [];

function carrega(){
    for (var i = 0; i < db_consultas.data.length; i++) {
        medicos[i]=db_consultas.data[i].medico;
        if(medicos[i]==medicocorrente)
        {
            var linha = document.createElement("tr");
            var campo_paciente = document.createElement("td");
            var campo_data = document.createElement("td");
            var campo_horario = document.createElement("td");
    
            campo_paciente.className = "aborda";
            campo_data.className = "aduplo";
            campo_horario.className = "pdf";
    
            var texto_paciente = document.createTextNode(db_consultas.data[i].paciente);
            var texto_data = document.createTextNode(db_consultas.data[i].dia);
            var texto_horario = document.createTextNode(db_consultas.data[i].horario);
    
            campo_paciente.appendChild(texto_paciente);
            campo_data.appendChild(texto_data);
            campo_horario.appendChild(texto_horario);
            linha.appendChild(campo_paciente);
            linha.appendChild(campo_data);
            linha.appendChild(campo_horario);
    
            var corpo_tabela = document.getElementById("modifica");
            corpo_tabela.appendChild(linha);
        }
    }    
}
