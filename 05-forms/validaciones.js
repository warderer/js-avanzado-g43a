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
            : { valido: true, mensaje: "" };
}