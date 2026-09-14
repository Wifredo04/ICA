# [Tu Marca] — Sitio web de portafolio y blog

Sitio de una sola vez (HTML, CSS y JavaScript simple, sin frameworks)
para mostrar trabajos de resina epóxica y porcelanato líquido: pisos,
mesas, paredes en 3D, cuadros y bisutería.

## Qué hay en esta carpeta

| Archivo / carpeta          | Qué es                                                  |
|-----------------------------|----------------------------------------------------------|
| `index.html`                | Página de inicio                                         |
| `trabajos.html`              | Portafolio: los trabajos organizados por categoría       |
| `plantilla-trabajo.html`     | Plantilla que duplicas para cada trabajo nuevo           |
| `sobre.html`                 | Sobre ti / tu oficio                                     |
| `contacto.html`              | WhatsApp, Instagram y correo                             |
| `css/estilos.css`            | Todos los estilos visuales del sitio (un solo archivo)   |
| `js/script.js`               | Menú de celular + año automático en el pie de página     |
| `img/`                       | Imágenes (por ahora, solo las de relleno)                |
| `sitemap.xml`                | Mapa del sitio para Google                                |
| `robots.txt`                 | Permiso de rastreo para los buscadores                    |

## Antes de publicar: lista de reemplazos pendientes

Busca estos textos en todos los archivos (en VS Code: `Ctrl+Shift+F` /
`Cmd+Shift+F` para "buscar en todos los archivos") y cámbialos por tus
datos reales:

- [ ] `[Tu Marca]` → el nombre real de tu negocio
- [ ] `18090000000` (dentro de los enlaces `wa.me`) → tu número de WhatsApp, con código de país y sin espacios ni signos
- [ ] `tu_usuario` (en los enlaces de Instagram) → tu usuario real
- [ ] `correo@tudominio.com` → tu correo real
- [ ] `tu-usuario.github.io/nombre-repo` → la dirección real de tu sitio (la sabrás en cuanto actives GitHub Pages)
- [ ] Las imágenes `img/placeholder.svg` → tus fotos reales (ver más abajo)

## Cómo agregar fotos reales

1. Copia tus fotos a la carpeta `img/` (nombres simples y sin espacios ni tildes: `piso-sala-01.jpg`, no `Piso Sala 01.jpg`).
2. En el HTML, busca `src="img/placeholder.svg"` y cámbialo por el nombre de tu archivo, por ejemplo `src="img/piso-sala-01.jpg"`.
3. Actualiza también el texto `alt="..."` de esa imagen para que describa la foto real (esto ayuda mucho al SEO).

## Cómo publicar un trabajo nuevo

1. Duplica `plantilla-trabajo.html` y renómbralo (ej: `trabajo-piso-enero.html`).
2. Edita los bloques marcados `EDITA ESTO` dentro de ese archivo.
3. Borra la línea `<meta name="robots" content="noindex">` de ese archivo nuevo (esa línea es solo para que la plantilla en blanco no se indexe).
4. En `trabajos.html`, dentro de la categoría correspondiente, copia un bloque `<article class="tarjeta-trabajo">` y cambia su foto, título, descripción y el `href` para que apunte a tu archivo nuevo.
5. (Opcional pero recomendado) Agrega la nueva página a `sitemap.xml`.

## Cómo subir los cambios a GitHub (siempre los mismos 3 pasos)

En la terminal de VS Code, dentro de la carpeta del proyecto:

```
git add .
git commit -m "Describe aquí qué cambiaste"
git push
```

## Cómo ver el sitio en tu computadora antes de subirlo

En VS Code, instala la extensión **"Live Server"** (búscala en el ícono
de piezas de rompecabezas de la barra lateral). Con el proyecto abierto,
clic derecho sobre `index.html` → **"Open with Live Server"**. Se abrirá
en tu navegador y se actualiza solo cada vez que guardas un cambio.
