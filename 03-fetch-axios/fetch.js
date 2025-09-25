//1. Obtener las referencias a los elementos del DOM
const boton = document.getElementById('btn-cargar');
const contenedorResultado = document.getElementById('resultado');

//2. Agregar un evento al botón para cargar los datos
boton.addEventListener('click', obtenerDatosConFetch);

function obtenerDatosConFetch() {
    console.log('Cargando datos con Fetch...')
    contenedorResultado.innerHTML = '<p>Cargando datos...</p>';
    const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

    //3. Realizar la petición con Fetch
    fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        mostrarDatos(data);
        // console.log(data);
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error.message);
        contenedorResultado.innerHTML = `<p style="color: red;">Error al cargar los datos: ${error.message}</p>`;
    })
}

function mostrarDatos(datos) {
    contenedorResultado.innerHTML = ''; // Limpiar el contenedor antes de mostrar nuevos datos

    datos.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        contenedorResultado.appendChild(postElement);
    })
}