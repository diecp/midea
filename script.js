document.addEventListener('DOMContentLoaded', () => {
    function updateDateTime() {
        const now = new Date();
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

        document.getElementById('date').textContent = now.toLocaleDateString('es-ES', dateOptions);
        document.getElementById('time').textContent = now.toLocaleTimeString('es-ES', timeOptions);
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            document.getElementById('location-info').textContent = 'La geolocalización no está soportada por este navegador.';
        }
    }

    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        document.getElementById('location-info').textContent = `Ubicación: Lat ${latitude.toFixed(2)}, Lon ${longitude.toFixed(2)}`;
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                document.getElementById('location-info').textContent = 'Permiso para acceder a la ubicación denegado.';
                break;
            case error.POSITION_UNAVAILABLE:
                document.getElementById('location-info').textContent = 'Información de ubicación no disponible.';
                break;
            case error.TIMEOUT:
                document.getElementById('location-info').textContent = 'El tiempo de espera para obtener la ubicación expiró.';
                break;
            case error.UNKNOWN_ERROR:
                document.getElementById('location-info').textContent = 'Error desconocido.';
                break;
        }
    }

    setInterval(updateDateTime, 1000);
    getLocation();
});
