(function () {
  const FINAL_NOTE = "El crecimiento, coloración y desarrollo de la planta dependen principalmente de la cantidad de luz que reciba.";

  const PROFILES = {
    tropical: {
      type: "Interior", water: "Moderado", light: "Luz indirecta brillante",
      frequency: "Primavera-verano: cada 7-10 días; otoño-invierno: cada 12-18 días. Comprueba que se sequen los primeros 2-3 cm antes de regar.",
      temperature: "18-27 °C", difficulty: "Intermedia",
      observation: "Tropical sensible al frío: en Santiago, mantener protegida de las heladas, corrientes frías y calefacción directa."
    },
    tropicalMoist: {
      type: "Interior", water: "Alto", light: "Luz indirecta brillante",
      frequency: "Primavera-verano: cada 4-7 días; otoño-invierno: cada 7-12 días. Mantén el sustrato ligeramente húmedo, nunca encharcado.",
      temperature: "18-26 °C", difficulty: "Intermedia",
      observation: "Tropical sensible a las heladas. Agradece humedad ambiental; evita aire seco de estufas y cambios bruscos de temperatura."
    },
    tropicalEasy: {
      type: "Interior", water: "Moderado", light: "Luz indirecta brillante",
      frequency: "Primavera-verano: cada 7-10 días; otoño-invierno: cada 12-20 días. Riega al secarse la capa superior y deja escurrir.",
      temperature: "18-29 °C", difficulty: "Fácil",
      observation: "Planta tropical: proteger de heladas y del sol fuerte del mediodía; en Santiago se recomienda interior luminoso durante el invierno."
    },
    fern: {
      type: "Interior", water: "Alto", light: "Sombra luminosa",
      frequency: "Primavera-verano: cada 3-6 días; otoño-invierno: cada 6-10 días. No dejes secar por completo el cepellón.",
      temperature: "16-24 °C", difficulty: "Intermedia",
      observation: "Evita sol directo, aire seco y calefacción. Proteger de las heladas; necesita drenaje aunque prefiera humedad constante."
    },
    succulent: {
      type: "Interior/Exterior", water: "Bajo", light: "Sol parcial",
      frequency: "Primavera-verano: cada 10-20 días; otoño-invierno: cada 25-40 días, solo con sustrato completamente seco.",
      temperature: "15-28 °C", difficulty: "Fácil",
      observation: "Aclimata gradualmente al sol. En Santiago, protege de heladas, lluvia invernal persistente y agua acumulada en la roseta."
    },
    succulentSun: {
      type: "Interior/Exterior", water: "Bajo", light: "Sol directo",
      frequency: "Primavera-verano: cada 10-18 días; otoño-invierno: cada 25-40 días, únicamente cuando el sustrato esté seco.",
      temperature: "15-30 °C", difficulty: "Fácil",
      observation: "Acostumbra al sol directo de forma gradual. En Santiago, resguarda de heladas y lluvias frías; maceta con excelente drenaje."
    },
    cactus: {
      type: "Interior/Exterior", water: "Bajo", light: "Sol directo",
      frequency: "Primavera-verano: cada 15-25 días; otoño-invierno: cada 30-45 días o menos, siempre con el sustrato seco.",
      temperature: "18-30 °C", difficulty: "Fácil",
      observation: "Necesita sol aclimatado y sustrato mineral muy drenante. Proteger de heladas y lluvias prolongadas en invierno santiaguino."
    },
    outdoorSun: {
      type: "Exterior", water: "Moderado", light: "Sol directo",
      frequency: "En maceta: verano cada 2-4 días y primavera/otoño cada 5-8 días; invierno cada 10-15 días si no llueve. Ajusta al secado del suelo.",
      temperature: "12-28 °C", difficulty: "Fácil",
      observation: "Planta de exterior; aclimata al sol y evita el encharcamiento. Si es joven o está en maceta, protégela de las heladas fuertes."
    },
    outdoorFlower: {
      type: "Exterior", water: "Moderado", light: "Sol parcial",
      frequency: "Primavera-verano: cada 2-4 días en maceta; otoño-invierno: cada 7-12 días. Mantén humedad regular durante la floración.",
      temperature: "12-24 °C", difficulty: "Intermedia",
      observation: "Retira flores marchitas y evita mojar continuamente el follaje. Proteger de heladas intensas si está en maceta."
    },
    tenderFlower: {
      type: "Interior/Exterior", water: "Moderado", light: "Sol parcial",
      frequency: "Primavera-verano: cada 2-4 días en maceta; otoño-invierno: cada 7-12 días, dejando secar ligeramente la superficie.",
      temperature: "15-25 °C", difficulty: "Intermedia",
      observation: "Flor de temporada sensible al frío: en Santiago, resguardar de heladas y lluvias intensas; sol suave de mañana y buena ventilación."
    },
    coolFlower: {
      type: "Exterior", water: "Moderado", light: "Sol parcial",
      frequency: "Cada 2-3 días durante floración y calor; en invierno cada 5-8 días. Mantén humedad pareja, sin agua estancada.",
      temperature: "10-20 °C", difficulty: "Intermedia",
      observation: "Prefiere temperaturas frescas y sombra luminosa en tardes calurosas. Retira flores pasadas para prolongar la floración."
    },
    herbSun: {
      type: "Exterior", water: "Moderado", light: "Sol directo",
      frequency: "Verano: cada 2-4 días en maceta; primavera/otoño: cada 4-7 días; invierno: cada 7-12 días si no llueve.",
      temperature: "15-28 °C", difficulty: "Fácil",
      observation: "Cosecha o poda las puntas para estimular brotes. En maceta, comprueba a diario en olas de calor; evita dejar agua en el plato."
    },
    herbMoist: {
      type: "Exterior", water: "Alto", light: "Sol parcial",
      frequency: "Verano: cada 1-3 días en maceta; primavera/otoño: cada 3-5 días; invierno: cada 5-8 días. No dejes secar completamente.",
      temperature: "12-25 °C", difficulty: "Fácil",
      observation: "Agradece suelo fresco y riego regular. Sol de mañana y sombra ligera por la tarde ayudan durante el verano seco de Santiago."
    },
    vegetable: {
      type: "Exterior", water: "Alto", light: "Sol directo",
      frequency: "Verano: cada 1-3 días en maceta; primavera/otoño: cada 3-5 días. Mantén humedad constante, sin encharcar.",
      temperature: "15-28 °C", difficulty: "Intermedia",
      observation: "Cultivo de temporada: necesita sustrato fértil, drenaje y revisión frecuente en los días calurosos."
    },
    fruit: {
      type: "Exterior", water: "Moderado", light: "Sol directo",
      frequency: "Árbol en maceta: verano cada 2-4 días y primavera/otoño cada 5-8 días; en suelo, riego profundo semanal en época seca. Reducir en invierno.",
      temperature: "15-30 °C", difficulty: "Intermedia",
      observation: "Requiere varias horas de sol y riego profundo sin encharcar. Ajusta según lluvia, tamaño de maceta, etapa de crecimiento y carga de frutos."
    },
    citrus: {
      type: "Interior/Exterior", water: "Moderado", light: "Sol directo",
      frequency: "Verano: cada 2-4 días en maceta; primavera/otoño: cada 5-8 días; invierno: cada 10-15 días si no llueve. Evita que se seque el cepellón.",
      temperature: "18-30 °C", difficulty: "Intermedia",
      observation: "Cítrico sensible a heladas, especialmente en maceta: mantener afuera al sol en temporada cálida y pasar a un lugar luminoso y protegido cuando se acerquen temperaturas bajo 5 °C; limas requieren más abrigo."
    },
    shrub: {
      type: "Exterior", water: "Moderado", light: "Sol parcial",
      frequency: "Verano: cada 2-4 días en maceta; resto del año cada 5-10 días, ajustando a lluvia y secado del sustrato.",
      temperature: "10-25 °C", difficulty: "Intermedia",
      observation: "La poda ligera después de la floración ayuda a mantener una forma compacta. Proteger ejemplares en maceta de heladas severas."
    },
    unknown: {
      type: "Interior/Exterior", water: "Moderado", light: "Luz indirecta brillante",
      frequency: "Como pauta provisional: cada 7-10 días en temporada cálida y cada 12-18 días en invierno; confirmar el secado del sustrato antes de regar.",
      temperature: "18-25 °C", difficulty: "Intermedia",
      observation: "El nombre comercial o la fotografía no permiten confirmar la especie. Mantener protegida de heladas hasta verificar su identificación."
    }
  };

  PROFILES.tenderSun = Object.assign({}, PROFILES.tenderFlower, { light: "Sol directo" });
  const PROFILE_CATEGORIES = {
    tropical: "interior", tropicalMoist: "interior", tropicalEasy: "interior", fern: "interior",
    succulent: "suculentas", succulentSun: "suculentas", cactus: "suculentas",
    outdoorSun: "exterior", outdoorFlower: "exterior", tenderFlower: "exterior", tenderSun: "exterior",
    coolFlower: "exterior", herbSun: "huerto", herbMoist: "huerto", vegetable: "huerto",
    fruit: "frutales", citrus: "frutales", shrub: "exterior", unknown: "interior"
  };

  const records = [];
  const add = (profile, scientificName, commonName, names, observation, category, displayName) => {
    records.push({ profile, scientificName, commonName, names, observation, category, displayName });
  };

  add("tropicalEasy", "Dracaena fragrans 'Lemon Lime'", "Drácena Lemon Lime", ["Dracena Lemon Lime"]);
  add("tropicalMoist", "Goeppertia (Maranta) leuconeura", "Maranta de oración", ["Maranta Leuconeura", "Maranta", "Maranta tricolor"]);
  add("tropicalEasy", "Dracaena fragrans 'Compacta'", "Drácena compacta", ["Dracaena compacta", "Dracena Compacta"]);
  add("shrub", "Aucuba japonica", "Aucuba japonesa", ["Aucuba", "Aucuba Japonica", "Ocuba"]);
  add("tropicalEasy", "Dracaena marginata", "Drácena marginata", ["Dracena Marginata", "Marginata", "Dracena marginata"]);
  add("tropicalEasy", "Pilea peperomioides", "Planta del Dinero China", ["Pilea Peperomioides (peperonia)", "Pilea peperomioides (Planta del Dinero China)"] , null, null, "Planta del Dinero China");
  add("tropical", "Goeppertia sp.", "Calatea de hojas listadas", ["Maranta o Calathea", "Calatea de hojas listadas"], "La foto no permite distinguir especie ni cultivar dentro de Goeppertia; mantener sin sol directo y sin frío.", "interior");
  add("fern", "Nephrolepis exaltata", "Helecho espada", ["helecho espada"]);
  add("tropicalEasy", "Ficus sp.", "Ficus de hojas claras", ["Ficus Blanco"], "El cultivar no se distingue con certeza; evitar cambios bruscos de ubicación.");
  add("tropicalEasy", "Chamaedorea elegans", "Palmera de salón", ["Chamaedorea elegans (palmera)"]);
  add("tropical", "Peperomia caperata", "Peperomia caperata", ["Peperonia Caperata", "Peperomia caperata", "Begonia Rex", "Begonia Rex rosada"]);
  add("succulent", "Curio rowleyanus", "Planta rosario", ["planta rosario", "Rosario"], "Tallos frágiles: manipular con cuidado y evitar que el agua quede retenida entre las hojas.");
  add("tropicalEasy", "Scindapsus pictus", "Scindapso plateado", ["Scindapsus Pothos", "Sinapsus"]);
  add("tropicalEasy", "Syngonium podophyllum", "Singonio", ["Cingonio", "Singonio", "Cingonio"]);
  add("tropicalEasy", "Tradescantia sp.", "Tradescantia rosada (variedad por confirmar)", ["Tradescantia Pink"], "El cultivar no puede confirmarse por la imagen; evitar heladas y sol fuerte sin aclimatación.");
  add("coolFlower", "Exacum affine", "Violeta persa", ["Violeta Persia", "Violeta Persia"]);
  add("herbSun", "Nepeta cataria", "Hierba gatera", ["Hierba gatera"], "Mantener fuera del alcance de mascotas si no se desea que mordisqueen la planta.", "huerto");
  add("fern", "Davallia fejeensis", "Helecho pata de conejo", ["Helecho Pata de Conejo"]);
  add("tropicalEasy", "Philodendron hederaceum", "Filodendro cordatum", ["Philodendron cordatum", "Cordatum"]);
  add("tropicalEasy", "Ficus elastica 'Ruby'", "Gomero Ruby", ["Ficus Elastica (Gomero) ficus ruby"]);
  add("tropicalEasy", "Peperomia obtusifolia", "Peperomia obtusifolia", ["Peperomia obtusifolia"]);
  add("succulentSun", "Euphorbia milii", "Corona de Cristo", ["Euphorbia milii (Corona de Cristo)", "Corona de Inca"], "Su látex irrita piel y ojos; usar guantes al podar y mantener fuera del alcance de niños y mascotas.", "suculentas");
  add("tropicalEasy", "Schefflera arboricola", "Cheflera", ["Chiflera", "Schefflera", "Aralia"]);
  add("outdoorFlower", "Pericallis × hybrida", "Cineraria", ["Cineraria"]);
  add("tropicalEasy", "Philodendron sp.", "Filodendro paraguayo (especie por confirmar)", ["filodendro paraguayo"], "El nombre comercial no basta para confirmar la especie; no ingerir y mantener fuera del alcance de mascotas.");
  add("tenderFlower", "Petunia × atkinsiana", "Petunia híbrida", ["Calibrachoa. Petunia", "Petunia", "Petunia hybrida"], null, "exterior", "Petunia");
  add("coolFlower", "Brassica oleracea Acephala Group", "Repollo ornamental", ["Repollo ornamenta", "Coles Ornamentales"], "Se cultiva por el follaje ornamental; su coloración mejora con el fresco.", "exterior", "Repollo ornamental");
  add("outdoorSun", "Cupressus macrocarpa 'Goldcrest'", "Ciprés limón", ["Pino Limón", "Pino Limón"] , "Evita el encharcamiento y el exceso de poda en madera vieja.");
  add("tropicalEasy", "Ficus elastica", "Gomero", ["gomero o Ficus elastica", "Gomero"]);
  add("herbSun", "Lavandula dentata", "Lavanda dentada", ["lavanda dentada", "Lavanda"], "Necesita drenaje alto; evita riegos frecuentes y poda fuerte sobre madera sin hojas.", "huerto");
  add("herbMoist", "Mentha spicata", "Hierbabuena", ["Menta", "Hierbabuena", "Menta Blanca"], "Se extiende con rapidez; conviene cultivarla en maceta propia.", "huerto");
  add("tropicalEasy", "Ficus lyrata", "Ficus lira", ["Ficus Lyrata", "Ficus lyrata", "Gomero pera (lirata)", "Gomero Pera"]);
  add("tropicalEasy", "Ficus maclellandii", "Ficus Alii", ["Ficus maclellandii", "Ficus Ali"]);
  add("tropicalMoist", "Spathiphyllum wallisii", "Espatifilo", ["Spathiphyllum", "Spatifilium"]);
  add("outdoorSun", "Phyla nodiflora", "Tiki-tiki", ["Tiki Tiki"], "Cubresuelo rastrero de flor pequeña; puede extenderse y requiere espacio para cubrir.", "exterior");
  add("tropicalEasy", "Fatsia japonica", "Aralia japonesa", ["Aralia Japonesa"], "Prefiere luz filtrada; el sol fuerte puede marcar las hojas.");
  add("tropicalEasy", "Ficus microcarpa 'Moclame'", "Ficus Moclame", ["Ficus Moclame"]);
  add("tropicalEasy", "Ficus benjamina", "Ficus benjamina", ["Ficus benjamina"]);
  add("tropicalEasy", "Ficus altissima", "Ficus altissima", ["Ficus altissima", "Gomero Altísima"]);
  add("tenderFlower", "Strelitzia reginae", "Ave del paraíso", ["Strelitzia (Ave del Paraíso)", "Flor del Pájaro", "Flor del Pájaro"] , "En Santiago, proteger de heladas si está en maceta o expuesta a frío intenso.");
  add("tropicalEasy", "Philodendron erubescens", "Filodendro rojo", ["Philodendron erubescens"]);
  add("tropicalEasy", "Dracaena marginata", "Drácena marginata doble", ["Dracaena marginata (doble)"]);
  add("shrub", "Hebe sp.", "Verónica arbustiva (Hebe; especie por confirmar)", ["Arbusto Verónica", "Verónica Hebe", "Verónica Colombia", "Verónica Blanca"], "El género se aprecia en la foto, pero no es posible confirmar especie o cultivar.");
  add("outdoorSun", "Cupressaceae sp.", "Pino azul (especie por confirmar)", ["Pinos azules", "Pino Azul"], "La fotografía no muestra caracteres suficientes para identificar el género o cultivar; evitar etiquetarlo como especie confirmada.");
  add("tropicalMoist", "Alocasia macrorrhizos", "Manto de Eva", ["Manto de Eva"] , "Tropical sensible al frío. La savia puede irritar y la planta es tóxica por ingestión; mantener lejos de niños y mascotas.");
  add("outdoorSun", "Pelargonium × hortorum", "Cardenal o geranio", ["cardenales (geranios )", "Cardenal"], "Proteger de heladas fuertes y retirar flores marchitas para favorecer nuevos capítulos.");
  add("outdoorSun", "Ligustrum sinense", "Ligustrina", ["Ligustrina"]);
  add("outdoorSun", "Myoporum laetum", "Mióporo", ["Mióporo", "Mio Poro"]);
  add("outdoorSun", "Gazania rigens", "Gazania", ["Gazania"]);
  add("outdoorSun", "Lilium sp.", "Lirio (Lilium; variedad por confirmar)", ["Lilium (Lirio) doble", "Lilium"], "El cultivar no se distingue en la imagen. Mantener humedad durante crecimiento y reducir cuando el follaje se marchite.");
  add("tropicalEasy", "Dracaena marginata", "Drácena verde", ["Dracena Verde", "Dracena"]);
  add("tropicalEasy", "Beaucarnea recurvata", "Pata de elefante", ["Yuca pata de elefante", "Yuca Pie de Elefante"], "No es una yuca. Caudex sensible al exceso de agua; proteger de heladas en Santiago.", "interior", "Pata de elefante");
  add("succulent", "Schlumbergera truncata", "Pata de jaiba", ["Pata de Jaiba"], "Cactus epífito tropical: luz filtrada, no sol intenso; proteger de heladas.");
  add("shrub", "Hebe sp.", "Verónica Hebe (especie por confirmar)", ["Verónica Hebe", "Verónica Colombia"]);
  add("outdoorFlower", "Euryops pectinatus", "Margarita amarilla", ["Paquerette Amarillo"]);
  add("succulentSun", "Kalanchoe blossfeldiana", "Calanchoe en flor", ["Calanchoe en Flor", "Kalanchoe blossfeldiana"], "Sensible a heladas; retirar flores marchitas y permitir que el sustrato se seque entre riegos.");
  add("outdoorSun", "Hedera helix", "Hiedra variegada", ["Hiedra Variegada", "Hiedra"] , "Vigila su expansión en suelo y evita el sol fuerte de tarde en verano.");
  add("tenderFlower", "Calibrachoa × hybrida", "Calibrachoa", ["Calibrachoa"], "El cultivar no puede determinarse por la foto. Sensible a heladas; en Santiago suele tratarse como anual de temporada cálida.");
  add("outdoorSun", "Cordyline australis 'Red Star'", "Cordyline roja", ["Stenocarpus rojo"], "La fotografía corresponde a una cordilinea, no a Stenocarpus; proteger ejemplares jóvenes de heladas fuertes.", "exterior", "Cordyline roja");
  add("outdoorFlower", "Chrysanthemum × morifolium", "Crisantemo", ["Crisantemos"]);
  add("tropicalMoist", "Gardenia jasminoides", "Jazmín del Cabo", ["Jazmín del Cabo"], "Sensible a heladas y a aguas muy calcáreas; necesita humedad pareja y buena ventilación.");
  add("herbMoist", "Mentha spicata", "Hierbabuena", ["Hierbabuena"], null, "huerto");
  add("tropicalEasy", "Philodendron hederaceum 'Lemon Lime'", "Filodendro limón", ["Filodendro limón", "Filodendro", "Cordatum Variegado"]);
  add("tenderFlower", "Zantedeschia hybrids", "Cala de colores", ["Calas de Colores", "Calas de colores"], "El color no permite determinar el cultivar. Reducir el riego cuando entre en reposo.");
  add("tenderFlower", "Bougainvillea sp.", "Bugambilia", ["Buganvilia", "Bugambilia"], "Necesita sol abundante; sensible a heladas, proteger en invierno si está en maceta.");
  add("tenderFlower", "Coleus scutellarioides", "Coleo", ["Coleo"], "El sol suave intensifica color en algunos cultivares; evitar frío y sol fuerte repentino.");
  add("outdoorFlower", "Dianthus caryophyllus", "Clavel", ["Claveles", "Claveles Japoneses"]);
  add("tropical", "Saxifraga stolonifera", "Saxifraga fresa", ["Saxifraga fresa", "Petunia hybrida"], "La foto antes rotulada como petunia corresponde a Saxifraga stolonifera; no tolera sol fuerte ni heladas intensas.", "interior", "Saxifraga fresa");
  add("outdoorFlower", "Agapanthus praecox", "Agapanto blanco", ["Agapantos blancos", "Agapanto"]);
  add("tropicalEasy", "Ficus elastica 'Shivereana'", "Gomero Shivereana", ["Ficus shiveriana"]);
  add("tropical", "Pilea cadierei", "Pilea aluminio", ["Pilea cadierei"]);
  add("tropicalEasy", "Plectranthus ciliatus", "Dólar negro", ["Dólar Negro", "Dólar Negro"] , "La identificación es probable por la imagen, pero debe confirmarse con una foto cercana de hojas y tallos.");
  add("fern", "Asparagus setaceus", "Helecho espárrago", ["Helecho espárrago"] , "No es un helecho verdadero; sus bayas pueden ser tóxicas si se ingieren.");

  add("succulent", "Aeonium haworthii 'Kiwi'", "Aeonio Kiwi", ["Aeonium kiwi", "Aeonium (Rosa Verde)"], "Mantener la roseta seca en invierno y proteger de heladas intensas.");
  add("succulentSun", "× Graptosedum sp.", "Graptosedum", ["Graptosedum"]);
  add("succulentSun", "× Graptosedum 'California Sunset'", "Graptosedum California Sunset", ["Graptosedum 'California Sunset'"]);
  add("succulent", "Crassula ovata", "Árbol de jade", ["Crassula ovata (Árbol de Jade)", "Verónica jade", "Dólar Amarillo"] , "Proteger de heladas y evitar cambios bruscos de riego.");
  add("succulent", "Pachyphytum sp.", "Pachifito (especie por confirmar)", ["Pachyphytum"] , "No retirar la pruina cerosa de las hojas; la especie no se distingue con certeza.");
  add("succulentSun", "× Graptoveria 'Titubans'", "Graptoveria Titubans", ["Graptoveria Titubans"]);
  add("succulent", "Echeveria 'Set-Oliver'", "Echeveria Set Oliver", ["Echeveria 'Set Oliver'"]);
  add("succulent", "Aeonium decorum", "Aeonio decorum", ["Aeonium decorum"]);
  add("succulentSun", "Sedum adolphii", "Sedum dorado", ["Sedum adolphi"]);
  add("succulent", "Aeonium sp.", "Aeonio Castello (cultivar por confirmar)", ["Aeonium 'Castello'"]);
  add("succulent", "Haworthia cymbiformis", "Haworthia cymbiformis", ["Haworthia cymbiformis"], "Sol suave de mañana; el sol intenso puede quemar sus hojas.");
  add("succulent", "Aeonium arboreum", "Aeonio arbóreo", ["Aeonium arboreum"]);
  add("succulentSun", "Sedum palmeri", "Sedum palmeri", ["Sedum palmeri"]);
  add("succulent", "Crassula cordata", "Crassula cordata", ["Crassula cordata"]);
  add("succulentSun", "Sedum lineare", "Sedum lineare", ["Sedum lineare"]);
  add("succulent", "Crassula 'Tom Thumb'", "Crassula Tom Thumb", ["Crassula 'Tom Thumb'"]);
  add("succulent", "Crassula rogersii", "Crassula rogersii", ["Crassula rogersii"]);
  add("succulent", "Echeveria 'Cubic'", "Echeveria Cubic", ["Echeveria 'Cubic'"]);
  add("succulent", "Crassula ovata 'Variegata'", "Jade variegado", ["Crassula ovata 'Afra Variegata' (Jade Variegado)"]);
  add("succulent", "Echeveria 'Morning Glory'", "Echeveria Morning Glory", ["Echeveria 'Morning Glory'"]);
  add("succulentSun", "Sedum pachyphyllum", "Sedum pachyphyllum", ["Sedum pachyphyllum"]);
  add("cactus", "Euphorbia ferox", "Euphorbia ferox", ["Euphorbia ferox"], "No es un cactus; su látex es irritante. Usar guantes al manipular.");
  add("succulent", "Crassula dejecta", "Crassula dejecta", ["Crassula dejecta"]);
  add("cactus", "Rebutia albiflora", "Rebutia albiflora", ["Rebutia albiflora"]);
  add("succulent", "Echeveria 'Hakuhou'", "Echeveria Hakuhou", ["Echeveria 'Hakuhou'"]);
  add("cactus", "Mammillaria sp.", "Mammillaria (especie por confirmar)", ["cactus mammillaria"], "No se puede confirmar la especie con el nombre comercial; usar guantes al manipular espinas.");
  add("cactus", "Echinopsis sp.", "Echinopsis (especie por confirmar)", ["Cactus Echinopsis"], "La especie no puede confirmarse sin una fotografía de flor y cuerpo completo.");
  add("cactus", "Mammillaria bocasana", "Mammillaria bocasana", ["Mammillaria bocasana"], "Manipular con guantes; las espinas finas se desprenden con facilidad.");

  add("tropicalEasy", "Monstera deliciosa", "Monstera", ["Monstera"]);
  add("tropicalEasy", "Monstera deliciosa variegada", "Monstera Variegada", ["Monstera variagada", "Monstera Variegada"], "La variegación requiere luz brillante indirecta; el sol fuerte puede quemar las hojas.");
  add("citrus", "Citrus limon", "Limón Génova", ["Limón Genova"], "El cultivar no se confirma solo por el nombre comercial; proteger el árbol de heladas.", "frutales");
  add("fruit", "Prunus persica 'Nectar Cream'", "Duraznero Nectar Cream", ["Duraznero Nectar Cream"] , null, "frutales");
  add("fruit", "Pyrus communis 'Packham's Triumph'", "Peral Packham", ["Peral Packham"] , null, "frutales");
  add("fruit", "Prunus avium 'Bing'", "Cerezo Bing", ["Cerezo Bing"] , null, "frutales");
  add("citrus", "Citrus × aurantiifolia", "Limón sutil de Pica", ["Limón Sutil de Pica", "Limón Sutil de Pica (ejemplar grande)"] , "Lima sensible al frío: en Santiago, pasar a resguardo luminoso antes de noches bajo 10 °C.", "frutales");
  add("fruit", "Prunus persica 'Dr. Davis'", "Duraznero Dr. Davis", ["Durazno Dr. Davis", "Paraguayo"] , null, "frutales");
  add("fruit", "Prunus dulcis 'Nonpareil'", "Almendro Nonpareil", ["Almendro Non Pareil"] , null, "frutales");
  add("fruit", "Prunus avium", "Cerezo Corazón de Paloma", ["Cerezo Corazón de Paloma"] , "La variedad exacta debe verificarse con el proveedor; requiere polinización compatible para fructificar.", "frutales");
  add("herbSun", "Salvia rosmarinus", "Romero", ["Romero"] , null, "huerto");
  add("unknown", "Aloysia citrodora", "Cedrón", ["Cedrón"] , "Nombre científico asignado al cedrón común; revisar etiqueta de origen.", "huerto");
  add("herbMoist", "Apium graveolens", "Apio", ["Apio"] , null, "huerto");
  add("succulent", "Crassula ovata", "Jade", ["Verónica jade"] , null, "suculentas");
  add("outdoorFlower", "Celosia argentea var. plumosa", "Celosía plumosa", ["Celosía Plumosa", "Celosía plumosa"] , "Sensible a heladas; tratar como anual de temporada cálida en Santiago.");
  add("outdoorSun", "Yucca gigantea", "Yuca", ["Yuca", "Yuca chica"] , "La foto de la yuca chica no permite confirmar especie; proteger plantas jóvenes de heladas fuertes.");
  add("herbSun", "Aloysia citrodora", "Cedrón", ["Cedrón"], null, "huerto");
  add("succulent", "Callisia repens", "Dólar amarillo", ["Dólar Amarillo", "Dolar amarillo", "Rayito"] , "La identificación del dólar amarillo se basa en la imagen disponible; proteger de heladas.", "suculentas");
  add("succulent", "Tradescantia fluminensis", "Dólar verde", ["Dolar verde", "Velo de la Novia", "Velo de la Novia"] , "Velo de novia es un nombre común ambiguo; identificación asignada por el contexto comercial local. Mantener controlado si se planta en suelo.", "suculentas");
  add("succulent", "Sedum morganianum", "Cola de burro", ["Sisu"]);
  add("citrus", "Citrus sinensis", "Naranjo", ["Naranjo amor"] , "Cítrico sensible a heladas: ubicar al sol y resguardar en invierno santiaguino.", "frutales");
  add("tropicalEasy", "Chlorophytum comosum", "Mala Madre", ["Mala madre verde"], "Puede producir hijuelos colgantes; proteger de heladas.");
  add("tropicalEasy", "Chlorophytum comosum 'Variegatum'", "Mala Madre Blanca", ["Cinta blanca"], "Puede producir hijuelos colgantes; proteger de heladas.");
  add("outdoorSun", "Buddleja globosa", "Matico", ["Matico grande"] , "Especie nativa de Chile; no confundir el nombre común con otros maticos medicinales.", "huerto");
  add("tropicalEasy", "Peperomia polybotrya", "Peperomia cucharita", ["Peperonia Cucharita", "Cucharitas"]);
  add("tropical", "Begonia sp.", "Begonia ala de ángel (especie por confirmar)", ["Ala de Ángel", "Ala de ángel", "Begonia rex rosada"], "La especie o cultivar no se confirma por el nombre comercial; evitar mojar el follaje de forma persistente.");
  add("tropicalEasy", "Euphorbia pulcherrima", "Flor de Pascua", ["Flor de Pascua roja"] , "Sensible a frío y corrientes; la savia puede irritar piel y ojos.");
  add("tropicalEasy", "Dracaena marginata", "Drácena marginata", ["Dracena marginata"]);
  add("tropicalEasy", "Dracaena marginata", "Drácena marginata", ["Dracena verde"]);

  add("vegetable", "Capsicum annuum", "Ají", ["Ají"] , null, "huerto");
  add("tenderFlower", "Begonia × tuberhybrida", "Begonia tuberosa", ["Begonia Tuberosa"] , "Sensible a las heladas; mantener en lugar protegido y reducir el riego durante el reposo.");
  add("herbSun", "Calendula officinalis", "Caléndula", ["Caléndula"] , null, "huerto");
  add("herbSun", "Coriandrum sativum", "Cilantro", ["Cilantro"] , "Con calor intenso puede florecer antes; mantener humedad pareja.", "huerto");
  add("vegetable", "Curcuma longa", "Cúrcuma", ["Cúrcuma"] , "Tropical: en Santiago proteger de heladas y mantener cálida durante el reposo invernal.", "huerto");
  add("outdoorFlower", "Helianthus annuus", "Girasol", ["Girasol"]);
  add("fern", "Selaginella kraussiana", "Selaginela", ["Helecho Selaginela"]);
  add("fern", "Nephrolepis sp.", "Helecho zanahoria (especie por confirmar)", ["Helecho Zanahoria"], "Nombre común variable; no se distingue la especie en la ficha.");
  add("tropicalEasy", "Plectranthus coleoides", "Incienso", ["Incienso"], "Proteger de heladas y no ingerir sin identificación y recomendación profesional.");
  add("herbMoist", "Melissa officinalis", "Melisa o toronjil", ["Melisa", "Toronjil", "Paracetamol"], "La ficha rotulada 'Paracetamol' no identifica una planta medicinal segura; confirmar la especie antes de consumir o usar con fines terapéuticos.", "huerto");
  add("herbSun", "Origanum vulgare", "Orégano", ["Orégano"] , null, "huerto");
  add("herbSun", "Mentha pulegium", "Poleo", ["Poleo"] , "No consumir durante embarazo; consultar a un profesional de salud antes de usos medicinales.", "huerto");
  add("herbSun", "Ruta graveolens", "Ruda", ["Ruda"] , "La savia puede causar irritación y fotosensibilidad; usar guantes y no ingerir.", "huerto");
  add("tropicalEasy", "Dracaena trifasciata", "Sansevieria", ["Sansiveria"] , "Tóxica por ingestión para mascotas; permitir que el sustrato se seque entre riegos.");
  add("vegetable", "Solanum lycopersicum", "Tomate", ["Tomate"] , null, "huerto");
  add("tropicalEasy", "Tradescantia sp.", "Tradescantia (especie por confirmar)", ["Tradescantia"] , "El género requiere más detalle para confirmar especie; proteger de heladas.");
  add("tropicalEasy", "Pilea sp.", "Pilea (especie por confirmar)", ["Pilea"] , "El nombre y la foto disponibles no bastan para precisar la especie.");
  add("outdoorSun", "Cupressaceae sp.", "Conífera de follaje azul (especie por confirmar)", ["Pino Azul"] , "La foto no permite identificar con seguridad la especie de conífera.");
  add("succulent", "Aptenia cordifolia", "Rayito", ["Rayito"] , "Evitar heladas y controlar su expansión si se planta directamente en el jardín.");
  add("unknown", "Artemisia sp.", "Hierba aromática (variedad por confirmar)", ["Hierba aromática (confirmar variedad)"] , "Confirmar la especie antes de consumirla o atribuirle propiedades medicinales.", "huerto");

  add("tropicalEasy", "Begonia rex-cultorum", "Begonia rex", ["Begonia Rex", "Begonia rex rosada"], "Evitar sol directo y agua estancada sobre las hojas.");
  add("shrub", "Aralia sp.", "Aralia (especie por confirmar)", ["Aralia"], "El nombre común no permite precisar la especie de aralia.");
  add("tenderSun", "Petunia × atkinsiana", "Petunia híbrida", ["Calibrachoa. Petunia", "Petunia", "Petunia hybrida"], null, "exterior", "Petunia");
  add("tenderSun", "Calibrachoa × hybrida", "Calibrachoa", ["Calibrachoa"], "El cultivar no puede determinarse por la foto. Sensible a heladas; en Santiago suele tratarse como anual de temporada cálida.");
  add("outdoorSun", "Strelitzia reginae", "Ave del paraíso", ["Strelitzia (Ave del Paraíso)", "Flor del Pájaro"], "Necesita sol directo y espacio; proteger ejemplares jóvenes y plantas en maceta de heladas fuertes en Santiago.");
  add("tropicalEasy", "Ficus elastica 'Belize'", "Gomero Belice", ["Gomero Belice"]);
  add("tropicalEasy", "Ficus elastica 'Tineke'", "Gomero Tineke", ["Gomero Teniki"]);
  add("tropicalEasy", "Ficus elastica", "Gomero variado", ["Gomero Variado"], "Cultivar no especificado; proteger de frío y corrientes.");
  add("tropicalEasy", "Ficus microcarpa", "Ficus bonsái", ["Ficus bonsai"], "El nombre no identifica el cultivar; podar con herramientas limpias y evitar cambios bruscos.");
  add("coolFlower", "Primula acaulis", "Oreja de oso", ["Oreja de Oso"], "La foto corresponde a una prímula; necesita humedad regular y agradece sombra luminosa en tardes calurosas.", "exterior", "Oreja de oso");
  add("tropicalEasy", "Philodendron hederaceum 'Brasil'", "Filodendro cordatum variegado", ["Cordatum Variegado"]);
  add("outdoorFlower", "Dianthus chinensis", "Clavel japonés", ["Claveles Japoneses"]);
  add("herbSun", "Bellis perennis", "Margarita de los prados", ["Paqueret"]);
  add("outdoorSun", "Cupressaceae sp.", "Conífera de follaje azul (especie por confirmar)", ["Pinos azules", "Pino Azul"], "La foto no permite identificar con seguridad la especie de conífera.");
  add("outdoorSun", "Yucca gigantea", "Yuca", ["Yuca", "Yuca chica"], "La foto de la yuca chica no permite confirmar especie; proteger plantas jóvenes de heladas fuertes.");
  add("succulent", "Beaucarnea recurvata", "Pata de elefante", ["Yuca pata de elefante", "Yuca Pie de Elefante"], "No es una yuca. Caudex sensible al exceso de agua; proteger de heladas en Santiago.", "interior", "Pata de elefante");
  add("herbMoist", "Melissa officinalis", "Melisa o toronjil", ["Paracetamol"], "La ficha rotulada 'Paracetamol' no identifica una planta medicinal segura; confirmar la especie antes de consumir o usar con fines terapéuticos.", "huerto");
  add("herbSun", "Aptenia cordifolia", "Rayito", ["Rayito"], "Evitar heladas y controlar su expansión si se planta directamente en el jardín.", "suculentas");

  add("fern", "Asplenium nidus", "Helecho nido de ave", ["Helecho nido de ave"], "Evita verter agua en el centro de la roseta y protege de corrientes frías.");
  add("succulent", "Crassula ovata 'Gollum'", "Jade Gollum (dedos de Shrek)", ["Crassula ovata 'Gollum' (Dedos de Shrek)"]);
  add("tropicalEasy", "Dracaena fragrans 'Warneckii'", "Drácena Warneckii", ["Guarnekia"], "El nombre del catálogo parece una transcripción de Warneckii; confirmar la etiqueta del proveedor.", "interior", "Drácena Warneckii");
  add("tropical", "Goeppertia sp.", "Calatea de hojas listadas", ["Maranta o Calathea"], "La foto no permite distinguir especie ni cultivar dentro de Goeppertia; mantener sin sol directo y sin frío.", "interior", "Calatea de hojas listadas");
  add("unknown", "Identificación botánica pendiente", "Planta sin identificar", ["Paracetamol"], "La ficha estaba rotulada 'Paracetamol', nombre que no permite identificar la planta. No consumir ni usar medicinalmente hasta confirmar su especie.", "huerto", "Planta por identificar");
  add("outdoorSun", "Yucca sp.", "Yuca chica (especie por confirmar)", ["Yuca chica"], "La foto y el nombre comercial permiten reconocer el género, pero no confirmar la especie; proteger ejemplares jóvenes de heladas fuertes.");
  add("tropicalEasy", "Dracaena sp.", "Drácena (especie por confirmar)", ["Dracena"], "La ficha no especifica especie o cultivar; mantener protegida de heladas.");
  add("tropicalEasy", "Ficus sp.", "Ficus (especie por confirmar)", ["Ficus"], "El nombre comercial no identifica la especie; revisar hojas y etiqueta del proveedor.");
  add("herbMoist", "Coriandrum sativum", "Cilantro", ["Cilantro"], "Con calor intenso puede florecer antes; mantener humedad pareja y sombra ligera por la tarde.", "huerto");
  add("herbMoist", "Mentha suaveolens 'Variegata'", "Menta blanca (cultivar por confirmar)", ["Menta Blanca"], "La identificación como cultivar variegado se basa en el nombre comercial; controlar su expansión.", "huerto");

  add("tropicalMoist", "Maranta leuconeura", "Maranta de oración", ["Maranta Leuconeura", "Maranta", "Maranta tricolor"]);
  add("shrub", "Veronica sp.", "Hebe o verónica arbustiva (especie por confirmar)", ["Arbusto Verónica", "Verónica Hebe", "Verónica Colombia", "Verónica Blanca"], "El nombre comercial y la foto permiten reconocer una verónica arbustiva tipo Hebe, pero no confirmar la especie o cultivar.");

  function normalize(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }

  function apply(products) {
    const byName = new Map();
    records.forEach(record => record.names.forEach(name => byName.set(normalize(name), record)));

    products.forEach(product => {
      if (["sustrato", "maceteros", "amigurumis"].includes(product.c)) return;
      const record = byName.get(normalize(product.n));
      const data = record || {
        profile: "unknown",
        scientificName: "Identificación botánica pendiente",
        commonName: product.n,
        observation: "No se pudo confirmar el taxón con la información de esta ficha. Solicitar una foto nítida de hojas, tallos y flores para completar la identificación."
      };
      const profile = PROFILES[data.profile];
      product.commonName = data.commonName;
      product.scientificName = data.scientificName;
      product.plantType = profile.type;
      product.waterLevel = profile.water;
      product.light = profile.light;
      product.wateringFrequency = profile.frequency;
      product.idealTemperature = profile.temperature;
      product.difficulty = profile.difficulty;
      product.observation = data.observation || profile.observation;
      if (data.displayName) product.n = data.displayName;
      product.c = data.category || PROFILE_CATEGORIES[data.profile] || product.c || "interior";
      product.care = [
        `Nombre común: ${product.commonName}`,
        `Nombre científico: ${product.scientificName}`,
        `Tipo: ${product.plantType}`,
        `Nivel de riego: ${product.waterLevel}`,
        `Luz: ${product.light}`,
        `Frecuencia aproximada de riego para Santiago de Chile: ${product.wateringFrequency}`,
        `Temperatura ideal: ${product.idealTemperature}`,
        `Dificultad: ${product.difficulty}`,
        `Observación importante: ${product.observation}`,
        FINAL_NOTE
      ].join("\n");
    });
  }

  window.BOTANICAL_CATALOG = { apply, finalNote: FINAL_NOTE };
})();
