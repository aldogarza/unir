// Muestra en el blog los posts guardados en el navegador,
// junto a los posts estáticos que ya están escritos en el HTML.

document.addEventListener("DOMContentLoaded", function () {
  const contenedorPosts = document.querySelector("main");
  const postsGuardados = obtenerPosts();

  // Recorremos los posts del más viejo al más nuevo y los vamos colocando
  // al principio del contenedor. Así el último publicado queda arriba del todo,
  // por encima de los posts estáticos.
  postsGuardados.forEach(function (post) {
    const articulo = crearArticuloPost(post);
    contenedorPosts.prepend(articulo);
  });
});

// Crea un <article> con la misma estructura y clases que los posts estáticos.
// Usamos textContent (no innerHTML) para que el texto del usuario no se interprete como HTML.
function crearArticuloPost(post) {
  const articulo = document.createElement("article");
  articulo.className = "post";

  const cabecera = document.createElement("header");
  cabecera.className = "post-cabecera";

  const titulo = document.createElement("h2");
  titulo.className = "post-titulo";
  titulo.textContent = post.titulo;

  const fecha = document.createElement("time");
  fecha.className = "post-fecha";
  fecha.textContent = post.fecha;

  const contenido = document.createElement("p");
  contenido.className = "post-contenido";
  contenido.textContent = post.contenido;

  cabecera.appendChild(titulo);
  cabecera.appendChild(fecha);
  articulo.appendChild(cabecera);
  articulo.appendChild(contenido);

  return articulo;
}
