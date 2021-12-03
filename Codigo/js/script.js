document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

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
          var horario = prompt('Digite o horário em formato <XX:ZZ>');
          var date = new Date(dateStr + 'T00:00:00'); 

          if (!isNaN(date.valueOf())) { 
            calendar.addEvent({
              title: 'Horario disponível',
              start: dateStr+"T"+horario
            });
            
            var novoHorario = [
              {
                medico: document.getElementById("medico").value,
                data: dateStr,
                horario: [
                  {
                    horario
                  }
                ],
                inicio: dateStr+"T"+horario
              }
            ];

            var db = JSON.parse(localStorage.getItem("horario"));
            if (!db)
            {
              db = novoHorario;
              localStorage.setItem("horario",JSON.stringify(db));
            }
            else
            {
              db.push(novoHorario);
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