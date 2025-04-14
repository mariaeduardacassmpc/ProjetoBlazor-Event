function loadAgenda(eventsUrl) {
    var calendarEl = document.getElementById("eventAgendaId");
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        themeSystem: 'Yeti',
        contentHeight: "auto",
        events: eventsUrl,
        selectable: true,
        editable: true,
        locale: 'pt',
        buttonText: {
            prev: 'Anterior',
            next: 'Seguinte',
            month: 'Mês',
            today: 'Hoje',
            week: 'Semana',
            day: 'dia',
            list: 'Lista',
        },
        select: handleSelectEvent,
        eventClick: handleEventClick,
        eventChange: handleEventChange,
    });
    calendar.render();
    const eventModal = new botstrap.Modal(document.getElementById('eventModal'));

    function handeSelectEvent(info) {
        document.getElementById('eventModalTitle').innerText = "Adicionar Evento";
        document.getElementById('eventModal_event_id').innerText = "Adicionar Evento";
        document.getElementById('eventModal_event_allday').innerText = "Adicionar Evento";
        document.getElementById('eventModalTitle_event_title').innerText = "Adicionar Evento";
        document.getElementById('eventModalTitle_event_description').innerText = "Adicionar Evento";
        document.getElementById('eventModalTitle_event_description').innerText = "Adicionar Evento";
        document.getElementById('eventModalTitle_event_description').innerText = "Adicionar Evento";


        eventModal.show();
    }
    function handleEventClick() { }
    function handleEventChange() { }
}