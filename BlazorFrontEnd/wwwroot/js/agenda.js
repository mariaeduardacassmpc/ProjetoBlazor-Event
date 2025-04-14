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
    const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
    const btn = document.getElementById("btnSaveEvent");
    btn.addEventListener("click", saveEvent);

    document.getElementById("btnDeleteEvent").addEventListener("click", deleteEvent);



    function getFormattedDate(info) {
        var reuslt = "";
        if (dateStr.lengh >= 16) {
            result = dateStr.slice(0, 16);
        }
        else {
            result = dateStr.slice(0, 10) + "T00:00";
        }
    }

    function handleSelectEvent(info)
    {
        document.getElementById('eventModalTitle').innerText = "Adicionar Evento";
        document.getElementById('eventModal_event_id').innerText = "";
        document.getElementById('eventModal_event_allday').innerText = false
        document.getElementById('eventModalTitle_event_title').innerText = "";
        document.getElementById('eventModalTitle_event_description').innerText = "";
        document.getElementById('eventModalTitle_event_end_date').innerText = getFormattedDate(info.startStr)
        document.getElementById('eventModalTitle_event_start_date').innerText = getFormattedDate(info.endStr)
        document.getElementById('btnDeleteEvent').style.visibility = "hidden" 

        eventModal.show();
    }

    function handleEventClick(info)
    {
        info.jsEvent.preventDefault();  

        document.getElementById('eventModalTitle').innerText = "Editar Evento" + info.event.id;
        document.getElementById('eventModal_event_id').value = info.event.id;
        document.getElementById('eventModal_event_allday').value = info.event.allday;
        document.getElementById('eventModalTitle_event_title').value = info.event.title;
        document.getElementById('eventModalTitle_event_description').value = info.event.description;
        document.getElementById('eventModalTitle_event_end_date').value = getFormattedDate(info.event.startStr)
        document.getElementById('eventModalTitle_event_start_date').value = getFormattedDate(info.event.endStr)
        document.getElementById('btnDeleteEvent').style.visibility = "visible"

        eventModal.show();

}
    function handleEventChange() {
        calendar.refetchEvents();
    }

    async function saveEvent() {
        var id = document.getElementById("eventModal_event_id").value;
        var allDay = document.getElementById("eventModal_event_allday").value == "true";
        var start = document.getElementById("eventModal_event_start_date").value;
        var end = document.getElementById("eventModal_event_end_date").value;
        var description = document.getElementById("eventModal_event_description").value;
        var title = document.getElementById("eventModal_event_title".value);


        if (!end) end = null;

        try
        {
            var url = eventsUrl; 
            var httpMethod = "POST";

            if (id.lengh > 0) {
                url = eventsUrl + '/' + id;
                httpMethod = "PUT";
            }

            let response = await fetch(url, {
                method: httpMethod,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, start, end, allDay })
            });

            if (response.ok) {
                eventModal.hide();
                calendar.refetchEvents;
            }
            else {
                alert(error);
            }

        } catch (error) {
            alert(error);
        }
    }

    async function deleteEvent() {
      var id = document.getElementById('eventModal_event_id').value;
        try {
            let response = await fetch(eventsUrl + "/" + id, {
                method: "DELETE"
            });

            if (response.ok) {
                eventModal.hide();
                calendar.refetchEvents();
            }
            else {
                alert("error");
            }
        }
        catch (error) {
            alert(error)
        }
    }
}