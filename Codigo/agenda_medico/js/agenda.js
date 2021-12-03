document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');


  var db_horarios = {
    "data": [
      {
          "nome": "João Marcelo da Silva",
          "horario": [
            {
              "data": [
                "2021-12-03"
              ]
              "hora": [
                [
                  "14:30",
                  "15:00"
                ]
              ]
            }
          ]
      },
      {
        "nome": "Frederico Alberto dos Santos",
        "data": "2021-11-08",
        "horario": [
          {
            "hora": "10:00",
            "hora": "11:00"
          }
        ]
      },
      {
        "nome": "Julia de Souza Mendes",
        "data": "2021-11-30",
        "horario": [
          {
            "hora": "16:00",
            "hora": "17:00"
          }
        ]
      }
    ]
  }

  let db = JSON.parse(localStorage.getItem("horario"));
  if (!db)
  {
    db = db_horarios;
    localStorage.setItem("horario",JSON.stringify(db));
  }

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'pt-br',
    initialView: 'timeGridDay',
    nowIndicator: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'addEventButton,title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    customButtons: {
      addEventButton: {
        text: 'Clique para cadastrar sua agenda médica',
        click: function() {
          var dateStr = prompt('Coloque uma data no formato <ANO-MES-DIA>');
          var horas = prompt('Digite o horário em formato <XX:ZZ>');
          var date = new Date(dateStr + 'T00:00:00'); 

          if (!isNaN(date.valueOf())) { 
            calendar.addEvent({
              title: 'Horario disponível',
              start: dateStr+"T"+horas
            });
            
            var novoHorario = {
              medico: document.getElementById("medico").value,
              data: dateStr,
              horario: [
                {
                  horas
                }
              ],
              inicio: dateStr+"T"+horas
            };

            medico[0].pessoa[0].horario.data.push(dateStr);
            medico[0].pessoa[0].horario.horas[0].push(horas);
            var db = JSON.parse(localStorage.getItem("horario"));
            if (db)
            {
              db.data.push(novoHorario);
              localStorage.setItem("horario",JSON.stringify(db));
            }

            alert('Horário adicionado com sucesso!');
          } else {
            alert('Data inválida!');
          }
        }
      }
    }
  });

  let btn = document.getElementById("btnsalvar");
  btn.addEventListener("click",function(){
    let nome = document.getElementById("medico").value;

    let conteudo = `
    <div class="col-12 box">
      <h1>Olá ${nome}</h1>
    </div>`;
    
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = conteudo;
  })
  calendar.render();
});