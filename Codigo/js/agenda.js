document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');


  var db_horarios = {
    "data": [
        {
            "nome": "João Marcelo da Silva",
            "data": "2021-12-01",
            "horario": "08:00",
            "inicio": "2021-12-01T08:00"
        },
        {
            "nome": "Isabel Lopes dos Reis",
            "data": "2021-11-01",
            "horario": "15:00",
            "inicio": "2021-11-01T15:00"
        },
        {
            "nome": "Julia de Souza Mendes",
            "data": "2021-10-15",
            "horario": "17:00",
            "inicio": "2021-10-15T17:00"
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
              date: dateStr,
              start: dateStr+"T"+horas
            });
            
            var novoHorario = {
              medico: document.getElementById("medico").value,
              data: dateStr,
              horario: horas,
              inicio: dateStr+"T"+horas
            };

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
