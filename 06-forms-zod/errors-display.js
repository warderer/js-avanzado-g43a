/* Funciones Auxiliares para la UI */

// Limpiar TODOS los mensajes de error y estilos de los campos.
export function limpiarErrores() {
    const errorSpan = document.querySelectorAll(".error-text, .error-text-inline");
    errorSpan.forEach(span => span.textContent = ""); // Limpiar todos los mensajes de error

    const inputs = document.querySelectorAll('.form-group input, .form-group select');
    inputs.forEach(input => input.classList.remove('error', 'success')); // Limpiar todas las clases de error y success
}

// Mostrar errores de validación de ZOD en los campos correspondientes

export function mostrarErrores(issues) {
    issues.forEach(issue => {
        const inputId = issue.path[0]; // Obtener el ID del input desde el path del issue
        const input = document.getElementById(inputId);

        if (input) {
            input.classList.remove('success');
            input.classList.add('error');

            const errorSpan = input.parentElement.querySelector('.error-text-inline) || input.nextElementSibling;')
            if (errorSpan) {
                errorSpan.textContent = issue.message; // Mostrar el mensaje de error
            }
        }
    })
}