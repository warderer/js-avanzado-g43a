/* Importamos el JSON con Common JS */
const cursos = require('./cursos.json');

console.log(cursos);
console.log('Tipo de dato:', typeof cursos);

console.log('--- ------------ ---');

// Accedemos a los datos del curso
console.log(cursos[0].nombre);
console.log(cursos[0].instructor);
console.log(cursos[0].temas.join(', '));

// Agregar un nuevo curso
cursos.push({
    nombre: "Curso de Node.js Avanzado",
    instructor: "Diego Garcia",
    duracionHoras: 100,
    temas: [
        "Node.js",
        "Express",
        "Bases de Datos",
        "APIs",
        "Autenticación",
        "Despliegue"],
    esOnline: true,
    precio: 199.99
})

console.log(cursos[3])