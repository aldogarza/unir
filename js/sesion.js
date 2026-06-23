// Clave con la que guardamos al usuario que tiene la sesión iniciada
const CLAVE_SESION = "usuarioActivo";

// Guarda el usuario que inicia sesión
function iniciarSesion(nombreUsuario) {
  sessionStorage.setItem(CLAVE_SESION, nombreUsuario);
}

// Cierra la sesión actual
function cerrarSesion() {
  sessionStorage.removeItem(CLAVE_SESION);
}

// Devuelve el usuario activo, o null si no hay nadie con sesión iniciada
function obtenerUsuario() {
  return sessionStorage.getItem(CLAVE_SESION);
}

// Indica (true/false) si hay una sesión iniciada
function haySesion() {
  return obtenerUsuario() !== null;
}

// Cambia el primer botón de la barra según haya o no sesión iniciada
function actualizarBotonSesion() {
  const botonSesion = document.getElementById("boton-sesion");
  if (!botonSesion) return; // por si alguna página no tuviera ese botón

  if (haySesion()) {
    // Con sesión iniciada: el botón sirve para cerrar sesión
    botonSesion.textContent = "Cerrar sesión";
    botonSesion.href = "#";
    botonSesion.addEventListener("click", function (evento) {
      evento.preventDefault();
      cerrarSesion();
      window.location.href = "index.html"; // volvemos al inicio
    });
  } else {
    // Sin sesión: el botón lleva a la página de inicio de sesión
    botonSesion.textContent = "Iniciar sesión";
    botonSesion.href = "login.html";
  }
}

// Al cargar cualquier página, ajustamos el botón de la barra
document.addEventListener("DOMContentLoaded", actualizarBotonSesion);
