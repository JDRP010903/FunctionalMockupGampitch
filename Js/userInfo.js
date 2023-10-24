document.addEventListener('DOMContentLoaded', function() {

    // Función para manejar el comportamiento del menú desplegable
    function toggleMenu(toggleElement, menuElement) {
        toggleElement.addEventListener('click', function(e) {
            e.preventDefault();
            if (menuElement.style.display === 'none' || menuElement.style.display === '') {
                menuElement.style.display = 'block';
            } else {
                menuElement.style.display = 'none';
            }
        });
    }

    // Función para el comportamiento del offcanvas de notificaciones
    function toggleNotificationsOffcanvas() {
        document.querySelector('.notifications-link').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('notificationsMenuOffCanvas').style.right = '0';
        });

        document.getElementById('closeNotificationsOffcanvas').addEventListener('click', function() {
            document.getElementById('notificationsMenuOffCanvas').style.right = '-400px';
        });
    }

    // Usuario
    let userToggle = document.querySelector('.user-link');
    let userMenu = document.getElementById('userMenuOverlay');
    toggleMenu(userToggle, userMenu);

    // Configuración
    let settingsToggle = document.querySelector('.settings-link');
    let settingsMenu = document.getElementById('settingsMenuOverlay');
    toggleMenu(settingsToggle, settingsMenu);

    // Notificaciones - Usando el offcanvas
    toggleNotificationsOffcanvas();

});
