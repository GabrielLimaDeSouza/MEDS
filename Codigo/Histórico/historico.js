var paciente = [{
    pessoa: [

        {
            nome: "Julio Cesar",
            hospital: "Santa Casa",
            permitido: "001",
            documentos: [
                
            ],
            resumo: [
                
            ],
            agenda: {
                dia: [
                    "2021-12-02",
                    "2021-12-02"
                ],
                hora: [

                    ["10:10", "12:12"],
                    ["55:55", "55:55"]
                ]
            }

        },
        {
            nome: "Marcos Souza",
            hospital: "São Judas",
            permitido: "002",
            documentos: [

            ],
            resumo: [
            ],
            agenda: {
                dia: [
                    "05/06/21",
                ],
                hora: [
                    ["17:30"],
                    ["10:10", "12:12"]
                ]

            }

        }]
}]

var apdf = [

];



function inicializaComboPacientes() {
    var selectpacientes = document.getElementById("campopaciente");
    for (i = 0; i < paciente[0].pessoa.length; i++) {
        var opt = document.createElement('option');
        opt.value = paciente[0].pessoa[i].nome;
        opt.innerHTML = paciente[0].pessoa[i].nome;
        selectpacientes.appendChild(opt);
    }

    var pacientelocal = "";


    campopaciente = document.getElementById('campopaciente');
    campopaciente.addEventListener('change', function () {
        console.log(campopaciente.value)
        controleContagem = campopaciente.value
        pacientelocal = campopaciente
    })


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
var indice=0;
function baixar() {
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


}
var url = "";
function demo1(indice) {
    console.log("Este é o indice:",indice)
    var doc = new jsPDF()
    doc.addPage();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');

    // Making Data URI
    url = apdf[indice];

    var iframe = "<iframe width='100%' height='100%' src='" + paciente[0].pessoa[campopaciente.selectedIndex-1].documentos[indice-1] + "'></iframe>"
    var x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();

}
function salvar() {
    paciente[0].pessoa[(campopaciente.selectedIndex) - 1].documentos.push(b64);
    paciente[0].pessoa[(campopaciente.selectedIndex) - 1].resumo.push(camporesumo.value);
    campopaciente = document.getElementById("campopaciente");
    localStorage.setItem('Paciente:', campopaciente.value);
    camporesumo = document.getElementById('camporesumo');
    localStorage.setItem('Resumo:', camporesumo.value);
    campodata = document.getElementById("campodata");
    localStorage.setItem('Data:', campodata.value);
}

function criaTabela() {
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
    texto_pdf.setAttribute("onclick","demo1("+paciente[0].pessoa[campopaciente.selectedIndex-1].documentos.length+")");
    console.log("Este é o indice:",indice)

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
    inicializaComboHistorico();
}
