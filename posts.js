// Guardar y leer los posts creados por el usuario.
// Los posts se guardan en localStorage: permanecen aunque se cierre el navegador.

// Clave con la que guardamos la lista de posts
const CLAVE_POSTS = "posts";

// Devuelve la lista de posts guardados (un array vacío si todavía no hay ninguno)
function obtenerPosts() {
  const datosGuardados = localStorage.getItem(CLAVE_POSTS);
  return datosGuardados ? JSON.parse(datosGuardados) : [];
}

// Añade un nuevo post a la lista y la vuelve a guardar
function guardarPost(post) {
  const posts = obtenerPosts();
  posts.push(post);
  localStorage.setItem(CLAVE_POSTS, JSON.stringify(posts));
}

// Devuelve la fecha de hoy con formato "22 de junio de 2026"
function obtenerFechaHoy() {
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const hoy = new Date();
  return hoy.getDate() + " de " + meses[hoy.getMonth()] + " de " + hoy.getFullYear();
}
