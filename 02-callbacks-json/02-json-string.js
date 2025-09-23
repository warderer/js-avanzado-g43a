const miJSONString = `{
    "nombre": "Curso de JavaScript Avanzado",
    "instructor": "César Guerra",
    "duracionHoras": 40,
    "temas": [
        "Asincronía",
        "Callbacks",
        "JSON",
        "Promises",
        "Async/Await",
        "Node Js"
    ],
    "esOnline": true,
    "metadatos": {
        "nivel": "Intermedio",
        "version": 1.0,
        "fechaLanzamiento": "2025-22-09"
    },
    "precio": null
}`

console.log('Tipo de dato:', typeof miJSONString);
console.log(miJSONString);

console.log('--- ------------ ---');

/* Convierto el JSON a Objeto de JS */
// JSON.parse() convierte un string JSON a un objeto de JavaScript
const miObjetoJS = JSON.parse(miJSONString);
console.log('Tipo de dato:', typeof miObjetoJS);
console.log(miObjetoJS);

console.log('--- ------------ ---');

// Como ya es un objeto de JS, puedo acceder a sus propiedades
console.log('Nombre del curso:', miObjetoJS.nombre);
console.log('Duración (horas):', miObjetoJS.duracionHoras);
console.log('Instructor:', miObjetoJS.instructor);