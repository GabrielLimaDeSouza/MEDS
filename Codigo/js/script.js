document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    let btn = document.getElementById("btnsubmit");
    btn.addEventListener("click", function () {
        let campoNome = document.getElementById("medico");
        let campoData = document.getElementById("dia");
        let campoHorarioInicio = document.getElementById("horario-inicio");
        let campoHorarioFinal = document.getElementById("horario-final");
        let nomeMedico = campoNome.value;
        let data = campoData.value;
        let inicio = campoHorarioInicio.value;
        let fim = campoHorarioFinal.value;

        let novoCadastro = {
            "nome": nomeMedico,
            "data": data,
            "inicio": inicio,
            "fim": fim
        }

        localStorage.setItem("cadastro", JSON.stringify(novoCadastro));
    })

    var db = JSON.parse(localStorage.getItem('cadastro'));
    console.log(db);

    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'pt-br',
      initialDate: db.data,
      initialView: 'timeGridDay',
      nowIndicator: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
          title: 'Horários disponíveis',
          start: db.data+"T"+db.inicio,
          end: db.data+"T"+db.fim
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2020-09-28'
        }
      ]
    });

    calendar.render();
  });