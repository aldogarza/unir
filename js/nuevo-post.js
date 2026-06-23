// Protege la página de "nuevo post" y guarda el post que se crea.

document.addEventListener("DOMContentLoaded", function () {
  // Sin sesión iniciada no se puede publicar: avisamos y volvemos al login
  if (!haySesion()) {
    alert(
      "Para crear un nuevo post necesitas iniciar sesión.\n\n" +
      "Puedes introducir cualquier usuario y contraseña: el acceso es de demostración " +
      "y no realiza ninguna validación. Te llevamos a la página de inicio de sesión."
    );
    window.location.href = "login.html";
    return;
  }

  const formularioPost = document.querySelector(".formulario form");

  formularioPost.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Leemos y limpiamos lo que escribió el usuario
    const titulo = document.getElementById("titulo").value.trim();
    const contenido = document.getElementById("contenido").value.trim();

    // El post debe tener título y contenido
    if (titulo === "" || contenido === "") {
      alert("Escribe un título y un contenido para publicar.");
      return;
    }

    // Construimos el objeto del nuevo post
    const nuevoPost = {
      id: Date.now(),            // identificador único basado en la hora
      titulo: titulo,
      contenido: contenido,
      fecha: obtenerFechaHoy(),  // fecha en texto legible
      autor: obtenerUsuario()    // quién lo escribió
    };

    // Lo guardamos en el navegador
    guardarPost(nuevoPost);

    alert("Post guardado correctamente.");
    window.location.href = "index.html"; // volvemos al blog
  });
});
