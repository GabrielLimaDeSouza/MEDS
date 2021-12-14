testeDeControle = "";
var db_horarios = {
    "data": [
        {
            "nome": "Julio Cesar",
            "codigo": "001",
            "dia": [
                "2021-12-03",
                "2021-12-10"
            ],
            "horario": [
                ["08:00", "10:00"],
                ["10:00", "11:00"],
            ],

        },
        {
            "nome": "Isabel Lopes dos Reis",
            "codigo": "002",
            "dia": [
                "2021-12-01",
                "2021-12-10"
            ],
            "horario": [
                ["08:00", "20:00"],
                ["10:00", "11:00"],
            ],
        },
        {
            "nome": "Julia de Souza Mendes",
            "codigo": "002",
            "dia": [
                "2021-12-01",
                "2021-12-10"
            ],
            "horario": [
                ["08:00", "20:00"],
                ["10:00", "11:00"],
            ],
        }
    ]
}

var db_visita_horario = [
    
    {
        "visitante":[

        ],
        "codigo":[
            
        ],
        "visitado": [

        ],
        "dia":[

        ],
        "horario":[

        ]
    }

]

var horarioSelecionado = -1;
function cria() {
    var selectdata = document.getElementById('campodata')

    var campo = document.getElementById("exampleFormControlInput1")
    if (campo) {
        campo.addEventListener("keypress", function (e) {
            if (!valida(e)) {
                e.preventDefault();
                aviso.innerHTML = "Este campo só aceita números"
                aviso.style.color = '#ff0000'
            }
            else {
                aviso.innerHTML = ""
                var qtd = document.querySelectorAll('#exclui').length;
                while (qtd > 0) {
                    testeE = document.getElementById("exclui");
                    testeE.outerHTML = '';
                    qtd--;
                }
            }
        })
    }

    var visitado = document.getElementById("exampleFormControlInput2")
    if (visitado) {
        console.log("TETETETE")
        visitado.addEventListener("keypress", function (a) {
            if (!valida2(a)) {
                a.preventDefault();
                aviso2.innerHTML = "Este campo só aceita letras"
                aviso2.style.color = "#ff0000"
            }
            else {
                aviso.innerHTML = ""
                var qtd = document.querySelectorAll('#exclui').length;
                while (qtd > 0) {
                    testeE = document.getElementById("exclui");
                    testeE.outerHTML = '';
                    qtd--;
                }
            }
        })
    }


    function valida(e) {
        const char = String.fromCharCode(e.keyCode);
        console.log(e.keyCode)
        const padrao = '[0-9]'
        if (char.match(padrao)) {
            return true;
        }
    }
    function valida2(a) {
        const char = String.fromCharCode(a.keyCode);
        console.log(a.keyCode)
        const padrao = '[a-zA-Z ]'
        if (char.match(padrao)) {
            return true;
        }
    }
    visitado.addEventListener("blur", function () {
        if (exampleFormControlInput1.value != '' && exampleFormControlInput2.value != '') {
            console.log("pressnci")
            for (let i = 0; i < db_horarios.data.length; i++) {
                if (exampleFormControlInput1.value == db_horarios.data[i].codigo && exampleFormControlInput2.value == db_horarios.data[0].nome) {
                    console.log("ACHOU")
                    achado = i;
                    criaPrimeiro();
                }
            }


        }
    })
    campo.addEventListener("blur", function () {
        if (exampleFormControlInput2.value != '' && exampleFormControlInput1.value != '') {
            console.log("presnvci")
            for (let i = 0; i < db_horarios.data.length; i++) {
                if (exampleFormControlInput1.value == db_horarios.data[i].codigo && exampleFormControlInput2.value == db_horarios.data[0].nome) {
                    console.log("ACHOU")
                    achado = i;
                    criaPrimeiro();
                }
            }


        }
    })

    var achado = 0;

    var k = 0;
    var adicionaData = document.getElementById("adicionaData");
    if (adicionaData) {
        adicionaData.addEventListener("click", function () {
            if (k < db_horarios.data[achado].dia.length - 1) {
                k = k + 1;
            }
            else {
                alert("Essa é a data mais distante");
            }
            console.log("TETETETE")
        })

        btnAdiciona = document.getElementById("adicionaData");
        btnAdiciona.addEventListener('click', function () {
            var qtd = document.querySelectorAll('#exclui').length;
            while (qtd > 0) {
                testeE = document.getElementById("exclui");
                testeE.outerHTML = '';
                qtd--;
            }

            console.log("Esse é o valor de K", k)
            campodata.options.length = 0;

            for (z = 0; z < db_horarios.data.length; z++) {
                if (exampleFormControlInput2.value == db_horarios.data[z].nome) {
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
                        button.onclick = function () {
                            horarioSelecionado = a;
                            console.log(horarioSelecionado)
                        }
                        button.className = "btn btn-primary";
                        button.setAttribute('id', 'exclui')
                        button.setAttribute('type', 'button')

                        iteste = iteste + 1;
                        console.log("hhhh", db_horarios.data[achado].horario[k][a])
                        button.appendChild(document.createTextNode(db_horarios.data[achado].horario[k][a]));
                        conj.appendChild(button);


                    }
                }


            }

        })
    }
    var subtraiData = document.getElementById("diminuiData");
    if (subtraiData) {
        console.log("TETETETE")
        subtraiData.addEventListener("click", function () {
            if (k > 0) {
                k = k - 1;
            }
            else {
                alert("Esse é o dia mais próximo")
            }

        })
        btnSubtrai = document.getElementById("diminuiData");
        btnSubtrai.addEventListener('click', function () {
            var qtd = document.querySelectorAll('#exclui').length;
            while (qtd > 0) {
                testeE = document.getElementById("exclui");
                testeE.outerHTML = '';
                qtd--;
            }
            console.log("Esse é o valor de K", k)
            campodata.options.length = 0;

            for (z = 0; z < db_horarios.data.length; z++) {
                if (exampleFormControlInput2.value == db_horarios.data[z].nome) {
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
                        button.onclick = function () {
                            horarioSelecionado = a;
                            console.log(horarioSelecionado)
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
    }






    var quantidadeB = 0;

    var z;
    var iteste = 0;
    var conj = document.getElementById("conj");

    var selectdata = document.getElementById("campodata");
    btnAdiciona = document.getElementById("adicionaData");
    btnSubtrai = document.getElementById("diminuiData");





    function criaPrimeiro() {
        var qtd = document.querySelectorAll('#exclui').length;
        while (qtd > 0) {
            let testeE = document.getElementById("exclui");
            testeE.outerHTML = '';
            qtd--;
        }
        console.log("Esse é o valor de K", k)
        campodata.options.length = 0;

        for (z = 0; z < db_horarios.data.length; z++) {
            if (exampleFormControlInput2.value == db_horarios.data[z].nome) {
                console.log("teste32")
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
                    button.onclick = function () {
                        horarioSelecionado = a;
                        console.log(horarioSelecionado)
                    }
                    button.className = "btn btn-primary";
                    button.setAttribute('id', 'exclui');
                    button.setAttribute('type', 'button');
                    iteste = iteste + 1;
                    console.log("hhhh", db_horarios.data[z].horario[k][a]);
                    button.appendChild(document.createTextNode(db_horarios.data[z].horario[k][a]));
                    conj.appendChild(button);

                }
            }


        }

    }
    var agendamento_inicial= {
       data: [
           {
               "codigo": "003",
            "visitado": "Juninho",
            "dia": "10/10/2021",
            "horario": "7:00"
           }
            
        ]
    }
    var db = JSON.parse(localStorage.getItem('novaVisita'));
    enviar = document.getElementById("login");
    if (enviar) {
        enviar.addEventListener("click", function () {
            console.log("salvou")
            if (exampleFormControlInput1.value == '' || exampleFormControlInput2.value == '') {
                alert("Todos os campos precisam ser respondidos.");
            }
            else {
                if (!db) {
                    db = agendamento_inicial;
                    localStorage.setItem('db_visita_horario', JSON.stringify(db));
                };
                let ID = document.getElementById('exampleFormControlInput1').value;
                let campodata = document.getElementById('campodata').value;
                let visitado = document.getElementById('exampleFormControlInput2').value;
                let achou;
                for (let e=0; e<db_horarios.data.length; e++){
                    console.log(db_horarios.data[e].nome);
                    if (visitado == db_horarios.data[e].nome)
                    {
                        achou = e;
                    }
                }
                localStorage.setItem('Codigo:', ID);
                localStorage.setItem('Data:', campodata);
                localStorage.setItem('Visitado:', visitado);
                localStorage.setItem('Horário:', db_horarios.data[achou].horario[k][horarioSelecionado])
                
        
                
        
            
                var db_visita_horario = [
                    {
                        "codigo": ID,
                        "visitado": visitado,
                        "dia": campodata,
                        "horario": db_horarios.data[achou].horario[k][horarioSelecionado]
                    }
                ]

                db.data.push(db_visita_horario);
                localStorage.setItem('novavisita', JSON.stringify(db));
                sessionStorage.setItem ('novavisita', JSON.stringify (db_visita_horario));
                alert ("Sua visita foi marcada, lembre-se de seguir os protocolos contra o COVID-19")
                return false;
            }
        
        }
            
        );
    }




}


function init() {
    console.log("primeiro teste");
    cria();
}
