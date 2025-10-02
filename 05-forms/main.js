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
});