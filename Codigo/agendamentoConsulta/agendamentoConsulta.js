testeDeControle = "";
var db_horarios = {
    "data": [
        {
            "nome": "Joao Marcelo da Silva",
            "especialidade": "Neurologista",
            "dia": [
                "2021-12-01",
                "2021-12-10"
            ],
            "horario": [
                ["08:00", "20:00"],
                ["10:00", "11:00"],
            ],
            "inicio": "2021-12-01T08:00"
        },
        {
            "nome": "Isabel Lopes dos Reis",
            "especialidade": "Pediatra",
            "dia": [
                "2021-12-01",
                "2021-12-10"
            ],
            "horario": [
                ["08:00", "20:00"],
                ["10:00", "11:00"],
            ],
            "inicio": "2021-11-01T15:00"
        },
        {
            "nome": "Julia de Souza Mendes",
            "especialidade": "Oftalmologista",
            "dia": [
                "2021-12-01",
                "2021-12-10"
            ],
            "horario": [
                ["08:00", "20:00"],
                ["10:00", "11:00"],
            ],
            "inicio": "2021-10-15T17:00"
        }
    ]
}

var db_consulta_horario = [
    
        {
            "medico":[

            ],
            "tipo":[
                
            ],
            "paciente": "",
            "especialidade":[

            ],
            "dia":[

            ],
            "horario":[

            ]
        }
    
    ]
var horarioSelecionado =-1;
var usuarioCorrenteP = JSON.parse(sessionStorage.getItem('usuarioCorrenteP'));
        console.log(usuarioCorrenteP);
function inicializaComboEspecialidades() {
        
    var selectEspecialidades = document.getElementById("campoespecialidade");
    for (let i = 0; i < db_horarios.data.length; i++) {
        var opt = document.createElement('option');
        opt.value = db_horarios.data[i].especialidade;
        opt.innerHTML = db_horarios.data[i].especialidade;
        selectEspecialidades.appendChild(opt);
    }


}

function inicializaComboMedico() {
    var selectmedico = document.getElementById("campomedico");
    campoespecialidade = document.getElementById('campoespecialidade');
    campoespecialidade.addEventListener('blur', function () {
        campomedico.options.length = 1
        for (let i = 0; i < db_horarios.data.length; i++) {
            if (campoespecialidade.value == db_horarios.data[i].especialidade) {
                var opt = document.createElement('option');
                opt.value = db_horarios.data[i].nome;
                opt.innerHTML = db_horarios.data[i].nome;
                selectmedico.appendChild(opt);
            }


        }
    })
}
var k = 0;

function adiciona() {
    if (k < db_horarios.data[campomedico.selectedIndex - 1].dia.length - 1) {
        k = k + 1;
    }
    else {
        alert("Essa é a data mais distante");
    }
}
function subtrai() {
    if (k > 0) {
        k = k - 1;
    }
    else {
        alert("Esse é o dia mais próximo")
    }

}



function inicializaComboData() {
    var selectdata = document.getElementById("campodata");
    campomedico = document.getElementById('campomedico');
    btnAdiciona = document.getElementById("adicionaData");
    btnSubtrai = document.getElementById("diminuiData");
    btnSubtrai.addEventListener('click', function () {
        var qtd = document.querySelectorAll('#exclui').length;
        while (qtd > 0) {
            testeE = document.getElementById("exclui");
            testeE.outerHTML = '';
            qtd--;
        }
        campodata.options.length = 0;

        for (z = 0; z < db_horarios.data.length; z++) {
            if (campomedico.value == db_horarios.data[z].nome) {
                var opt = document.createElement('option');
                let data_americana = db_horarios.data[z].dia[k];
                let data_brasileira = data_americana.split('-').reverse().join('/');
                console.log(data_brasileira)

                opt.value = data_brasileira;
                opt.innerHTML = data_brasileira;
                selectdata.appendChild(opt);

                for (let a = 0; a < db_horarios.data[z].horario[k].length; a++) {
                    console.log("???")



                    var button = document.createElement('button');
                    button.onclick = function (){
                        horarioSelecionado = a;
                    }
                    button.className = "btn btn-primary";
                    button.setAttribute('id', 'exclui')
                    button.setAttribute('type', 'button')
                    
                    iteste = iteste + 1;
                    button.appendChild(document.createTextNode(db_horarios.data[z].horario[k][a]));
                    conj.appendChild(button);
                }
            }


        }

    })
    
    var quantidadeB = 0;
    
    var z;
    var iteste = 0;
    var conj = document.getElementById("conj");
    btnAdiciona.addEventListener('click', function () {
        var qtd = document.querySelectorAll('#exclui').length;
        while (qtd > 0) {
            testeE = document.getElementById("exclui");
            testeE.outerHTML = '';
            qtd--;
        }
        campodata.options.length = 0;

        for (z = 0; z < db_horarios.data.length; z++) {
            if (campomedico.value == db_horarios.data[z].nome) {
                var opt = document.createElement('option');
                let data_americana = db_horarios.data[z].dia[k];
                let data_brasileira = data_americana.split('-').reverse().join('/');
                console.log(data_brasileira)

                opt.value = data_brasileira;
                opt.innerHTML = data_brasileira;
                selectdata.appendChild(opt);

                for (let a = 0; a < db_horarios.data[z].horario[k].length; a++) {



                    var button = document.createElement('button');
                    button.onclick = function (){
                        horarioSelecionado = a;
                    }
                    button.className = "btn btn-primary";
                    button.setAttribute('id', 'exclui')
                    button.setAttribute('type', 'button')
                    
                    iteste = iteste + 1;
                    button.appendChild(document.createTextNode(db_horarios.data[z].horario[k][a]));
                    conj.appendChild(button);


                }
            }


        }

    })
    
    function criaPrimeiro() {
        var qtd = document.querySelectorAll('#exclui').length;
        while (qtd > 0) {
            let testeE = document.getElementById("exclui");
            testeE.outerHTML = '';
            qtd--;
        }
        campodata.options.length = 0;

        for (z = 0; z < db_horarios.data.length; z++) {
            if (campomedico.value == db_horarios.data[z].nome) {
                var opt = document.createElement('option');
                let data_americana = db_horarios.data[z].dia[k];
                let data_brasileira = data_americana.split('-').reverse().join('/');

                opt.value = data_brasileira;
                opt.innerHTML = data_brasileira;
                selectdata.appendChild(opt);

                for (let a = 0; a < db_horarios.data[z].horario[k].length; a++) {



                    var button = document.createElement('button');
                    button.onclick = function (){
                        horarioSelecionado = a;
                    }
                    button.className = "btn btn-primary";
                    button.setAttribute('id', 'exclui');
                    button.setAttribute('type', 'button');
                    iteste = iteste + 1;
                    button.appendChild(document.createTextNode(db_horarios.data[z].horario[k][a]));
                    conj.appendChild(button);
                    
                }
            }
            

        }
        
    }

    campomedico.addEventListener('blur', function () {
        campodata.options.length = 0;
        for (let i = 0; i < db_horarios.data.length; i++) {
            if (campomedico.value == db_horarios.data[i].nome) {
                let data_americana = db_horarios.data[i].dia[i];
                let data_brasileira = data_americana.split('-').reverse().join('/');
                // Pronto! A data foi convertida.
                var opt = document.createElement('option');
                opt.value = data_brasileira;
                opt.innerHTML = data_brasileira;
                selectdata.appendChild(opt);
                criaPrimeiro();
            }

        }
    })
}
function teste(valor) {
    alert(valor)
}

var agendamento_inicial = {
    "data": [
        {
            "medico": "Marcus Paulo",
                "tipo": "1",
                "paciente": "hhh",
                "especialidade": "neurologista",
                "dia": "20/10/2021",
                "horario": "10:00"
        },
    ]
}
var db = JSON.parse(localStorage.getItem('novaConsulta'));

function processaForm() {
    if (campoTipo.value == 'Selecione o tipo' || campoespecialidade.value == 'Selecione o tipo' || campomedico.value == 'Selecione o tipo') {
        alert("Todos os campos precisam ser respondidos.");
    }
    else {
        if (!db) {
            db = agendamento_inicial;
            localStorage.setItem('novaConsulta', JSON.stringify(db));
        };
        let campoespecialidade = document.getElementById('campoespecialidade').value;
        let campodata = document.getElementById('campodata').value;
        let campoTipo = document.getElementById('campoTipo').value;
        let campomedico = document.getElementById('campomedico').value;
        let achou;
        for (let e=0; e<db_horarios.data.length; e++){
            console.log(db_horarios.data[e].nome);
            console.log(campomedico)
            if (campomedico == db_horarios.data[e].nome)
            {
                achou = e;
            }
        }
        localStorage.setItem('Especialidade:', campoespecialidade);
        localStorage.setItem('Tipo:', campoTipo);
        localStorage.setItem('Data:', campodata);
        localStorage.setItem('Medico:', campomedico);
        localStorage.setItem('Horário:', db_horarios.data[achou].horario[k][horarioSelecionado])
        

        

    

        var db_consulta_horario = {
                    "medico": campomedico,
                    "tipo": campoTipo,
                    "paciente": usuarioCorrenteP.nome,
                    "especialidade": campoespecialidade,
                    "dia": campodata,
                    "horario": db_horarios.data[achou].horario[k][horarioSelecionado]
        }
        db.data.push(db_consulta_horario);
        localStorage.setItem('novaConsulta', JSON.stringify(db));


        sessionStorage.setItem ('novaConsulta', JSON.stringify (db_consulta_horario));
        alert ("Sua consulta foi marcada, lembre-se de seguir os protocolos contra o COVID-19")
        return false;
    }

}


function init() {
    inicializaComboEspecialidades();
    inicializaComboMedico();
    inicializaComboData();
    document.getElementById("login").addEventListener("submit", processaForm);
}
