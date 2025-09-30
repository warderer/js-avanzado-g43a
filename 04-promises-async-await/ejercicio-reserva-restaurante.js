// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (mesasSolicitadas <= mesasDisponibles) {
            resolve(`Hay disponibilidad para ${mesasSolicitadas} mesas.`);
        } else {
            reject(`No hay suficientes mesas disponibles para ${mesasSolicitadas} personas.`);
        }
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const exitoEnvio = Math.random() > 0.2;  // 80% de probabilidad de éxito
        if (exitoEnvio) {
            resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
        } else {
            reject(`Error al enviar el correo de confirmación a ${nombreCliente}.`);
        }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log(`Verificando disponibilidad de mesas para ${nombreCliente}...`);
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
    console.log(disponibilidad);
    console.log(`Enviando confirmación de reserva de ${nombreCliente}...`);
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);

    // Completa el flujo aquí: Si hay mesas disponibles, llama a la función para enviar la confirmación.
    // Si no hay mesas disponibles o si ocurre un error, captura el error.
  } catch (error) {
    console.log(`Error en Reserva de ${nombreCliente}: ${error}`);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3);  // Intenta hacer una reserva para 3 personas
hacerReserva("Ana Gómez", 6);  // Intenta hacer una reserva para 6 personas (debería fallar)