# Auditoría botánica del catálogo

**Fecha:** 26-09-2026  
**Alcance:** versión activa `catalogo/` (no se modificaron fichas). Se revisaron los 145 productos que quedan después de ejecutar las transformaciones de `js/catalogo.js` y `js/fichas-botanicas.js`: 139 plantas y 6 sustratos. Maceteros y amigurumis no son plantas y quedan fuera de los nueve controles solicitados.

## Criterio y límites

✅ **Correcta** significa que los nueve controles se pueden respaldar, incluida la correspondencia visual de la fotografía. ⚠️ **Requiere ajustes menores** indica datos plausibles, pero genéricos, incompletos o pendientes de confirmar. ❌ **Información incorrecta** se reserva para contradicciones verificables en los datos del catálogo.

Las fotos (incrustadas, archivos locales o URL) no se pudieron cotejar visualmente una por una en esta auditoría. Por eso ninguna ficha se declara plenamente correcta: que una imagen cargue o tenga una URL con nombre de especie no prueba que represente la planta ofrecida. Las fichas tampoco especifican luz por orientación/horas, tamaño de maceta, sustrato, microclima o exposición a heladas; son variables que cambian el riego real. Santiago tiene estación seca larga, invierno lluvioso y episodios de calor, por lo que un calendario fijo debe entenderse como estimación y subordinarse a revisar el sustrato y la lluvia. [BCN: clima de la Región Metropolitana](https://www.bcn.cl/siit/nuestropais/region13/clima.htm), [UMN Extension: riego de plantas de interior](https://extension.umn.edu/spring-houseplant-care).

El nombre botánico es un dato del catálogo, no una identificación independiente del ejemplar. Los nombres comerciales/cultivares y las fotos insuficientes quedan como tales, sin completar por inferencia. Para los principios generales de luz, riego y drenaje se contrastó la guía de [RHS para plantas de interior](https://www.rhs.org.uk/plants/types/houseplants/growing-guide) y [RHS para cactus y suculentas](https://www.rhs.org.uk/plants/types/cacti-succulents/houseplants). Los nombres aceptados y sinonimias deben verificarse por especie en [Plants of the World Online, Kew](https://powo.science.kew.org/); por ejemplo, la base reconoce *Aucuba japonica* y *Salvia rosmarinus* como nombres aceptados ([Kew: Aucuba japonica](https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A271451-1/general-information), [Kew: Salvia rosmarinus](https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A457138-1/general-information)). No se usaron estas referencias generales para fingir una verificación especie por especie de cada fotografía.

## Hallazgos confirmados

### ❌ Información incorrecta

- **Claveles**, **Saxifraga fresa** y **Hierba aromática (confirmar variedad)** no tienen imagen en el producto publicado. No es posible aprobar el control fotográfico; añadir/recuperar la foto correcta o marcar que no hay foto. La falta de imagen no permite deducir qué especie era la intención.
- **Petunia** aparece dos veces en la lista final con el mismo nombre, categoría `exterior` y taxón *Petunia × atkinsiana*. Una ficha se originó con el nombre «Petunia hybrida». Es un duplicado del catálogo, aunque la asignación botánica final de ambas es la misma. **Corrección recomendada:** confirmar si son dos existencias/tamaños; si no, dejar una sola ficha. No hay evidencia en los datos de que la ficha activa de Saxifraga haya recibido por error los cuidados de petunia.

### ⚠️ Requiere ajustes menores / confirmación

- **Riego por calendario en todas las fichas:** se dan intervalos exactos para grupos completos. En macetas exteriores de Santiago, calor, viento, volumen, material de maceta y lluvia alteran mucho la frecuencia. **Ajuste recomendado:** conservar los intervalos solo como orientación y poner primero la prueba de humedad/sustrato y el drenaje. Para plantas de suelo, considerar la lluvia invernal; no aplicar automáticamente una frecuencia de maceta.
- **Luz y dificultad por perfil, no por producto:** muchos productos heredan exactamente el mismo nivel de dificultad, temperatura, riego y luz. Es razonable como guía inicial para varios follajes tropicales, pero no acredita que cada especie/cultivar tenga igual tolerancia. En la **Pata de jaiba** (*Schlumbergera truncata*), la ficha indica sol parcial, que puede funcionar si se evita el sol intenso; conviene precisar luz brillante filtrada/sombra luminosa. No tratarla como cactus desértico.
- **Identificación pendiente declarada correctamente, pero incompleta para venta:** Pino(s) azul(es), Tradescantia Pink, filodendro paraguayo, ala de ángel, lirio doble, aralia, yucas sin especie, cactus vendidos como *Mammillaria*/*Echinopsis*, *Pachyphytum* sp., Goeppertia sp. y hierba aromática. Mantener la incertidumbre es correcto; no atribuir cultivar, especie, uso comestible ni nivel de cuidado hasta obtener etiqueta/foto diagnóstica.
- **Hebe / verónica:** `Arbusto Verónica`, `Verónica Hebe` y `Veronica Colombia` aparecen como productos separados pero comparten la asignación *Veronica* sp. (nombre comercial Hebe). No se puede saber si son tamaños/variedades del mismo ejemplar o productos distintos. Confirmar etiqueta y diferenciar los productos; de lo contrario, consolidarlos.
- **Hierbabuena / menta:** `Menta` y `Hierbabuena` se asignan a *Mentha spicata*. Pueden ser el mismo taxón/producto repetido; el nombre «menta» también se usa para otras especies. Confirmar etiqueta y si son existencias distintas.
- **Limón sutil de Pica:** aparece como ficha normal y como «ejemplar grande». El nombre científico y perfil coinciden, lo que puede representar dos tamaños comerciales legítimos y no constituye por sí solo duplicación. Mantener ambos únicamente si son productos/tamaños diferenciados.
- **Petunia / calibrachoa:** `Calibrachoa. Petunia` fue mapeado como petunia, mientras que `Calibrachoa` tiene su ficha propia. Confirmar cuál taxón corresponde a la foto del primero; el rótulo mezcla dos géneros y no permite validar la especie.
- **Identidad de cultivares:** limón Génova, cerezo Corazón de Paloma, calibrachoa, gomeros «variado», algunas begonias y plantas variegadas no se pueden confirmar por nombre de venta o foto general. Dejar el cultivar como «por confirmar» hasta revisar etiqueta de proveedor.
- **Clasificación Interior/Exterior:** las categorías `interior`, `exterior`, `suculentas`, `huerto` y `frutales` son categorías comerciales y no siempre equivalen a tolerancia climática. Para cítricos/lima, bugambilia, flor de Pascua, begonias, cóleo y otras tropicales, explicitar «exterior en temporada cálida; proteger en invierno» si corresponde al ejemplar. Para *Fatsia japonica* (Aralia japonesa), `interior` no es necesariamente incorrecto en maceta, pero la especie también puede cultivarse al exterior en sombra/semisombra protegida; aclarar la condición.
- **Una flor amarilla no equivale a huerto:** Romero, cedrón, lavanda, hierbas y hortalizas en `huerto` son coherentes. Matico (*Buddleja globosa*) también está en `huerto`, pero es un arbusto ornamental/nativo, no una hortaliza; mover a `exterior` o precisar que la sección incluye medicinales/nativas, sin recomendar consumo.

## Revisión producto por producto

En esta tabla, ⚠️ significa que los datos disponibles no bastan para certificar los nueve controles. El motivo común es que la imagen no se cotejó visualmente y que cuidados/riego son perfiles genéricos. Las correcciones puntuales y los errores comprobables están detallados arriba. ❌ señala una contradicción ya confirmada.

| Producto publicado | Resultado | Observación específica |
|---|---|---|
| Dracena Lemon Lime | ⚠️ | *Dracaena fragrans* 'Lemon Lime'; taxón/nombre coherentes. Confirmar foto y etiqueta de cultivar. |
| Maranta Leuconeura | ⚠️ | *Maranta/Goeppertia leuconeura*; confirmar la nomenclatura usada por el proveedor; perfil de humedad alto razonable. |
| Dracaena compacta | ⚠️ | *Dracaena fragrans* 'Compacta'; nombre razonable; confirmar cultivar con etiqueta. |
| Aucuba Japonica | ⚠️ | *Aucuba japonica*; arbusto exterior de sombra/semisombra, asignación coherente. |
| Dracena Marginata | ⚠️ | *Dracaena marginata*; nombre y categoría interior coherentes. |
| Planta del Dinero China | ⚠️ | *Pilea peperomioides*; ficha renombra el producto; revisar la foto y evitar el alias erróneo «peperonia». |
| Calatea de hojas listadas | ⚠️ | *Goeppertia* sp.; género/especie sin resolver expresamente, no confirmar más. |
| helecho espada | ⚠️ | *Nephrolepis exaltata*; cuidados de sombra luminosa y humedad coherentes como pauta. |
| Ficus blanco | ⚠️ | *Ficus* sp.; especie/cultivar no confirmados. |
| Chamaedorea elegans (palmera) | ⚠️ | *Chamaedorea elegans*; interior y luz filtrada plausibles. |
| Peperomia caperata | ⚠️ | *Peperomia caperata*; taxón coherente; evitar calendario rígido y revisar secado. |
| planta rosario | ⚠️ | *Curio rowleyanus*; suculenta colgante coherente; proteger de heladas/lluvia invernal. |
| Scindapsus Pothos | ⚠️ | *Scindapsus pictus*; no es *Epipremnum*; el nombre comercial es ambiguo. |
| Singonio | ⚠️ | *Syngonium podophyllum*; nombre y categoría interior plausibles. |
| Tradescantia Pink | ⚠️ | *Tradescantia* sp.; cultivar no confirmado. |
| violetas de Persia | ⚠️ | Taxón sin asignar en la ficha efectiva; no se debe afirmar *Exacum affine* sin verificar la foto/etiqueta. |
| Hierba gatera | ⚠️ | *Nepeta cataria*; especie plausible; categoría huerto puede describir aromática, pero confirmar foto. |
| Helecho pata de conejo | ⚠️ | *Davallia fejeensis*; identidad requiere cotejar rizomas escamosos/foto. |
| Philodendron cordatum | ⚠️ | *Philodendron hederaceum*; nombre comercial frecuente, pero «cordatum» no confirma especie por sí solo. |
| Ficus Elastica (Gomero) ficus ruby | ⚠️ | *Ficus elastica* 'Ruby'; nombre de producto confuso; confirmar cultivar y foto. |
| Peperomia obtusifolia | ⚠️ | *Peperomia obtusifolia*; luz indirecta y dejar secar parcialmente son pautas coherentes. |
| Euphorbia milii (Corona de Cristo) | ⚠️ | *Euphorbia milii*; exterior soleado posible, con resguardo de heladas; látex irritante bien advertido. |
| Chiflera | ⚠️ | *Schefflera arboricola*; interior es posible; «cheflera» es nombre común. |
| Cineraria | ⚠️ | *Pericallis × hybrida*; confirmar que la flor/foto corresponde a cineraria de florista. |
| filodendro paraguayo | ⚠️ | *Philodendron* sp.; especie no confirmada; no consumir. |
| Petunia | ❌ | *Petunia × atkinsiana*; esta ficha es duplicada por una segunda Petunia idéntica. Revisar cuál mantener y cotejar ambas imágenes. |
| Repollo ornamental | ⚠️ | *Brassica oleracea* Acephala Group; exterior y temporada fresca coherentes. |
| Pino limón | ⚠️ | *Cupressus macrocarpa* 'Goldcrest'; taxón comercial plausible; confirmar cultivar. |
| gomero o Ficus elastica | ⚠️ | *Ficus elastica*; coincide con otras fichas de gomero, pero puede ser ejemplar/tamaño diferente. |
| lavanda dentada | ⚠️ | *Lavandula dentata*; sol y drenaje alto coherentes; `huerto` es una elección de navegación, no taxonómica. |
| Menta | ⚠️ | Asignada a *Mentha spicata* (hierbabuena); confirmar especie y posible duplicación con producto Hierbabuena. |
| Ficus lyrata | ⚠️ | *Ficus lyrata*; interior luminoso plausible; mismo taxón que «Gomero pera (lirata)». |
| Ficus maclellandii | ⚠️ | *Ficus maclellandii*; «Alii» es nombre comercial; confirmar etiqueta. |
| Spathiphyllum | ⚠️ | *Spathiphyllum wallisii*; humedad uniforme y luz indirecta plausibles; especie no visible por nombre genérico. |
| Tiki Tiki | ⚠️ | *Phyla nodiflora*; cubresuelo exterior, categoría coherente; advertir expansión. |
| Aralia Japonesa | ⚠️ | *Fatsia japonica*; luz filtrada/exterior protegido también es opción; categoría interior necesita indicar cultivo en maceta. |
| Ficus Moclame | ⚠️ | *Ficus microcarpa* 'Moclame'; confirmar cultivar en etiqueta. |
| Ficus benjamina | ⚠️ | *Ficus benjamina*; interior luminoso plausible; evitar cambios bruscos. |
| Ficus altissima | ⚠️ | *Ficus altissima*; interior luminoso y protección del frío plausibles. |
| Strelitzia (Ave del Paraíso) | ⚠️ | *Strelitzia reginae*; exterior soleado en Santiago con resguardo de heladas, sobre todo en maceta. |
| Philodendron erubescens | ⚠️ | *Philodendron erubescens*; interior, luz indirecta; confirmar la especie/cultivar. |
| Dracaena marginata (doble) | ⚠️ | *Dracaena marginata*; misma especie que Dracena Marginata/Verde; «doble» puede ser presentación, no duplicado confirmado. |
| Arbusto Verónica | ⚠️ | *Veronica* sp. (Hebe comercial); especie/cultivar pendiente y posible duplicado con otras verónicas. |
| Pinos azules | ⚠️ | Cupresácea sin especie confirmada; el nombre no permite asegurar género ni requerimientos exactos. |
| Manto de Eva | ⚠️ | *Alocasia macrorrhizos*; tropical, proteger del frío; savia irritante/tóxica, advertencia necesaria. |
| cardenales (geranios ) | ⚠️ | *Pelargonium × hortorum*; exterior soleado y resguardo de heladas. |
| Ligustrina | ⚠️ | *Ligustrum sinense*; confirmar especie en proveedor; exterior coherente. |
| Mióporo | ⚠️ | *Myoporum laetum*; taxón probable por nombre; exterior coherente. |
| Gazania | ⚠️ | *Gazania rigens*; exterior soleado plausible; el riego genérico puede excederse una vez establecida. |
| Lilium (Lirio) doble | ⚠️ | *Lilium* sp.; especie/cultivar no confirmado. |
| Dracena Verde | ⚠️ | *Dracaena marginata* en la ficha; «verde» no identifica cultivar y puede duplicar marginata. |
| Dolar variegado | ⚠️ | Especie incierta en el producto efectivo; no asumir *Crassula ovata* ni *Callisia repens* sin foto/etiqueta. |
| Pata de jaiba | ⚠️ | *Schlumbergera truncata*; sol parcial puede funcionar, pero precisar luz brillante filtrada/sombra luminosa y evitar sol intenso. |
| Verónica Hebe | ⚠️ | *Veronica* sp. (Hebe comercial); posible duplicado de Arbusto Verónica/Veronica Colombia. |
| Paquerette Amarillo | ⚠️ | *Euryops pectinatus*; identificar con foto de hoja y flor; el nombre común no basta. |
| Kalanchoe blossfeldiana | ⚠️ | *Kalanchoe blossfeldiana*; suculenta soleada, pero proteger de heladas y lluvia fría. |
| Hiedra Variegada | ⚠️ | *Hedera helix*; especie plausible; evitar sol fuerte de tarde y controlar crecimiento. |
| Calibrachoa | ⚠️ | *Calibrachoa × hybrida*; exterior soleado y sensible a heladas; cultivar no confirmado. |
| Cordyline roja | ⚠️ | *Cordyline australis* 'Red Star'; la ficha corrige el nombre inicial erróneo «Stenocarpus rojo». Taxonomía/categoría exterior son coherentes; confirmar etiqueta y foto. |
| Crisantemos | ⚠️ | *Chrysanthemum × morifolium*; exterior y floración estacional plausibles. |
| Jazmín del Cabo | ⚠️ | *Gardenia jasminoides*; luz brillante filtrada, humedad pareja y protección de heladas; agua/sustrato pueden requerir manejo de pH. |
| Veronica Colombia | ⚠️ | *Veronica* sp. (Hebe comercial); cultivar no confirmado; posible duplicado de las fichas de verónica. |
| Hierbabuena | ⚠️ | *Mentha spicata*; coincide con asignación de «Menta»; confirmar si son dos existencias. |
| Filodendro limón | ⚠️ | *Philodendron hederaceum* 'Lemon Lime'; taxón/cultivar plausible; confirmar foto. |
| Buganvilia | ⚠️ | *Bougainvillea* sp.; sol abundante, categoría exterior; sensible a heladas fuertes en maceta. |
| Cóleo | ⚠️ | *Coleus scutellarioides*; exterior estival o interior luminoso, proteger de frío. |
| Claveles | ⚠️ | *Dianthus caryophyllus* asignado; ficha sin imagen, así que especie/foto no se puede verificar. |
| Saxifraga fresa | ⚠️ | *Saxifraga stolonifera*; ficha sin imagen; la especie y correspondencia con producto requieren confirmación. No aparece cruzada con los datos de Petunia en la lista final. |
| Petunia | ❌ | Segunda ficha idéntica (originalmente se titulaba «Petunia hybrida»); mismo nombre visible, categoría y taxón que la otra. Confirmar si representa una presentación comercial distinta; de lo contrario, consolidar. |
| Calas de colores | ⚠️ | *Zantedeschia* hybrids; categoría exterior coherente, pero el cultivar/color exacto necesita confirmación de proveedor/foto. |
| Agapantos blancos | ⚠️ | *Agapanthus praecox*; exterior soleado/semisombra y categoría coherentes; el color no confirma especie. |
| Ficus shiveriana | ⚠️ | *Ficus elastica* 'Shivereana'; corregir ortografía visible a Shivereana si se confirma etiqueta. |
| Pilea cadierei | ⚠️ | *Pilea cadierei*; interior, luz indirecta plausible; no confundir con Pilea peperomioides. |
| Dolar Negro | ⚠️ | *Plectranthus ciliatus* probable; el propio registro reconoce identificación basada en foto y requiere confirmar. |
| Helecho espárrago | ⚠️ | *Asparagus setaceus* no es helecho verdadero; el nombre común es usual, pero evitar presentarlo como taxonomía. |
| Aeonium kiwi | ⚠️ | *Aeonium haworthii* 'Kiwi'; nombre y grupo de suculentas plausibles; proteger de heladas/lluvia. |
| Graptosedum | ⚠️ | *× Graptosedum* sp.; híbrido sin especie/cultivar, confirmado solo a nivel de género. |
| Graptosedum 'California Sunset' | ⚠️ | Híbrido *× Graptosedum* 'California Sunset'; confirmar identidad del cultivar por foto. |
| Crassula ovata (Árbol de Jade) | ⚠️ | *Crassula ovata*; nombre correcto; suculenta con sustrato drenante y heladas como riesgo. |
| Pachyphytum | ⚠️ | *Pachyphytum* sp.; no atribuir especie hasta confirmarla. |
| Crassula ovata 'Gollum' (Dedos de Shrek) | ⚠️ | *Crassula ovata* 'Gollum'; taxón/nombre comercial plausibles; evitar confundir con 'Hobbit'. |
| Graptoveria Titubans | ⚠️ | *× Graptoveria* 'Titubans'; híbrido, etiqueta comercial que requiere cotejo. |
| Echeveria 'Set Oliver' | ⚠️ | *Echeveria* 'Set-Oliver'; normalizar escritura del cultivar solo tras confirmar etiqueta. |
| Aeonium decorum | ⚠️ | *Aeonium decorum*; nombre plausible; proteger de helada y exceso de agua invernal. |
| Sedum adolphi | ⚠️ | *Sedum adolphii* suele escribirse con doble i; confirmar identificación/ortografía taxonómica y foto antes de corregir definitivamente. |
| Aeonium 'Castello' | ⚠️ | Nombre de especie/cultivar insuficiente para comprobar el cultivar; mantener pendiente. |
| Haworthia cymbiformis | ⚠️ | *Haworthia cymbiformis*; confirmar nombre actual usado y evitar sol intenso repentino. |
| Aeonium arboreum | ⚠️ | *Aeonium arboreum*; exterior luminoso posible, resguardo de heladas y humedad fría. |
| Sedum palmeri | ⚠️ | *Sedum palmeri*; nombre plausible; exposición soleada gradual y drenaje. |
| Crassula cordata | ⚠️ | *Crassula cordata*; confirmar especie con foto, pues el nombre es menos común en comercio. |
| Sedum lineare | ⚠️ | *Sedum lineare*; comprobar identidad y cultivar; riego según secado. |
| Crassula 'Tom Thumb' | ⚠️ | Cultivar/grupo comercial ambiguo; confirmar etiqueta botánica. |
| Crassula rogersii | ⚠️ | *Crassula rogersii*; identificación requiere cotejar morfología/foto. |
| Echeveria 'Cubic' | ⚠️ | Nombre comercial/cultivar por verificar en proveedor. |
| Crassula ovata 'Afra Variegata' (Jade Variegado) | ⚠️ | El nombre mezcla *Crassula ovata* y «Afra», que suele referir a otro taxón comercial; no aprobar la identidad sin etiqueta/foto diagnóstica. |
| Echeveria 'Morning Glory' | ⚠️ | Cultivar no confirmado por la ficha; revisar foto y etiqueta. |
| Sedum pachyphyllum | ⚠️ | *Sedum pachyphyllum*; confirmar foto; sol aclimatado y riego bajo con sustrato seco. |
| Euphorbia ferox | ⚠️ | *Euphorbia ferox* no es cactus; la ficha lo advierte correctamente; guantes por látex. |
| Crassula dejecta | ⚠️ | *Crassula dejecta*; confirmar foto; luz y riego genéricos de suculenta son aproximados. |
| Rebutia albiflora | ⚠️ | *Rebutia albiflora*; cactus plausible; requiere luz intensa, drenaje y protección de heladas/lluvia. |
| Echeveria 'Hakuhou' | ⚠️ | Cultivar no verificable por nombre solamente; cuidado de suculenta plausible. |
| cactus mammillaria | ⚠️ | *Mammillaria* sp.; identificación solo a nivel de género; mantener expresamente pendiente. |
| Cactus Echinopsis | ⚠️ | *Echinopsis* sp.; género posible, especie no confirmable; la flor ayudaría. |
| Mammillaria bocasana | ⚠️ | *Mammillaria bocasana*; confirmar foto; advertencia por espinas finas adecuada. |
| Monstera deliciosa | ⚠️ | *Monstera deliciosa*; interior y luz indirecta brillante razonables. La observación habla de variegación aunque el nombre no dice que esta planta sea variegada: quitar o confirmar que el ejemplar sí lo es. |
| Limón Genova | ⚠️ | *Citrus limon*; «Génova» no confirma cultivar; exterior soleado y protección de heladas. |
| Duraznero Nectar Cream | ⚠️ | *Prunus persica* 'Nectar Cream'; cultivar y necesidad de polinizador/horas de frío deben cotejarse con etiqueta del proveedor. |
| Peral Packham | ⚠️ | *Pyrus communis* 'Packham's Triumph'; taxón plausible; revisar compatibilidad de polinización si se ofrece fruta. |
| Cerezo Bing | ⚠️ | *Prunus avium* 'Bing'; sol y exterior coherentes; para fruta revisar polinizador compatible. |
| Limón Sutil de Pica | ⚠️ | *Citrus × aurantiifolia* asignado; confirmar origen/cultivar «de Pica» con proveedor; más sensible al frío. |
| Durazno Dr. Davis | ⚠️ | *Prunus persica* 'Dr. Davis'; confirmar variedad y requerimientos de polinización/frío. |
| Almendro Non Pareil | ⚠️ | *Prunus dulcis* 'Nonpareil'; la variedad puede requerir polinizador compatible; verificar oferta del vivero. |
| Cerezo Corazón de Paloma | ⚠️ | *Prunus avium*; la ficha reconoce que la variedad no está comprobada. Mantener ese límite y confirmar polinización. |
| Limón Sutil de Pica (ejemplar grande) | ⚠️ | Misma identificación que Limón Sutil; posible variante por tamaño, no duplicado confirmado. |
| Romero | ⚠️ | *Salvia rosmarinus*; taxón aceptado; sol y drenaje razonables. Riego estival de maceta se debe ajustar por calor/tamaño. |
| Hierba aromática (confirmar variedad) | ⚠️ | *Artemisia* sp. en datos, sin foto; no consumir ni atribuir uso medicinal antes de identificar. |
| Ficus bonsai | ⚠️ | *Ficus microcarpa*; «bonsái» describe forma de cultivo, no especie/cultivar. Foto no comprobada. |
| Apio | ⚠️ | *Apium graveolens*; categoría huerto y necesidad de humedad coherentes; no dejar secar en calor. |
| Verónica jade | ⚠️ | *Crassula ovata*; el nombre «Verónica jade» es confuso y parece nombre de producto/variedad local, no identidad botánica. |
| Pata de elefante | ⚠️ | *Beaucarnea recurvata*, no *Yucca*; advertencia correcta. Categoría interior razonable en Santiago, pero necesita mucha luz y riego escaso. |
| Celosía plumosa | ⚠️ | *Celosia argentea* var. *plumosa*; exterior cálido/estacional y sensible a heladas, correcto como orientación. |
| Yuca chica | ⚠️ | *Yucca* sp.; foto no permite asegurar la especie; luz/agua deben ajustarse al taxón y al tamaño. |
| Monstera variagada | ⚠️ | *Monstera deliciosa* variegada asumida por alias; el nombre tiene errata y la variegación requiere confirmar foto/proveedor. |
| Gomero pera (lirata) | ⚠️ | *Ficus lyrata*; posible duplicado taxonómico de «Ficus lyrata»; confirmar que son tamaños distintos. |
| Cedrón | ⚠️ | *Aloysia citrodora*; identificación/nombre plausibles; exterior soleado y resguardo de heladas fuertes en maceta joven. |
| Dolar amarillo | ⚠️ | *Callisia repens* inferida de foto/nombre en el registro; cultivar amarillo necesita confirmación visual. |
| Dolar normal | ⚠️ | *Tradescantia fluminensis*; nombre común ambiguo; controlar expansión y confirmar foto. |
| Sisu | ⚠️ | *Sedum morganianum*; «Sisu» es marca/nombre comercial no taxonómico; proteger tallos y verificar especie. |
| Narancho amor | ⚠️ | *Citrus sinensis*; nombre comercial no identifica cultivar; corregir texto visible si «Narancho» es errata. |
| Mala madre verde | ⚠️ | *Chlorophytum comosum*; nombre y tipo interior coherentes. |
| Mamá madre con amarillo | ⚠️ | *Chlorophytum comosum* variegado; confirmar el patrón/cultivar: el nombre de venta no basta para asignar 'Variegatum'. |
| Matico grande | ⚠️ | *Buddleja globosa*; nativa/arbusto exterior. Mover desde `huerto` o explicar la categoría de plantas medicinales/ornamentales. |
| Corona de Inca | ⚠️ | Asignada a *Euphorbia milii*; nombre común alternativo posible, verificar foto y mantener advertencia del látex. |
| Cucharitas | ⚠️ | *Peperomia polybotrya*; nombre comercial plausible; revisar foto frente a otras peperomias. |
| Ala de ángel | ⚠️ | *Begonia* sp.; grupo comercial amplio, no confirmar especie/cultivar sin hoja y etiqueta. |
| Helecho nido de ave | ⚠️ | *Asplenium nidus*; categoría interior y sombra luminosa coherentes; no echar agua en la roseta. |
| Flor de Pascua roja | ⚠️ | *Euphorbia pulcherrima*; interior luminoso y protección del frío coherentes. |
| Begonia rex rosada | ⚠️ | *Begonia rex-cultorum*; confirmar que no sea la misma ficha que una begonia rex listada aparte. |
| Maranta tricolor | ⚠️ | *Maranta leuconeura*; posible presentación/cultivar distinto de Maranta Leuconeura; confirmar si son productos separados. |
**Nota de recuento:** la tabla cubre los 139 productos vegetales publicados (las fichas de sustrato no son plantas). Los nombres de plantas que aparecen solo como alias en el archivo auxiliar no se cuentan como stock disponible. Los productos compuestos creados en JavaScript pueden cambiar el nombre visible frente al nombre inicial.

## Resumen

- **Plantas completamente correctas:** 0 confirmadas. Criterio conservador: ninguna fotografía fue revisada visualmente en serie, por lo que falta al menos ese control.
- **Plantas que requieren correcciones menores o confirmación:** 134. Incluye las fichas sin error confirmado que necesitan cotejo visual y las identificaciones/cuidados genéricos señalados arriba.
- **Plantas con errores importantes:** 5 fichas afectadas: las dos entradas Petunia idénticas y tres fichas sin imagen (Claveles, Saxifraga fresa y Hierba aromática). La duplicación es un solo tipo de problema; no son dos errores botánicos distintos.
- **Posibles fotos mal asignadas:** no se puede confirmar visualmente ninguna imagen. Tres productos carecen de imagen asignada. Las URL que incluyen nombres de especie no sustituyen cotejo visual.
- **Posibles productos duplicados:** dos fichas Petunia con el mismo nombre/taxón; Menta / Hierbabuena; Ficus lyrata / Gomero pera (lirata); varias fichas Hebe/verónica; Dracaena marginata / Dracena Verde / marginata doble; y dos limones sutiles (este último podría ser tamaño distinto). Confirmar stock, tamaño y cultivar antes de fusionar.
- **Posibles categorías incorrectas:** Matico grande está en `huerto` aunque es un arbusto; categoría interior de Fatsia japonica conviene aclararla como cultivo en maceta/interior o exterior protegido. Para plantas sensibles al frío, la categoría debería explicitar el resguardo invernal en Santiago.
- **Productos no vegetales excluidos:** 6 sustratos revisados fuera del alcance botánico; no se alteró ningún producto ni ficha.

## Recomendación para cerrar dudas

Solicitar al proveedor etiqueta o foto propia nítida (planta completa, hojas y flores) para las identificaciones dudosas. Revisar visualmente las 136 imágenes asignadas contra su producto, empezando por cultivares variegados, Petunia, Cordyline y los productos cuya especie sigue como *sp.*. No corregir automáticamente los nombres que quedan como *sp.* o «por confirmar».
