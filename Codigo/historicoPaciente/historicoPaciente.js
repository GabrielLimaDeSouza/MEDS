var db_internados_inicial = {
    data: [
        {
            "id": 1,
            "cpf": "000.000.000.00",
            "nome": "Carlos Almeida",
            "altura": "1.83",
            "peso": "81kg",            
            "sangue": "A+",
            "observacoes": "Febre e dor na região do estômago",
            "categoria": "Verde",
            "idade": "36",
            "remedio": "Propanolol 10mg (2 vezes ao dia)",
            "alergia": "Dipirona",
            "documentos": [
                 ],
            "resumo": [
                "Teste"
            ],
            "data": [
                "07/12/2021"
            ],
            "agenda": {
                "dia": [
                    "2021-12-02",
                    "2021-12-02"
                ],
                "hora": [

                    ["10:10", "12:12"],
                    ["55:55", "55:55"]
                ]
            }
        },
        {
            "id": 2,
            "cpf": "111.111.111.11",
            "nome": "João Augusto",
            "altura": "1.75",
            "peso": "80kg",            
            "sangue": "B-",
            "observacoes": "Fortes dores de cabeça",
            "categoria": "Laranja",
            "idade": "50",
            "remedio": "",
            "alergia": "Frutos do mar",
            "documentos": [

            ],
            "resumo": [
                "Teste"
            ],
            "data": [
                "07/12/2021"
            ],
            "agenda": {
                "dia": [
                    "2021-12-02",
                    "2021-12-02"
                ],
                "hora": [

                    ["10:10", "12:12"],
                    ["55:55", "55:55"]
                ]
        }},
        {
            "id": 3,
            "cpf": "222.222.222.22",
            "nome": "Julia Maria",
            "altura": "1.69",
            "peso": "70kg",            
            "sangue": "B-",
            "observacoes": "Princípio de intoxicação alimentar",
            "categoria": "verde",
            "idade": "28",
            "remedio": "Lorazepam 5 mg (1 vez ao dia)",
            "alergia": "Amendoim",
            "documentos": [

            ],
            "resumo": [
                "Teste"
            ],
            "data": [
                "07/12/2021"
            ],
            "agenda": {
                "dia": [
                    "2021-12-02",
                    "2021-12-02"
                ],
                "hora": [

                    ["10:10", "12:12"],
                    ["55:55", "55:55"]
                ]
        }},
        {
            "id": 4,
            "cpf": "333.333.333.33",
            "nome": "Eduarda Carvalho",
            "altura": "1.69",
            "peso": "70kg",            
            "sangue": "Não identificado",
            "observacoes": "Sintomas de gripe",
            "categoria": "Azul",
            "idade": "15",
            "remedio": "",
            "alergia": "",
            "documentos": [
                
            ],
            "resumo": [
                "Teste"
            ],
            "data": [
                "07/12/2021"
            ],
            "agenda": {
                "dia": [
                    "2021-12-02",
                    "2021-12-02"
                ],
                "hora": [

                    ["10:10", "12:12"],
                    ["55:55", "55:55"]
                ]
        }}
    ]
}

var apdf = [

];


var selecionado = 1;
console.log("id:", selecionado);

function inicializaComboPacientes() {
    let meusDados1 = `<table class="tabela" cellspacing="20">
    <thead>
        <tr class="claro">
            <td class="pr" id="nome"> <b>${db_internados_inicial.data[selecionado - 1].nome}</b> </td>
            <td class="pr2" id="idade"><b>IDADE: ${db_internados_inicial.data[selecionado - 1].idade} anos</b></td>
            <td class="pr1" id="CPF"><b>CPF: ${db_internados_inicial.data[selecionado - 1].cpf}</b></td>
        </tr>
    </thead>

    <tr class="escuro">
        <td class="borda"><b>TIPO SANGUINEO:</b></td>
        <td class="duplo" colspan="2"><b>${db_internados_inicial.data[selecionado - 1].sangue}</b></td>

    </tr>
    <tr class="escuro">
        <td class="borda"><b>ALTURA:</b></td>
        <td class="duplo" colspan="2"><b>${db_internados_inicial.data[selecionado - 1].altura}</b></td>
    </tr>
    <tr class="escuro ultimo">
        <td class="borda"><b>PESO:</b></td>
        <td class="duplo" colspan="2"><b>${db_internados_inicial.data[selecionado - 1].peso}</b></td>
    </tr>
</table>`
document.getElementById("tela1").innerHTML = meusDados1;
    if (db_internados_inicial.data[selecionado - 1].documentos.length > 0) {
        for (let x = 0; x <= db_internados_inicial.data[selecionado - 1].documentos.length - 1; x++) {
            var linha = document.createElement("tr");
            var campo_data = document.createElement("td");
            var campo_resumo = document.createElement("td");
            var campo_pdf = document.createElement("td")

            campo_data.className = "aborda";
            campo_resumo.className = "aduplo";
            campo_pdf.className = "pdf"


            var texto_data = document.createTextNode(db_internados_inicial.data[selecionado - 1].data);
            var texto_resumo = document.createTextNode(db_internados_inicial.data[selecionado - 1].resumo);
            var texto_pdf = document.createElement("button");
            texto_pdf.className = "teste";
            texto_pdf.setAttribute("onclick", "demo1(" + db_internados_inicial.data[selecionado - 1].documentos.length + ")");
            console.log("Este é o indice:", indice)

            campo_data.appendChild(texto_data);
            campo_resumo.appendChild(texto_resumo);
            campo_pdf.appendChild(texto_pdf);
            linha.appendChild(campo_data);
            linha.appendChild(campo_resumo);
            linha.appendChild(campo_pdf);

            var corpo_tabela = document.getElementById("modifica");
            corpo_tabela.appendChild(linha);

        }
    }

}





var base64;
function convertToBase64() {
    //Read File
    var selectedFile = document.getElementById("inputFile").files;
    //Check File is not Empty
    if (selectedFile.length > 0) {
        // Select the very first file from list
        var fileToLoad = selectedFile[0];
        // FileReader function for read the file.
        var fileReader = new FileReader();

        // Onload of file read the file content
        fileReader.onload = function (fileLoadedEvent) {

            base64 = fileLoadedEvent.target.result;
            // Print data in console
            console.log(base64);
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);

    }

}
var b64;
var indice = 0;
function baixar() {

}
var url = "";
function demo1(indice) {
    console.log("Este é o indice:", indice)
    var doc = new jsPDF()
    doc.addPage();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');

    // Making Data URI
    url = apdf[indice];

    var iframe = "<iframe width='100%' height='100%' src='" + db_internados_inicial.data[selecionado - 1].documentos[indice - 1] + "'></iframe>"
    var x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();

}
function salvar() {

    // The Base64 string of a simple PDF file
    b64 = base64;

    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    var bin = b64;
    console.log('File Size:', Math.round(bin.length / 1024), 'KB');
    console.log('PDF Version:', bin.match(/^.PDF-([0-9.]+)/));
    console.log('Create Date:', bin.match(/<xmp:CreateDate>(.+?)<\/xmp:CreateDate>/));
    console.log('Modify Date:', bin.match(/<xmp:ModifyDate>(.+?)<\/xmp:ModifyDate>/));
    console.log('Creator Tool:', bin.match(/<xmp:CreatorTool>(.+?)<\/xmp:CreatorTool>/));

    // Embed the PDF into the HTML page and show it to the user
    var obj = document.createElement('object');
    obj.style.width = '100%';
    obj.style.height = '0pt';
    obj.type = 'application/pdf';
    obj.data = 'data:application/pdf;base64,' + b64;
    document.body.appendChild(obj);

    // Insert a link that allows the user to download the PDF file
    var link = document.createElement('a');

    link.download = 'file.pdf';
    link.href = b64;

    localStorage.setItem('PDF:', b64);





    db_internados_inicial.data[(selecionado) - 1].documentos.push(b64);
    db_internados_inicial.data[(selecionado) - 1].resumo.push(camporesumo.value);
    db_internados_inicial.data[(selecionado) - 1].data.push(campodata.value)
    
    camporesumo = document.getElementById('camporesumo');
    localStorage.setItem('Resumo:', camporesumo.value);
    campodata = document.getElementById("campodata");
    localStorage.setItem('Data:', campodata.value);
}

function criaTabela() {
    var camporesumo = document.getElementById("camporesumo");
    var campodata = document.getElementById("campodata");
    var linha = document.createElement("tr");
    var campo_data = document.createElement("td");
    var campo_resumo = document.createElement("td");
    var campo_pdf = document.createElement("td")

    campo_data.className = "aborda";
    campo_resumo.className = "aduplo";
    campo_pdf.className = "pdf"


    var texto_data = document.createTextNode(campodata.value);
    var texto_resumo = document.createTextNode(camporesumo.value);
    var texto_pdf = document.createElement("button");
    texto_pdf.className = "teste";
    texto_pdf.setAttribute("onclick", "demo1(" + db_internados_inicial.data[selecionado - 1].documentos.length + ")");
    console.log("Este é o indice:", indice)

    campo_data.appendChild(texto_data);
    campo_resumo.appendChild(texto_resumo);
    campo_pdf.appendChild(texto_pdf);
    linha.appendChild(campo_data);
    linha.appendChild(campo_resumo);
    linha.appendChild(campo_pdf);

    var corpo_tabela = document.getElementById("modifica");
    corpo_tabela.appendChild(linha);

}
function init() {
    inicializaComboPacientes();
}
