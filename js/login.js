// Lógica del formulario de inicio de sesión.
// Es un login falso: da por válido cualquier dato que se escriba.

document.addEventListener("DOMContentLoaded", function () {
  const formularioLogin = document.querySelector(".formulario form");

  formularioLogin.addEventListener("submit", function (evento) {
    evento.preventDefault(); // evitamos que la página se recargue al enviar

    // Tomamos el usuario escrito; si se deja vacío usamos un nombre genérico
    const campoUsuario = document.getElementById("usuario");
    const nombreUsuario = campoUsuario.value.trim() || "Invitado";

    // Damos por válida la sesión y la guardamos
    iniciarSesion(nombreUsuario);

    // Con la sesión iniciada, llevamos al usuario a crear un post
    window.location.href = "nuevo-post.html";
  });
});
