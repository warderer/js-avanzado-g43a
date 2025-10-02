console.log("Validaciones cargadas");

// Función generica que valida los inputs del formulario
function validarCampo(input, funcionValidacion) {
    const errorSpan = input.nextElementSibling; // Retorna el sigiuente elemento hermano del input, que deberia ser el span de error
    const { valido, mensaje } = funcionValidacion(input.value);
    if (valido) {
        input.classList.remove("error");
        input.classList.add("success");
        errorSpan.textContent = ""; // Limpiar mensaje de error
    } else {
        input.classList.remove("success");
        input.classList.add("error");
        errorSpan.textContent = mensaje; // Mostrar mensaje de error
    }
    return valido; // Retorna true si el campo es valido, false si no lo es
}

function validarNombre(nombre) {
    return nombre.length  === 0
        ? { valido: false, mensaje: "El nombre es obligatorio." }
        : nombre.length < 3
            ? { valido: false, mensaje: "El nombre debe tener al menos 3 caracteres" }
            : { valido: true };
}

function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.length === 0
        ? { valido: false, mensaje: "El email es obligatorio." }
        : !regexEmail.test(email)
            ? { valido: false, mensaje: "El email no es válido." }
            : { valido: true };
}

function validarPassword(password) {
    switch (true) {
        case password.length === 0:
            return { valido: false, mensaje: "La contraseña es obligatoria." };
        case password.length < 8:
            return { valido: false, mensaje: "La contraseña debe tener al menos 8 caracteres." };
        default:
            return { valido: true };
    }
}

function validarPais(pais) {
    return pais === ""
        ? { valido: false, mensaje: "Debe seleccionar un país." }
        : { valido: true };
}

function validarTerminos(inputTerminos) {
    const errorSpan = inputTerminos.parentElement.querySelector(".error.text-inline")
    errorSpan.textContent = !inputTerminos.checked
        ? "Debe aceptar los términos y condiciones."
        : "";
    return inputTerminos.checked; // Retorna true si el checkbox está marcado, false si no lo está
}