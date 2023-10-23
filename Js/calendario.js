document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Mejorar mi fluidez al hablar', start: '2023-10-10', end: '2023-10-14'  },
            { title: 'Practicar frente al espejo', date: '2023-10-10'},
            { title: 'Expon algo de tu interés frente a tus amigos', date: '2023-10-12'},
            { title: 'Evento 2', start: '2023-10-15', end: '2023-10-18' }
        ],
        editable: true,
        eventClick: function(info) {
            var newTitle = prompt("Editar título del evento:", info.event.title);
            if (newTitle) {
                info.event.setProp('title', newTitle);
            }
        },
        eventDrop: function(info) {
            alert(info.event.title + " se ha movido a " + info.event.start.toISOString());
            // Aquí podrías hacer una llamada AJAX para actualizar la fecha del evento en tu base de datos, por ejemplo.
        }
    });
    calendar.render();
});
