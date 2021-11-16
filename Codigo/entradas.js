
// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = Math.random() * 16; //random number between 0 and 16
      if (d > 0) {
        //Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        //Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
}

//Selecionando o botão de submit
var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
});


/*Objeto teste
const dadosIniciais = {
  pacientes: [
    {
      id: generateUUID(),
      nome: "João Carlos",
      datanascimento: "02/07/1984",
    },
    {
      id: generateUUID(),
      nome: "Amanda Ferreira",
      datanascimento: "18/09/1997",
    },
  ],
};
*/



btn.addEventListener("click", function(){
  let nome = document.querySelector('#nome').value;
  let datanascimento = document.getElementById('nascimento').value;
  let deficiencia = document.getElementById('campo_deficienciaS');
  let alergia = document.getElementById('campo_alergiaS');
  let remedio = document.getElementById('campo_remedioS');
  let dataentrada = document.getElementById('dataentrada').value;
  let horarioentrada = document.getElementById('horarioentrada').value;
  adicionarInternacao(nome,datanascimento,deficiencia,alergia,remedio,dataentrada,horarioentrada);
});

var db_usuario = {};

function adicionarInternacao(nome,datanascimento,deficiencia,alergia,remedio,dataentrada,horarioentrada) {
  let usuario = { 
    "nome": nome, 
    "nascimento": datanascimento,
    "deficiencia": deficiencia.checked,
    "alergia": alergia.checked,
    "remedio": remedio.checked,
    "dataentrada": dataentrada,
    "horarioentrada": horarioentrada};
  localStorage.setItem('usuario', JSON.stringify(usuario));
};


