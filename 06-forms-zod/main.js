import { schema } from './schema.js';
import { limpiarErrores, mostrarErrores } from './errors-display.js';

document.addEventListener('DOMContentLoaded', () => {
    /* VARIABLES PARA SELECCIONAR ELEMENTOS DEL DOM */
    const form = document.getElementById('registroForm');
    const mensajeExito = document.getElementById('mensajeExito');

    /* MANEJAR EL ENVIO DEL FORMULARIO */
    addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevenir el envio por defecto del formulario
        limpiarErrores(); // Limpiar errores previos

        // 1. Recolectar los datos del formulario
        const formData = new FormData(form);

        const datosUsuario = {
            name: formData.get('nombre'),
            email: formData.get('email'),
            password: formData.get('password'),
            country: formData.get('pais'),
            terminos: formData.get('terminos')
        }

        // 2. Validar los datos usando ZOD
        const resultadoValidacion = schema.safeParse(datosUsuario);
        console.log(resultadoValidacion);

        // 3. Verificar si la validación fue exitosa
        if (!resultadoValidacion.success) {
            // Si la validación falla, mostrar los errores en la UI
            console.error("Errores de Validación:", resultadoValidacion.error?.issues);
            mostrarErrores(resultadoValidacion.error?.issues);
            return; // Detenemos el proceso de envío del formulario
        }

        // 4. Si la validación es exitosa, los datos estan en resutadoValidacion.data
        const datosValidados = resultadoValidacion.data;

        console.log("Validación exitosa:", datosValidados);

        // Marcamos todos los campos como exitosos en la UI
        document.querySelectorAll('.form-group input, .form-group select')
            .forEach(input => {
                if (input.type !== 'checkbox') {
                    input.classList.add('success');
                }
            })

        // Llamada a la API de jsonplaceholder para simular el registro
        try {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosValidados)
            });

            if (!respuesta.ok) {
                throw new Error(`Error en la solicitud: ${respuesta.status}`);
            }

            const data = await respuesta.json();
            console.log("Usuario Registrado Exitosamente:", data);

            // Mostrar mensaje de éxito en la UI
            mensajeExito.textContent = "¡Registro exitoso!, usuario creado con ID: " + data.id;
            mensajeExito.style.display = "block";

            // Limpiar el formulario y las clases de validación
            form.reset();
            limpiarErrores();

        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            // Mostrar el mensaje de error en la UI
            mensajeExito.textContent = "Error al registrar el usuario. Por favor, inténtelo de nuevo.";
            mensajeExito.style.display = "block";
            mensajeExito.style.color = "red";
        }
    })
});

