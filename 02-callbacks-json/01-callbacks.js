/* -- CALLBACKS -- */
// Un callback es una función que se pasa a otra función como argumento y se espera que la función contenedora ejecute el callback en algún momento.

// Ejemplo de 2 funciones a usar en un callback

function miCallbackDeExito(resultado) {
    console.log(`✅ ¡La operación fue exitosa!, Resultado: ${resultado}`);
}

function miCallbackDeError(mensajeError) {
    console.error(`❌ ¡Hubo un error en la operación!, Error: ${mensajeError}`);
}

// Función callback
function procesarDatos(dato, callbackExito, callbackError) {
    console.log(`Procesando dato: ${dato}`); // Simula procesamiento

    if (dato !== null && dato !== undefined && dato !== '') {
        setTimeout(() => {
            const datoProcesado = dato.toUpperCase(); // Simula dato procesado
            callbackExito(datoProcesado); // Llama al callback de éxito
        }, 1000); // Simula operación asíncrona
    } else {
        // Simulamos un error si el dato es inválido
        setTimeout(() => {
            callbackError('Dato inválido proporcionado'); // Llama al callback de error
        }, 500);
    }
}

// Ejemplo #1: Callback de éxito
procesarDatos('hola mundo', miCallbackDeExito, miCallbackDeError);

// Ejemplo #2: Callback de error
procesarDatos('', miCallbackDeExito, miCallbackDeError);