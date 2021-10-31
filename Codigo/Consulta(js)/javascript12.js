testeDeControle = "";
var especialidades = [{
        titulo: "pediatra"
    },
    {
        titulo: "cirurgião"
    },
    {
        titulo: "ginecologista"
    },
];

var hospitais = [{
        nome: "Santa Casa",
        prof: "cirurgião",
    },
    {
        nome: "Hermes",
        prof: "pediatra",
    },
    {
        nome: "São Judas",
        prof: "ginecologista",
    }
];
var datas = [{
        dia: "10/10/21",
        cal: "Santa Casa",
    },
    {
        dia: "13/05/21",
        cal: "Hermes",
    },
    {
        dia: "25/04/21",
        cal: "São Judas",
    }
];

function inicializaComboEspecialidades() {
    var selectEspecialidades = document.getElementById("campoespecialidade");
    for (i = 0; i < especialidades.length; i++) {
        var opt = document.createElement('option');
        opt.value = especialidades[i].titulo;
        opt.innerHTML = especialidades[i].titulo;
        selectEspecialidades.appendChild(opt);
    }

    var especialidadelocal = "";


    campoespecialidade = document.getElementById('campoespecialidade');
    campoespecialidade.addEventListener('change', function () {
        console.log(campoespecialidade.value)
        controleContagem = campoespecialidade.value
        especialidadelocal = campoespecialidade
    })


}

function inicializaComboHospitais() {
    var selecthospitais = document.getElementById("campohospital");
    campoespecialidade = document.getElementById('campoespecialidade');
    campoespecialidade.addEventListener('change', function () {
        especialidadelocal = campoespecialidade
        campohospital.options.length = 1
        for (i = 0; i < hospitais.length; i++) {
            if (especialidadelocal.value == hospitais[i].prof)
            {
                var opt = document.createElement('option');
                opt.value = hospitais[i].nome;
                opt.innerHTML = hospitais[i].nome;
                selecthospitais.appendChild(opt); 
            }
            
            
        }
    })
    
    
    controleContagem1 = hospitais.length;


    campohospital = document.getElementById('campohospital');
    campohospital.addEventListener('change', function () {
        hospitallocal = campohospital
        console.log(campohospital.value)

    })
}
    

    


function inicializaComboData() {
    var selectdata = document.getElementById("campodata");
    hospitallocal = campohospital
    campohospital.addEventListener('change', function () {
    campodata.options.length = 1;
    for (i = 0; i < datas.length; i++) {
        if (hospitallocal.value == datas[i].cal) {
            var opt = document.createElement('option');
        opt.value = datas[i].dia;
        opt.innerHTML = datas[i].dia;
        selectdata.appendChild(opt);
        }
        
    }
    })



    campodata = document.getElementById('campodata');
    campodata.addEventListener('change', function () {
        console.log(campodata.value)
        datalocal = campodata
    })
}


function processaForm (e) {
    e.preventDefault ();
    if (campodata.value == 'Selecione o tipo' || campoespecialidade.value == 'Selecione o tipo' || campohospital.value == 'Selecione o tipo' ){
        alert("Todos os campos precisam ser respondidos.");
    }
    else{
        alert("Consulta agendada com sucesso.");
        let campoespecialidade = document.getElementById ('campoespecialidade').value;
    let campohospital = document.getElementById('campohospital').value;
    let campodata = document.getElementById('campodata').value;
    localStorage.setItem('Especialidade:', campoespecialidade);
    localStorage.setItem('Hospital:', campohospital);
    localStorage.setItem('Data:', campodata);
    return false;
    }
    
}


function init () {
    inicializaComboEspecialidades (); 
    inicializaComboHospitais (); 
    inicializaComboData ();
    document.getElementById("form_login").addEventListener("submit", processaForm);    
}
