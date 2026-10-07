# Plantas Odette YGG

Catálogo web estático de plantas, sustratos, abonos, amigurumis y arreglos de suculentas.

## Estructura

- `index.html`: estructura semántica y contenido visual.
- `css/style.css`: estilos personalizados y responsive.
- `js/catalogo.js`: productos, filtros, modal, carrito, WhatsApp y galerías.
- `img/productos/`: imágenes locales copiadas desde el prototipo existente.
- `img/amigurumis/` y `img/otros/`: reservadas para futuras imágenes locales.

## Uso

Abre `index.html` en un navegador moderno. Bootstrap 5 se carga desde jsDelivr y el catálogo conserva sus estilos personalizados encima de esa base.

Para una prueba local con servidor estático, ejecuta desde esta carpeta:

```text
py -m http.server 8000
```

Luego visita `http://localhost:8000/`.

## Mantenimiento

La carpeta `catalogo/` es la versión principal y sus archivos separados son la fuente recomendada para futuras modificaciones. Las carpetas duplicadas se conservan por compatibilidad con las rutas existentes, pero cualquier cambio nuevo debe hacerse primero en esta versión y validarse también en las copias que sigan publicándose.

La información del catálogo se conserva en `js/catalogo.js`: no se eliminaron productos, fotografías, precios, descripciones ni acciones de WhatsApp. Las mejoras recientes incluyen carrito consistente por tamaño, tarjetas navegables con teclado, cierre accesible del modal y carrito con `Escape`, navegación directa a los arreglos de suculentas y un responsive más estable en pantallas pequeñas.

## Informe técnico

- Problemas encontrados: datos aplicados mediante varias capas de corrección, duplicación de versiones, imágenes Base64 que aumentan el JavaScript inicial, enlaces externos de Wikimedia sensibles a la conexión y pequeñas carencias de accesibilidad.
- Mejoras implementadas: corrección del precio real en el carrito, estado `aria-hidden` sincronizado, recuperación de foco, cierre con `Escape`, tarjetas accesibles, galería de encargos con rutas válidas, controles responsive y soporte para `prefers-reduced-motion`.
- Rendimiento: se mantienen las imágenes originales y sus referencias para evitar pérdida de calidad. Las galerías usan carga diferida; la conversión futura a WebP/AVIF debe hacerse con comparación visual y respaldo de los originales.
- Recomendaciones: elegir una única versión publicada, extraer gradualmente las imágenes Base64 a archivos optimizados, centralizar el catálogo en un archivo de datos validado y sustituir dependencias externas solo después de disponer de copias locales equivalentes.

## Imágenes

Las imágenes locales del prototipo se conservaron y se copiaron a `img/productos/`. Las imágenes Base64 que siguen dentro de `js/catalogo.js` corresponden al catálogo original, la galería de amigurumis y códigos QR; conviene convertirlas a archivos `.webp` en una etapa posterior con revisión visual y actualización de referencias, porque retirarlas sin comprobar cada uso podría alterar el contenido existente.
