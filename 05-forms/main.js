document.addEventListener('DOMContentLoaded', () => {
    /* VARIABLES PARA SELECCIONAR ELEMENTOS DEL DOM */
    const form = document.getElementById('registroForm');
    const nombreInput = document.getElementById('nombreCompleto');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const paisSelect = document.getElementById('pais');
    const terminosCheckbox = document.getElementById('terminos');
    const mensajeExito = document.getElementById('mensajeExito');

    /* AÑADIR EVENT LISTENERS PARA VALIDACIÓN EN TIEMPO REAL */
    nombreInput.addEventListener('input', () => validarCampo(nombreInput, validarNombre));
    emailInput.addEventListener('input', () => validarCampo(emailInput, validarEmail));
    passwordInput.addEventListener('input', () => validarCampo(passwordInput, validarPassword));
    paisSelect.addEventListener('change', () => validarCampo(paisSelect, validarPais));
    terminosCheckbox.addEventListener('change', () => validarTerminos(terminosCheckbox));

    /* MANEJAR EL ENVIO DEL FORMULARIO */
    addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevenir el envio por defecto del formulario

        // Validar todos los campos, una última vez antes de enviar
        const esNombreValido = validarCampo(nombreInput, validarNombre);
        const esEmailValido = validarCampo(emailInput, validarEmail);
        const esPasswordValido = validarCampo(passwordInput, validarPassword);
        const esPaisValido = validarCampo(paisSelect, validarPais);
        const sonTerminosValidos = validarTerminos(terminosCheckbox);

        // Si alguna validación falla, no enviar el formulario
        if (!esNombreValido || !esEmailValido || !esPasswordValido || !esPaisValido || !sonTerminosValidos) {
            console.log("Formulario con errores, no se envía");
            return;
        }

        // Si todas las validaciones pasan, preparar los datos para enviar
        const datosUsuario = {
            name: nombreInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            country: paisSelect.value,
        }

        console.log("Enviando datos del usuario:", datosUsuario);

        // Llamada a la API de reqres.in para simular el registro
        try {
            const respuesta = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'reqres-free-v1'
                },
                body: JSON.stringify(datosUsuario)
            });

            if (!respuesta.ok) {
                throw new Error(`Error en la solicitud: ${respuesta.status}`);
            }

            const data = await respuesta.json();
            console.log("Usuario Registrado Exitosamente:", data);

            // Mostrar mensaje de éxito en la UI
        mensajeExito.textContent = "¡Registro exitoso!, usuario credao con ID: " + data.id;
        mensajeExito.style.display = "block";

        // Limpiar el formulario y las clases de validación
        form.reset();
        document.querySelectorAll('.form-group input, .form-group select').forEach(input => input.classList.remove('success', 'error'));

        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            // Mostrar el mensaje de error en la UI
            mensajeExito.textContent = "Error al registrar el usuario. Por favor, inténtelo de nuevo.";
            mensajeExito.style.display = "block";
            mensajeExito.style.color = "red";
        }
    })
});

