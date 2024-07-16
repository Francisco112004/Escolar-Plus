document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('delivery-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se envíe el formulario por defecto

        // Validar el formulario
        if (validateForm()) {
            // Aquí puedes hacer lo que necesites con los datos del formulario
            // Por ejemplo, enviarlos a un servidor o mostrar un mensaje de confirmación
            alert('Pedido enviado correctamente');
            // Puedes resetear el formulario después de enviarlo
            form.reset();
        } else {
            alert('Por favor completa todos los campos correctamente');
        }
    });

    function validateForm() {
        const nombre = document.getElementById('nombre').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        const pedido = document.getElementById('pedido').value;

        // Validación básica, asegúrate de ajustarla según tus necesidades
        if (nombre.trim() === '' || direccion.trim() === '' || telefono.trim() === '' || pedido.trim() === '') {
            return false;
        }

        return true;
    }
});
