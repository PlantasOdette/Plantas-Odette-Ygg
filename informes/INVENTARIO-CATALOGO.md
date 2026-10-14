# Inventario técnico del catálogo publicado

**Fecha:** 2026-10-12  
**Alcance:** página de la raíz (`index.html`) y sus recursos cargados (`js/catalogo.js`, `vendor/bootstrap/js/bootstrap.bundle.min.js`, CSS y `img/`). Se abrió el catálogo completo en un servidor local de solo lectura. No se modificó ningún archivo existente ni se incluyó contenido Base64 en este informe.

## Alcance y cautelas

- GitHub Pages publica la versión cuyo punto de entrada es el `index.html` de la raíz. `catalogo/` está vacío y no contiene otra copia publicada.
- El árbol local tiene **91 eliminaciones y 9 archivos nuevos sin seguimiento**. Por ello, los estados HTTP de imágenes indicados abajo describen el árbol de trabajo local y no prueban que la publicación remota tenga los mismos 404. Ninguno de esos cambios se restauró ni se limpió.
- La página muestra **167 productos**. Los objetos fuente no tienen un campo `id` estable; el número `#` de la tabla es la posición/índice de ejecución usada para abrir cada ficha, no un identificador de negocio.
- La matriz literal de `catalogo.js` tiene campos `n`, `c`, `care`, `img`, `water`, `p` y `sizes`; la página combina esa matriz con transformaciones y productos añadidos. `fichas-botanicas.js` no es cargado por el `index.html` raíz.
- La columna «Descripción» registra la existencia y longitud del texto `care` mostrado en la ficha, no duplica el texto íntegro. El texto fuente permanece en `js/catalogo.js`; el contenido codificado de las imágenes no se copia.

## Totales

| Categoría visible | Productos |
|---|---:|
| 🌿 Interior | 38 |
| 🌳 Exterior | 52 |
| 🌱 Huerto y medicinales | 7 |
| 🌵 Suculentas | 32 |
| 🍑 Árboles frutales | 9 |
| 🪴 Sustratos | 8 |
| 🪴 Maceteros | 21 |
| **Total** | **167** |

| Recurso / hallazgo | Resultado |
|---|---:|
| `js/catalogo.js` | 6.366.260 bytes (aprox. 6,07 MiB) |
| Productos con imagen Base64 | 100 |
| Payload Base64 acumulado en las referencias renderizadas | 4.700.364 caracteres; aprox. 3.525.273 bytes decodificados (3,36 MiB) |
| Productos con ruta de imagen local | 67 |
| Rutas locales comprobadas HTTP 200 / HTTP 404 | 43 / 24 |
| Productos sin `src` de imagen | 0 |
| Productos sin descripción visible | 21 (todos maceteros/accesorios) |
| Productos sin precio visible en ficha | 2 |
| Imágenes remotas en productos | 0 |

El tamaño Base64 es una estimación del contenido renderizado por producto y puede contar referencias repetidas más de una vez. No incluye metadatos JSON ni sobrecarga del JavaScript.

## Inventario por producto

`Base64 image/jpeg; ~N B` indica el tipo y los bytes decodificados aproximados, nunca el payload. Las rutas locales se resuelven respecto de la raíz. `404`/`200` es el resultado del servidor local en el árbol de trabajo el 2026-10-12. `care: N chars` indica longitud del texto en la ficha; `SIN DESCRIPCIÓN` señala campo/texto vacío. `—` en precio significa que no se encontró precio visible ni opciones de tamaño en la ficha.

| # | Nombre visible | Categoría | Precio visible | Descripción (`care`) | Fuente de imagen / estado |
|---:|---|---|---|---|---|
| 1 | Dracena Lemon Lime | 🌿 Interior | Desde $15.000 | care: 450 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.49.47.jpeg` (404) |
| 2 | Maranta Leuconeura | 🌿 Interior | Desde $13.000 | care: 466 chars | Base64 image/jpeg; ~40.734 B |
| 3 | Dracaena compacta | 🌿 Interior | Desde $13.000 | care: 596 chars | Base64 image/jpeg; ~30.036 B |
| 4 | Aucuba Japonica | 🌿 Interior | Desde $16.000 | care: 500 chars | Base64 image/jpeg; ~37.587 B |
| 5 | Dracena Marginata | 🌿 Interior | Desde $27.000 | care: 449 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.56.08 (2).jpeg` (404) |
| 6 | Pilea Peperomioides (peperonia) | 🌿 Interior | Desde $4.000 | care: 665 chars | Base64 image/jpeg; ~23.289 B |
| 7 | Calathea lubbersiana | 🌿 Interior | Desde $8.500 | care: 618 chars | Base64 image/jpeg; ~30.264 B |
| 8 | helecho espada | 🌿 Interior | Desde $7.000 | care: 550 chars | Base64 image/jpeg; ~31.890 B |
| 9 | Ficus blanco | 🌿 Interior | Desde $27.000 | care: 679 chars | `img/productos/ficus-mini-nuevo.jpeg` (404) |
| 10 | Chamaedorea elegans (palmera) | 🌿 Interior | Desde $7.500 | care: 592 chars | Base64 image/jpeg; ~42.894 B |
| 11 | Peperomia caperata | 🌿 Interior | Desde $4.500 | care: 533 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.49.46.jpeg` (404) |
| 12 | planta rosario | 🌿 Interior | Desde $3.000 | care: 525 chars | Base64 image/jpeg; ~47.298 B |
| 13 | Scindapsus Pothos | 🌿 Interior | Desde $3.500 | care: 524 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.56.10.jpeg` (404) |
| 14 | Singonio | 🌿 Interior | Desde $3.500 | care: 480 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.56.16 (2).jpeg` (404) |
| 15 | Tradescantia Pink | 🌿 Interior | Desde $3.000 | care: 539 chars | `img/plantas/Tradiscantia Desde 3.000.jpeg` (200) |
| 16 | violetas de Persia | 🌿 Interior | Desde $7.000 | care: 739 chars | Base64 image/jpeg; ~41.688 B |
| 17 | Hierba gatera | 🌿 Interior | Desde $3.000 | care: 664 chars | Base64 image/jpeg; ~25.074 B |
| 18 | Helecho pata de conejo | 🌿 Interior | Desde $8.000 | care: 678 chars | Base64 image/jpeg; ~48.288 B |
| 19 | Philodendron cordatum | 🌿 Interior | Desde $8.500 | care: 607 chars | Base64 image/jpeg; ~31.344 B |
| 20 | Ficus Elastica (Gomero) ficus ruby | 🌿 Interior | Desde $9.000 | care: 600 chars | Base64 image/jpeg; ~23.418 B |
| 21 | Peperomia obtusifolia | 🌿 Interior | Desde $6.000 | care: 493 chars | Base64 image/jpeg; ~29.901 B |
| 22 | Euphorbia milii (Corona de Cristo) | 🌳 Exterior | Desde $6.000 | care: 568 chars | Base64 image/jpeg; ~34.326 B |
| 23 | Chiflera | 🌳 Exterior | Desde $4.000 | care: 632 chars | Base64 image/jpeg; ~39.480 B |
| 24 | Cineraria | 🌳 Exterior | Desde $2.500 | care: 491 chars | Base64 image/jpeg; ~35.229 B |
| 25 | filodendro paraguayo | 🌳 Exterior | Desde $7.000 | care: 524 chars | Base64 image/jpeg; ~35.499 B |
| 26 | Calibrachoa. Petunia | 🌳 Exterior | Desde $7.000 | care: 496 chars | Base64 image/jpeg; ~29.766 B |
| 27 | Repollo ornamenta | 🌳 Exterior | Desde $2.000 | care: 402 chars | Base64 image/jpeg; ~33.726 B |
| 28 | Pino limón | 🌳 Exterior | Desde $14.000 | care: 447 chars | Base64 image/jpeg; ~40.524 B |
| 29 | gomero o Ficus elastica | 🌳 Exterior | Desde $6.000 | care: 566 chars | Base64 image/jpeg; ~32.085 B |
| 30 | lavanda dentada | 🌳 Exterior | Desde $4.000 | care: 506 chars | Base64 image/jpeg; ~45.777 B |
| 31 | Menta | 🌱 Huerto y medicinales | Desde $1.000 | care: 472 chars | `img/plantas/Menta Desde $ 1.000.jpeg` (200) |
| 32 | Ficus lyrata | 🌳 Exterior | Desde $10.000 | care: 580 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.54.57 (1).jpeg` (404) |
| 33 | Ficus maclellandii | 🌳 Exterior | Desde $6.000 | care: 591 chars | Base64 image/jpeg; ~33.645 B |
| 34 | Spathiphyllum | 🌳 Exterior | Desde $16.000 | care: 519 chars | Base64 image/jpeg; ~24.141 B |
| 35 | Tiki Tiki | 🌳 Exterior | Desde $1.000 | care: 556 chars | `img/plantas/Phyla nodiflora , tiki tiki Desde  $1.000.jpeg` (200) |
| 36 | Aralia Japonesa | 🌳 Exterior | Desde $8.000 | care: 598 chars | Base64 image/jpeg; ~31.494 B |
| 37 | Ficus Moclame | 🌳 Exterior | Desde $5.800 | care: 597 chars | Base64 image/jpeg; ~43.368 B |
| 38 | Ficus benjamina | 🌳 Exterior | Desde $8.000 | care: 593 chars | Base64 image/jpeg; ~30.003 B |
| 39 | Ficus altissima | 🌳 Exterior | Desde $12.000 | care: 623 chars | Base64 image/jpeg; ~27.729 B |
| 40 | Strelitzia (Ave del Paraíso) | 🌳 Exterior | Desde $8.600 | care: 650 chars | Base64 image/jpeg; ~40.260 B |
| 41 | Philodendron erubescens | 🌳 Exterior | Desde $19.000 | care: 622 chars | Base64 image/jpeg; ~27.684 B |
| 42 | Arbusto Verónica | 🌳 Exterior | Desde $5.000 | care: 578 chars | Base64 image/jpeg; ~33.042 B |
| 43 | Pinos azules | 🌳 Exterior | Desde $15.000 | care: 128 chars | Base64 image/jpeg; ~40.500 B |
| 44 | Manto de Eva | 🌳 Exterior | Desde $45.000 | care: 837 chars | Base64 image/jpeg; ~36.795 B |
| 45 | cardenales (geranios ) | 🌳 Exterior | Desde $4.500 | care: 586 chars | Base64 image/jpeg; ~30.756 B |
| 46 | Ligustrina | 🌳 Exterior | Desde $3.000 | care: 529 chars | Base64 image/jpeg; ~29.010 B |
| 47 | Mióporo | 🌳 Exterior | Desde $4.000 | care: 571 chars | `img/productos/../temporales/plantas-faltantes/Mioporo Desde $ 2.500.jpeg` (404) |
| 48 | Gazania | 🌳 Exterior | Desde $2.000 | care: 648 chars | Base64 image/jpeg; ~34.947 B |
| 49 | Lilium (Lirio) doble | 🌳 Exterior | Desde $4.000 | care: 652 chars | Base64 image/jpeg; ~29.751 B |
| 50 | Dracena Verde | 🌳 Exterior | Desde $6.000 | care: 1.347 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.58.17 (1).jpeg` (404) |
| 51 | Dolar variegado | 🌳 Exterior | Desde $4.000 | care: 552 chars | `img/productos/../plantas/Dolar variagado Desde $ 3.000.jpeg` (200) |
| 52 | Pata de jaiba | 🌳 Exterior | Desde $7.000 | care: 615 chars | Base64 image/jpeg; ~34.488 B |
| 53 | Verónica Hebe | 🌳 Exterior | Desde $4.000 | care: 566 chars | Base64 image/jpeg; ~24.300 B |
| 54 | Paquerette Amarillo | 🌳 Exterior | Desde $5.000 | care: 560 chars | Base64 image/jpeg; ~36.021 B |
| 55 | Kalanchoe blossfeldiana | 🌳 Exterior | Desde $4.500 | care: 606 chars | Base64 image/jpeg; ~46.287 B |
| 56 | Hiedra Variegada | 🌳 Exterior | Desde $6.000 | care: 602 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.58.24 (1).jpeg` (404) |
| 57 | Calibrachoa | 🌳 Exterior | Desde $6.500 | care: 548 chars | Base64 image/jpeg; ~29.565 B |
| 58 | Stenocarpus rojo | 🌳 Exterior | Desde $8.500 | care: 617 chars | Base64 image/jpeg; ~44.046 B |
| 59 | Crisantemos | 🌳 Exterior | Desde $4.500 | care: 665 chars | Base64 image/jpeg; ~44.841 B |
| 60 | Jazmín del Cabo | 🌳 Exterior | Desde $8.000 | care: 870 chars | Base64 image/jpeg; ~36.852 B |
| 61 | Veronica Colombia | 🌳 Exterior | Desde $4.500 | care: 589 chars | Base64 image/jpeg; ~33.822 B |
| 62 | Hierbabuena | 🌳 Exterior | Desde $6.500 | care: 1.213 chars | Base64 image/jpeg; ~48.774 B |
| 63 | Filodendro limón | 🌳 Exterior | Desde $13.000 | care: 624 chars | Base64 image/jpeg; ~31.620 B |
| 64 | Calas de colores | 🌳 Exterior | Desde $14.000 | care: 697 chars | Base64 image/jpeg; ~38.241 B |
| 65 | Buganvilia | 🌳 Exterior | Desde $12.000 | care: 660 chars | Base64 image/jpeg; ~47.799 B |
| 66 | Cóleo | 🌳 Exterior | Desde $3.000 | care: 668 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.50.17 (4).jpeg` (404) |
| 67 | Saxifraga fresa | 🌿 Interior | Desde $3.500 | care: 659 chars | Base64 image/jpeg; ~37.848 B |
| 68 | Agapantos blancos | 🌳 Exterior | Desde $7.500 | care: 600 chars | Base64 image/jpeg; ~46.425 B |
| 69 | Ficus shiveriana | 🌳 Exterior | Desde $14.000 | care: 768 chars | Base64 image/jpeg; ~34.290 B |
| 70 | Pilea cadierei | 🌿 Interior | Desde $2.500 | care: 723 chars | Base64 image/jpeg; ~47.751 B |
| 71 | Dolar Negro | 🌿 Interior | Desde $4.000 | care: 677 chars | Base64 image/jpeg; ~34.683 B |
| 72 | Helecho espárrago | 🌳 Exterior | Desde $6.000 | care: 768 chars | Base64 image/jpeg; ~38.697 B |
| 73 | Aeonium kiwi | 🌵 Suculentas | Desde $4.000 | care: 796 chars | Base64 image/jpeg; ~17.703 B |
| 74 | Graptosedum | 🌵 Suculentas | Desde $3.500 | care: 748 chars | Base64 image/jpeg; ~27.621 B |
| 75 | Graptosedum 'California Sunset' | 🌵 Suculentas | Desde $3.000 | care: 736 chars | Base64 image/jpeg; ~36.120 B |
| 76 | Crassula ovata (Árbol de Jade) | 🌵 Suculentas | Desde $4.000 | care: 730 chars | Base64 image/jpeg; ~20.922 B |
| 77 | Pachyphytum | 🌵 Suculentas | Desde $4.000 | care: 775 chars | Base64 image/jpeg; ~22.356 B |
| 78 | Crassula ovata 'Gollum' (Dedos de Shrek) | 🌵 Suculentas | Desde $4.000 | care: 688 chars | Base64 image/jpeg; ~28.569 B |
| 79 | Graptoveria Titubans | 🌵 Suculentas | Desde $4.500 | care: 761 chars | Base64 image/jpeg; ~32.304 B |
| 80 | Echeveria 'Set Oliver' | 🌵 Suculentas | Desde $4.500 | care: 1.491 chars | Base64 image/jpeg; ~30.390 B |
| 81 | Aeonium decorum | 🌵 Suculentas | Desde $4.000 | care: 717 chars | Base64 image/jpeg; ~27.744 B |
| 82 | Sedum adolphi | 🌵 Suculentas | Desde $3.000 | care: 683 chars | Base64 image/jpeg; ~31.416 B |
| 83 | Aeonium 'Castello' | 🌵 Suculentas | Desde $4.000 | care: 732 chars | Base64 image/jpeg; ~36.642 B |
| 84 | Haworthia cymbiformis | 🌵 Suculentas | Desde $3.500 | care: 749 chars | Base64 image/jpeg; ~29.184 B |
| 85 | Aeonium arboreum | 🌵 Suculentas | Desde $3.000 | care: 740 chars | Base64 image/jpeg; ~29.847 B |
| 86 | Sedum palmeri | 🌵 Suculentas | Desde $3.000 | care: 702 chars | Base64 image/jpeg; ~41.886 B |
| 87 | Crassula cordata | 🌵 Suculentas | Desde $2.500 | care: 647 chars | Base64 image/jpeg; ~24.300 B |
| 88 | Sedum lineare | 🌵 Suculentas | Desde $3.000 | care: 690 chars | Base64 image/jpeg; ~41.436 B |
| 89 | Crassula 'Tom Thumb' | 🌵 Suculentas | Desde $3.500 | care: 713 chars | Base64 image/jpeg; ~68.406 B |
| 90 | Crassula rogersii | 🌵 Suculentas | Desde $3.000 | care: 649 chars | Base64 image/jpeg; ~37.197 B |
| 91 | Echeveria 'Cubic' | 🌵 Suculentas | Desde $3.500 | care: 787 chars | Base64 image/jpeg; ~37.923 B |
| 92 | Crassula ovata 'Afra Variegata' (Jade Variegado) | 🌵 Suculentas | Desde $3.000 | care: 706 chars | Base64 image/jpeg; ~19.887 B |
| 93 | Echeveria 'Morning Glory' | 🌵 Suculentas | Desde $4.500 | care: 762 chars | Base64 image/jpeg; ~20.268 B |
| 94 | Sedum pachyphyllum | 🌵 Suculentas | Desde $3.000 | care: 654 chars | Base64 image/jpeg; ~20.784 B |
| 95 | Euphorbia ferox | 🌵 Suculentas | Desde $3.000 | care: 628 chars | Base64 image/jpeg; ~36.705 B |
| 96 | Crassula dejecta | 🌵 Suculentas | Desde $4.500 | care: 612 chars | Base64 image/jpeg; ~27.477 B |
| 97 | Rebutia albiflora | 🌵 Suculentas | Desde $3.500 | care: 687 chars | Base64 image/jpeg; ~25.476 B |
| 98 | Echeveria 'Hakuhou' | 🌵 Suculentas | Desde $50.000 | care: 752 chars | Base64 image/jpeg; ~20.400 B |
| 99 | cactus mammillaria | 🌵 Suculentas | Desde $6.000 | care: 716 chars | Base64 image/jpeg; ~27.528 B |
| 100 | Cactus Echinopsis | 🌵 Suculentas | Desde $4.500 | care: 606 chars | Base64 image/jpeg; ~26.091 B |
| 101 | Mammillaria bocasana | 🌵 Suculentas | Desde $5.000 | care: 713 chars | Base64 image/jpeg; ~28.218 B |
| 102 | Monstera deliciosa | 🌿 Interior | Desde $6.000 | care: 590 chars | Base64 image/jpeg; ~32.361 B |
| 103 | Limón Genova | 🍑 Árboles frutales | Desde $14.000 | care: 226 chars | Base64 image/jpeg; ~48.639 B |
| 104 | Duraznero Nectar Cream | 🍑 Árboles frutales | Desde $13.000 | care: 175 chars | Base64 image/jpeg; ~52.830 B |
| 105 | Peral Packham | 🍑 Árboles frutales | Desde $13.000 | care: 167 chars | Base64 image/jpeg; ~53.673 B |
| 106 | Cerezo Bing | 🍑 Árboles frutales | Desde $12.000 | care: 171 chars | Base64 image/jpeg; ~52.197 B |
| 107 | Limón Sutil de Pica | 🍑 Árboles frutales | Desde $12.000 | care: 162 chars | Base64 image/jpeg; ~50.631 B |
| 108 | Durazno Dr. Davis | 🍑 Árboles frutales | Desde $12.000 | care: 155 chars | Base64 image/jpeg; ~52.038 B |
| 109 | Almendro Non Pareil | 🍑 Árboles frutales | Desde $15.000 | care: 163 chars | Base64 image/jpeg; ~53.673 B |
| 110 | Cerezo Corazón de Paloma | 🍑 Árboles frutales | Desde $15.000 | care: 130 chars | Base64 image/jpeg; ~52.038 B |
| 111 | Limón Sutil de Pica (ejemplar grande) | 🍑 Árboles frutales | Desde $50.000 | care: 156 chars | Base64 image/jpeg; ~50.631 B |
| 112 | Tierra Ácida (Verito Jardín) | 🪴 Sustratos | $3.000 | care: 101 chars | Base64 image/jpeg; ~25.461 B |
| 113 | Perlita Mineral Expandida (Verito Jardín) | 🪴 Sustratos | $2.000 | care: 108 chars | Base64 image/jpeg; ~30.912 B |
| 114 | Fibra de Coco (Verito Jardín) | 🪴 Sustratos | $2.000 | care: 80 chars | Base64 image/jpeg; ~35.532 B |
| 115 | Tierra de Hojas + Compost + Perlita | 🪴 Sustratos | $1.000 | care: 125 chars | `img/sustratos/tierra-2-1500.jpeg` (200) |
| 116 | Sustrato TerraFértil (multiuso interior/exterior) | 🪴 Sustratos | $4.000 | care: 118 chars | `img/sustratos/Tierra 5, $ 4.000 (6 Kilos).jpeg` (200) |
| 117 | Guano Rojo Reforzado N-P-K | 🪴 Sustratos | $2.000 | care: 421 chars | Base64 image/jpeg; ~20.265 B |
| 118 | Romero | 🌱 Huerto y medicinales | Desde $3.000 | care: 193 chars | `img/productos/Romero Desde 3.000.jpeg` (404) |
| 119 | Humus orgánico de lombriz | 🪴 Sustratos | $2.000 | care: 369 chars | `img/sustratos/tierra-3-1500.jpeg` (200) |
| 120 | Sustrato Premium | 🪴 Sustratos | $2.000 | care: 96 chars | `img/sustratos/tierra-4-2000.jpeg` (200) |
| 121 | Ficus bonsai | 🌿 Interior | Desde $7.000 | care: 90 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.55.29 (2).jpeg` (404) |
| 122 | Apio | 🌱 Huerto y medicinales | Desde $1.000 | care: 90 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.57.58 (1).jpeg` (404) |
| 123 | Verónica jade | 🌵 Suculentas | Desde $5.500 | care: 90 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.58.20 (5).jpeg` (404) |
| 124 | Yuca pata de elefante | 🌳 Exterior | Desde $24.000 | care: 90 chars | `img/productos/75cb49b7-7901-41df-ad5d-20a40c879d81.jpg` (200) |
| 125 | Celosía plumosa | 🌳 Exterior | Desde $8.000 | care: 90 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.44.21.jpeg` (404) |
| 126 | Yuca chica | 🌿 Interior | Desde $10.000 | care: 90 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.55.15 (1).jpeg` (404) |
| 127 | Monstera variagada | 🌿 Interior | Desde $18.000 | care: 90 chars | `img/temporales/plantas-faltantes/Monstera Variagada Desde $20.000.jpeg` (404) |
| 128 | Gomero pera (lirata) | 🌿 Interior | Desde $10.000 | care: 90 chars | `img/temporales/plantas-faltantes/Gomero pera (Lirata) Desde $ 10.000.jpeg` (404) |
| 129 | Cedrón | 🌱 Huerto y medicinales | Desde $3.000 | care: 491 chars | `img/plantas/Cedron Desde $ 3.000.jpeg` (200) |
| 130 | Dolar verde | 🌵 Suculentas | Desde $4.000 | care: 90 chars | `img/temporales/plantas-faltantes/Dolar Desde $ 3.000.jpeg` (404) |
| 131 | Sisu | 🌵 Suculentas | Desde $4.000 | care: 521 chars | `img/plantas/Sisu Desde 4.000.jpeg` (200) |
| 132 | Naranjo amor | 🌿 Interior | Desde $4.000 | care: 90 chars | `img/productos/WhatsApp Image 2026-08-24 at 20.01.21 (1).jpeg` (404) |
| 133 | Mala madre verde | 🌿 Interior | Desde $4.000 | care: 90 chars | `img/plantas/Cinta Verde (Mala madre) Desde $ 4.000.jpeg` (200) |
| 134 | Cinta blanca | 🌿 Interior | Desde $5.000 | care: 90 chars | `img/productos/../temporales/plantas-faltantes/Chlorophytum comosum desde $ 4.000.jpeg` (404) |
| 135 | Corona de Inca | 🌿 Interior | Desde $6.000 | care: 519 chars | `img/plantas/Corona de Inca 9.000.jpeg` (200) |
| 136 | Cucharitas | 🌿 Interior | Desde $6.000 | care: 90 chars | `img/plantas/Cucharita Desde $ 5.000.jpeg` (200) |
| 137 | Ala de ángel | 🌿 Interior | Desde $4.000 | care: 90 chars | `img/productos/ala-de-angel-nueva.jpg` (200) |
| 138 | Helecho nido de ave | 🌿 Interior | — | care: 90 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.43.52 (2).jpeg` (404) |
| 139 | Begonia rex rosada | 🌿 Interior | — | care: 90 chars | `img/productos/WhatsApp Image 2026-08-03 at 14.44.19 (3).jpeg` (404) |
| 140 | Ruda | 🌱 Huerto y medicinales | Desde $1.000 | care: 83 chars | `img/plantas/Ruda Desde $ 1.000.jpeg` (200) |
| 141 | Sansevieria lengua de suegra | 🌿 Interior | Desde $6.000 | care: 83 chars | `img/plantas/sansevieria lengua de suegra Desde $ 6.000.jpeg` (200) |
| 142 | Ají | 🌱 Huerto y medicinales | Desde $2.500 | care: 83 chars | `img/plantas/Aji Desde $ 2.500.jpeg` (200) |
| 143 | Petunias | 🌳 Exterior | Desde $1.000 | care: 83 chars | `img/plantas/Petunias Desde 1.000.jpeg` (200) |
| 144 | Clavel | 🌳 Exterior | Desde $1.000 | care: 83 chars | `img/plantas/Clavel Desde $1.000.jpeg` (200) |
| 145 | Lotus berthelotii | 🌳 Exterior | Desde $6.000 | care: 83 chars | `img/plantas/Lotus berthelotii Desde $ 6.000.jpeg` (200) |
| 146 | Yerba buena | 🌱 Huerto y medicinales | Desde $1.000 | care: 83 chars | `img/plantas/Yerba buena Desde $ 1.000.jpeg` (200) |
| 147 | Macetero | 🪴 Maceteros | $300 | SIN DESCRIPCIÓN | `img/maceteros/Macetero 1,  $ 300.jpeg` (200) |
| 148 | Macetero | 🪴 Maceteros | $400 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-2- $400.jpeg` (200) |
| 149 | Macetero | 🪴 Maceteros | $500 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-4 ,$ 500.jpeg` (200) |
| 150 | Macetero | 🪴 Maceteros | $600 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-5, $ 600.jpeg` (200) |
| 151 | Macetero | 🪴 Maceteros | $800 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-6- $ 800.jpeg` (200) |
| 152 | Macetero | 🪴 Maceteros | $1.000 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-7- $1000.jpeg` (200) |
| 153 | Macetero | 🪴 Maceteros | $1.200 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-8- $1200.jpeg` (200) |
| 154 | Macetero | 🪴 Maceteros | $1.500 | SIN DESCRIPCIÓN | `img/maceteros/macetero-9- $1500.jpeg` (200) |
| 155 | Macetero | 🪴 Maceteros | $2.000 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-10- $2000.jpeg` (200) |
| 156 | Macetero colgante | 🪴 Maceteros | $1.300 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-Colgante-$1300.jpeg` (200) |
| 157 | Macetero colgante | 🪴 Maceteros | $1.500 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-Colgante-1- $1500.jpeg` (200) |
| 158 | Macetero colgante | 🪴 Maceteros | $1.000 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-Colgante-2- $1000.jpeg` (200) |
| 159 | Macetero cuadrado | 🪴 Maceteros | $800 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-Cuadrado-1-$800.jpeg` (200) |
| 160 | Macetero cuadrado | 🪴 Maceteros | $1.500 | SIN DESCRIPCIÓN | `img/maceteros/Macetero-Cuadrado-2-$1500.jpeg` (200) |
| 161 | Plato | 🪴 Maceteros | $300 | SIN DESCRIPCIÓN | `img/maceteros/Plato-1-$300.jpeg` (200) |
| 162 | Plato | 🪴 Maceteros | $400 | SIN DESCRIPCIÓN | `img/maceteros/Plato-2- $400.jpeg` (200) |
| 163 | Plato | 🪴 Maceteros | $500 | SIN DESCRIPCIÓN | `img/maceteros/Plato-3- $500.jpeg` (200) |
| 164 | Plato | 🪴 Maceteros | $800 | SIN DESCRIPCIÓN | `img/maceteros/Plato-4 , $800.jpeg` (200) |
| 165 | Plato | 🪴 Maceteros | $1.000 | SIN DESCRIPCIÓN | `img/maceteros/Plato-5- $1000.jpeg` (200) |
| 166 | Plato | 🪴 Maceteros | $1.500 | SIN DESCRIPCIÓN | `img/maceteros/Plato-6- $1500.jpeg` (200) |
| 167 | Ganchos | 🪴 Maceteros | $1.000 | SIN DESCRIPCIÓN | `img/maceteros/Ganchos 3x1000.jpeg` (200) |

## Duplicados exactos

### Fotografías Base64 en fichas renderizadas

Se descargaron las fuentes de imagen dentro del navegador y se compararon con SHA-256. No se mostró ni guardó ningún payload Base64.

| SHA-256 (prefijo) | Tamaño decodificado | Productos con bytes idénticos | Evaluación |
|---|---:|---|---|
| `e6c962987bd1` | 53.671 B | Peral Packham / Almendro Non Pareil | Posible asociación errónea entre productos distintos; revisar foto/proveedor antes de migrar. |
| `7023d4721c23` | 50.630 B | Limón Sutil de Pica / Limón Sutil de Pica (ejemplar grande) | Puede ser una foto compartida legítimamente entre tamaños; confirmar presentación. |
| `02e4bf744dbf` | 52.037 B | Durazno Dr. Davis / Cerezo Corazón de Paloma | Posible asociación errónea; son productos distintos. Confirmar visualmente/proveedor. |

### Archivos exactos repetidos dentro de `img/`

Los hashes y tamaños siguientes provienen de la revisión de archivos locales previa; todos son JPEG 1200 × 1600. No se propone borrar ninguno.

| Archivos | SHA-256 (prefijo) | Tamaño |
|---|---|---:|
| `img/plantas/Corona de Inca 9.000.jpeg`; `img/plantas/WhatsApp Image 2026-08-03 at 14.43.52 (3).jpeg` | `13300F68A29FA359` | 281.305 B |
| `img/plantas/Peperonia Desde $ 11.000.jpeg`; `img/plantas/WhatsApp Image 2026-08-03 at 14.49.46.jpeg` | `C6C3450C7C105435` | 325.499 B |
| `img/plantas/Filodendro pink Desde $20.000.jpeg`; `img/plantas/Philodendro pink Desde $ 20.000.jpeg` | `956716852A625002` | 268.192 B |
| `img/plantas/Gomero pera (Lirata) Desde $ 10.000.jpeg`; `img/plantas/WhatsApp Image 2026-08-03 at 14.54.57 (1).jpeg` | `26070BEDAFA5B351` | 200.599 B |

El grupo anterior de `ficus-mini-nuevo.jpeg` / `WhatsApp Image 2026-08-03 at 14.56.12.jpeg` fue reducido en una etapa previa. La página aún referencia `img/productos/ficus-mini-nuevo.jpeg` para «Ficus blanco», pero esa ruta local responde 404; existe otra copia bajo `img/plantas/ficus-mini-nuevo.jpeg`. No se cambia la asociación en este inventario.

La comparación perceptual dHash (64 bits, umbral de distancia ≤ 2) no produjo pares adicionales entre las imágenes cargables. Es una criba automática y no certifica identidad botánica ni sustituye la revisión visual.

## Imágenes sin asociación clara y rutas rotas

No hay productos sin atributo `src`, pero **24 de las 67 rutas locales únicas usadas por fichas responden 404 en el árbol de trabajo**. Los restantes recursos locales de imagen fueron confirmados en la tabla. Las rutas rotas observadas son:

- `img/productos/WhatsApp Image 2026-08-03 at 14.49.47.jpeg` — Dracena Lemon Lime.
- `img/productos/WhatsApp Image 2026-08-03 at 14.56.08 (2).jpeg` — Dracena Marginata.
- `img/productos/ficus-mini-nuevo.jpeg` — Ficus blanco.
- `img/productos/WhatsApp Image 2026-08-03 at 14.49.46.jpeg` — Peperomia caperata.
- `img/productos/WhatsApp Image 2026-08-03 at 14.56.10.jpeg` — Scindapsus Pothos.
- `img/productos/WhatsApp Image 2026-08-03 at 14.56.16 (2).jpeg` — Singonio.
- `img/productos/WhatsApp Image 2026-08-03 at 14.54.57 (1).jpeg` — Ficus lyrata.
- `img/productos/../temporales/plantas-faltantes/Mioporo Desde $ 2.500.jpeg` — Mióporo.
- `img/productos/WhatsApp Image 2026-08-03 at 14.58.17 (1).jpeg` — Dracena Verde.
- `img/productos/WhatsApp Image 2026-08-03 at 14.58.24 (1).jpeg` — Hiedra Variegada.
- `img/productos/WhatsApp Image 2026-08-03 at 14.50.17 (4).jpeg` — Cóleo.
- `img/productos/Romero Desde 3.000.jpeg` — Romero.
- `img/productos/WhatsApp Image 2026-08-03 at 14.55.29 (2).jpeg` — Ficus bonsai.
- `img/productos/WhatsApp Image 2026-08-03 at 14.57.58 (1).jpeg` — Apio.
- `img/productos/WhatsApp Image 2026-08-03 at 14.58.20 (5).jpeg` — Verónica jade.
- `img/productos/WhatsApp Image 2026-08-03 at 14.44.21.jpeg` — Celosía plumosa.
- `img/productos/WhatsApp Image 2026-08-03 at 14.55.15 (1).jpeg` — Yuca chica.
- `img/temporales/plantas-faltantes/Monstera Variagada Desde $20.000.jpeg` — Monstera variagada.
- `img/temporales/plantas-faltantes/Gomero pera (Lirata) Desde $ 10.000.jpeg` — Gomero pera (lirata).
- `img/temporales/plantas-faltantes/Dolar Desde $ 3.000.jpeg` — Dolar verde.
- `img/productos/WhatsApp Image 2026-08-24 at 20.01.21 (1).jpeg` — Naranjo amor.
- `img/productos/../temporales/plantas-faltantes/Chlorophytum comosum desde $ 4.000.jpeg` — Cinta blanca.
- `img/productos/WhatsApp Image 2026-08-03 at 14.43.52 (2).jpeg` — Helecho nido de ave.
- `img/productos/WhatsApp Image 2026-08-03 at 14.44.19 (3).jpeg` — Begonia rex rosada.

No se puede afirmar que los archivos alternativos existentes sean equivalentes a esas 24 imágenes sin verificar identidad y asociación. En el conjunto `img/` hay 136 archivos; solo 43 son rutas locales válidas usadas por fichas. Los demás no se consideran “sin uso” definitivo: pueden participar en el hero, galerías, otras secciones o estar entre los archivos con cambios locales pendientes.

## Inconsistencias antes de migrar

1. Resolver primero las 24 rutas 404 contra copias originales y hashes; distinguir las ausencias del árbol de trabajo frente a la publicación remota.
2. Verificar las tres colisiones Base64 de frutales: dos pares corresponden a productos botánicamente distintos; no deduplicar automáticamente.
3. Confirmar que dos precios ausentes en ficha (posiciones 138 y 139: Helecho nido de ave y Begonia rex rosada) son realmente intencionales o completar el dato desde una fuente autorizada; este inventario no inventa precios.
4. Revisar los 21 maceteros sin descripción: pueden ser accesorios válidos sin `care`; no tratarlos como fallo botánico sin decisión de producto.
5. Confirmar correspondencia visual/proveedor para nombres ambiguos y fotografías sin asociación inequívoca antes de cambiar rutas o extraerlas de Base64.
6. Hay cinco URL externas en `catalogo.js`, pero corresponden a WhatsApp, Instagram y TikTok; no se detectaron imágenes de producto remotas en el render actual. Bootstrap y CSS son locales.
7. Acordar una fuente única de datos y de publicación. No mover `index.html` ni las carpetas: GitHub Pages sirve desde la raíz.
8. Proteger los 91 borrados y 9 archivos nuevos actuales; el inventario es del árbol local y no debe usarse para restaurar, limpiar ni publicar esos cambios.

## Reproducción

La lista se leyó del DOM de la versión raíz con el catálogo completo abierto. Para cada referencia se anotaron el nombre, categoría, precio mostrado, índice de producto, texto/longitud `care` y fuente de imagen. Los archivos locales se comprobaron mediante solicitudes HTTP `HEAD` al servidor estático local. Los duplicados binarios se compararon con SHA-256; los candidatos visuales se cribaron por dHash. Los valores Base64 permanecieron en memoria únicamente para cálculo y no se imprimieron ni se escribieron en este informe.
