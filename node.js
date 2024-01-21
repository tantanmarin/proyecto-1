// Crear una lista de contactos con datos predefinidos
let listaContactos = [
  { nombre: "Juan", apellido: "Pérez" },
  { nombre: "María", apellido: "González" },
  { nombre: "Carlos", apellido: "López" }
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombre, apellido) {
  listaContactos.push({ nombre, apellido });
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombre, apellido) {
  listaContactos = listaContactos.filter(con