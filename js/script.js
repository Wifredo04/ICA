/* =============================================================
   SCRIPT.JS
   Este es el único archivo JavaScript del sitio. Hace apenas dos
   cosas, ambas pequeñas a propósito: abrir/cerrar el menú en
   celular, y escribir el año actual en el pie de página. Todo lo
   demás del sitio (colores, textos, enlaces entre páginas) funciona
   sin necesidad de JavaScript — así, si algo falla aquí, el sitio
   sigue siendo perfectamente usable.
   ============================================================= */

/*
  'DOMContentLoaded' es un aviso que el navegador dispara en cuanto
  terminó de leer todo el HTML de la página (pero sin esperar a que
  carguen las imágenes). Envolvemos nuestro código dentro de esto
  para asegurarnos de que el botón y el menú YA existen en la
  página antes de intentar buscarlos.
*/
document.addEventListener('DOMContentLoaded', function () {

  /* -----------------------------------------------------------
     1. MENÚ MÓVIL
     ----------------------------------------------------------- */

  // Busca en la página el botón de hamburguesa y el menú de navegación,
  // usando los mismos "id" que escribimos en el HTML.
  var botonMenu = document.getElementById('boton-menu');
  var navPrincipal = document.getElementById('nav-principal');

  // Solo seguimos si ambos elementos existen en esta página
  // (evita errores si algún día alguna página no tiene menú).
  if (botonMenu && navPrincipal) {
    botonMenu.addEventListener('click', function () {
      // .toggle() agrega la clase si no está, o la quita si ya está.
      // Esa clase ("nav-visible") es la que en estilos.css hace
      // que el menú pase de escondido a visible.
      navPrincipal.classList.toggle('nav-visible');

      // Actualiza aria-expanded (true/false) para que los lectores
      // de pantalla anuncien correctamente si el menú está abierto.
      var estaAbierto = navPrincipal.classList.contains('nav-visible');
      botonMenu.setAttribute('aria-expanded', estaAbierto);
    });
  }

  /* -----------------------------------------------------------
     2. AÑO AUTOMÁTICO EN EL PIE DE PÁGINA
     Así el "© 2026 [Tu Marca]" nunca queda desactualizado: se
     escribe solo, tomando el año de la computadora de quien
     visita el sitio.
     ----------------------------------------------------------- */
  var espacioAnio = document.getElementById('anio');

  if (espacioAnio) {
    espacioAnio.textContent = new Date().getFullYear();
  }

});
