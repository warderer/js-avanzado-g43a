// Paso #1: Importar el módulo que acabamos de instalar: axios
const axios = require('axios');

// Paso #2: Definir una constante con la URL de la API
const API_URL = 'http://api.open-notify.org/astros.json';

// Paso #3: Crear una función asíncrona para obtener los datos de la API
const getAstronauts = async () => {
    try {
        console.log('Buscando datos de astronautas en el espacio...');

        const response = await axios.get(API_URL);
        const astronauts = response.data.people;
        const numberOfAstronauts = response.data.number;

        console.log('✅ Éxito! Astronautas en el espacio:');
        console.log(`Actualmente hay ${numberOfAstronauts} astronautas en el espacio:`);
        console.log('Sus nombres son:');

        // Imprimir el arreglo de astronautas
        astronauts.forEach((astronaut) => {
            console.log(`- ${astronaut.name} a bordo del ${astronaut.craft}`);
        });

    } catch (error) {
        console.error('❌ Error al obtener los datos:', error.message);
    }
}

// Paso #4: Llamar a la función para ejecutar el código
getAstronauts();