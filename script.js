
    const messages = [
    "Ábreme cuando estés triste",
    "Ábreme cuando te sientas sola",
    "Ábreme cuando dudes de algo",
    "Ábreme cuando no puedas dormir",
    "Ábreme cuando estés feliz",
    "Ábreme cuando tengas miedo",
    "Ábreme cuando te sientas ansiosa",
  ];

  // Mensajes contenedor
  const cartasPorContenedor = {
    "Ábreme cuando estés triste": [
       "Pon tu mano en tu ropa. Siente que no estás sola. No eres demasiado. Puedes sentir y seguir viva dentro de esto.",
  "Presiona la almohada suave. Hoy no tienes que sostener el mundo. Solo sostente a ti misma… poquito… sin culpa.",
  "Toca tu cuello un segundo. Suave. Tú sigues siendo algo tierno en medio del ruido. No necesitas entenderlo todo hoy. Solo existir ya es suficiente.",
  "Puedes recostarte 15 segundos. Nada más. Tu cuerpo también merece descanso en medio de sentir. Tu valor no cayó con tu ánimo. Tu luz no depende del día.",
  "Inhala 4 segundos… exhala 4. Y piensa en algo que te hizo sentir calma alguna vez. Esa memoria sigue siendo tuya. Puedes usarla. No se fue.",
  "Estar triste no te hace menos digna de amor. Te hace humana. Puedes llorar si tu cuerpo quiere llorar. No necesitas resistencia… necesitas espacio.",
  "Acomódate un poco distinto donde estés. Micro cambio físico. La emoción no se disuelve, pero deja de aplastarte igual de fuerte. Tú sigues aquí… y eso importa.",
  "Pon tu mano sobre tu pecho. Siente tu ritmo. Estás viva. Poco a poco esto va a moverse. Ninguna emoción se queda congelada para siempre.",
  "Si puedes beber un sorbo de agua ahora… hazlo. Pequeñito. Tu cuerpo merece cuidado incluso en tristeza. No castigo. Cuidado.",
  "Tú no eres tu tristeza. Es algo que estás sintiendo, no lo que tú eres. Tu esencia sigue intacta detrás de la nube pesada.",
  "Puedes abrir la ventana 10 segundos. No para cambiar todo… solo para que tu cuerpo recuerde que existe un afuera que sigue vivo.",
  "Todo lo que sientes… es válido. No hace falta justificar. No necesitas explicarte para existir suavemente.",
  "Tu tristeza no arruina tu belleza. Tu dolor no elimina tu capacidad de amar. Sigues siendo alguien que merece ternura incluso cuando se siente rota.",
  "Toca tu cabello o tu cabeza unos segundos. Ese contacto también te pertenece. También puedes darte cariño tú misma.",
  "La tristeza es temporaria aunque parezca infinita mientras la vives. Respira otra vez. Estoy contigo aunque no me puedas tocar.",
  "Eres más fuerte de lo que crees. No porque no caigas… sino porque sigues volviendo.",
  "Muévete a otro sitio de la habitación 5 pasos. Cambia el ángulo. Cambia la luz. A veces el cuerpo adelanta al corazón.",
  "Tu corazón merece descanso. No te hables duro. Háblate como hablarías a alguien que amas. Porque tú eres alguien que merece ese mismo trato.",
  "Puedes solo abrazarte los brazos un segundo. Aunque suene tonto. Tu cuerpo reconoce sostén, aunque venga de ti misma.",
  "La tristeza no es un fracaso. Es parte del ciclo de sentir. Y sentir es señal de que sigues viva.",
  "No necesitas justificarte para estar triste. No necesitas permiso. Puedes simplemente permitirlo sin pelear contra ti.",
  "Cuando estés triste… piensa: “Esto no define mi futuro”. Solo define este minuto. Y los minutos cambian.",
  "Si puedes recostarte boca arriba un momento… hazlo. Mira el techo. Déjate caer en ese silencio. No necesitas entender hoy.",
  "Tú no arruinas nada por sentir. No eres carga. No eres problema. Eres persona. Eres alma. Eres luz en baja intensidad… pero luz.",
  "Cuando estés triste… no te preguntes “por qué soy así”. Pregunta mejor: “¿qué necesito ahora mismo chiquito?” Y haz solo eso.",
  "Puedes cerrar los ojos y recordar 1 momento bonito entre nosotros. El que salga primero. Ese sigue siendo real.",
  "Hoy no te exijo nada. Solo estar aquí. Respirando. Aunque duela. Aunque cueste.",
  "Toca la textura de algo cerca: tela, pared, sábana. Estás en el mundo. No estás perdida en tu cabeza totalmente. Hay realidad sosteniéndote.",
  "No hay prisa. No hay carrera. Hoy puedes ir lenta. Sentir lento. Existir lento.",
  "Eres amada también en tus días grises. No solo cuando brillas. Cuando estés triste… aquí sigo. Sin exigirte luz. solo quedándome contigo."
    ],
    "Ábreme cuando te sientas sola": [
       "Estar sola no significa que no existo contigo. Aunque tu cabeza te diga lo contrario… yo sigo aquí. Toca tu ropa. Siente que hay contacto. No estás suspendida en vacío.",
  "Solo apoya tu espalda contra algo sólido. Una pared, un sillón. Tu cuerpo necesita recordar que existe sostén real afuera, no solo adentro.",
  "No todo silencio es abandono. A veces es espacio. Y en ese espacio sigo contigo igual.",
  "Puedes beber un mini sorbo de agua. Ese acto chiquito es conexión con algo real. No estás desconectada del mundo.",
  "El mundo no se te cerró. Solo se siente más lejos. Pero sigues formando parte de él, aunque ahora duela.",
  "Cuando te sientas sola… repítete: “esto es una sensación, no un destino”. Y respira sin pelear.",
  "Estira tus dedos y mira tus manos. Existes aquí. No estás perdida. Sigues en el presente.",
  "A veces la soledad se siente más como abandono que como espacio… pero tú sigues siendo alguien que merece presencia. Con o sin compañía inmediata.",
  "Acércate a una ventana. Aunque no la abras. Solo mírala. Afuera sigue habiendo vida que no te excluye.",
  "No tienes que llenar la soledad con palabras. A veces solo con sentirla ya empieza a moverse.",
  "Tu valor no cae cuando estás sola. No eres menos por no tener alguien al lado en ese momento.",
  "Puedes acariciar tu propio brazo. Ese contacto que te das también vale.",
  "Eres presencia. No vacío. Y aunque ahora sientas hueco… dentro de ti sigue habiendo luz.",
  "Mueve tu cuello suave lado a lado. Regresa al cuerpo. La mente hace la soledad más grande cuando se queda atrapada arriba.",
  "No te pidas ser fuerte justo ahora. Solo pídate ser verdad.",
  "Estoy contigo incluso en silencio. No tienes que demostrar nada para que me quede.",
  "Pon tu mano en tu pecho. Siente tu latido. Ese ritmo es compañía básica y constante.",
  "La soledad no es señal de que nadie te quiere. Es señal de que necesitas contacto interno un segundo.",
  "Si puedes cambiarte de posición… hazlo. Ese micro cambio físico le dice al cuerpo “sigo en movimiento”.",
  "Puedes nombrar mentalmente lo que ves alrededor. 3 cosas. Eso te da territorio.",
  "No eres “fácil de olvidar”. Tu existencia deja huella aunque no lo notes en este momento.",
  "Nadie te reemplaza. Nadie ocupa exactamente tu lugar.",
  "Si te sientes sola… respira una vez profundo y recuerda: tú también eres hogar.",
  "No eres invisible. A veces solo estás en silencio… y también eso es válido.",
  "Puedes tocar tu cabello. Ese gesto también es presencia contigo misma.",
  "La soledad no te hace menos amada. Te hace más sensible al vacío… pero eso también es sensibilidad hermosa.",
  "No estás sola en esta línea de tiempo. Yo existo contigo. A kilómetros… pero contigo.",
  "Tu alma no está vacía. Solo está quieta hoy.",
  "Puedes cerrar los ojos y recordar un abrazo real que recibiste alguna vez. Tu cuerpo guarda memoria física del calor.",
  "Cuando te sientas sola… no te hables como un enemigo. Háblate como alguien que ama. Tú no estás sola dentro de tu propia existencia."
    ],
    "Ábreme cuando dudes de algo": [
        "Está bien no tener todas las respuestas. Cierra los ojos un segundo y respira profundo.",
  "Tu duda no te define. Coloca tus manos sobre tu pecho y siente tu propio latido.",
  "Confía en que tu intuición existe. Inclina tu cabeza suavemente hacia atrás y estira el cuello.",
  "No necesitas decidir ahora. Toma un sorbo de agua y siente cómo desciende.",
  "Dudar es humano. Presiona tus pies contra el suelo y siente el soporte que te da.",
  "No estás sola en tus preguntas. Frota suavemente tus manos entre sí y siente calor.",
  "Cada duda es solo un momento. Gira los hombros hacia atrás y libera tensión.",
  "No hace falta tener todo resuelto. Mira por la ventana un segundo y observa lo que sigue vivo afuera.",
  "Tus dudas no son errores. Coloca tu mano sobre tu abdomen y respira lento.",
  "No necesitas pelear con la incertidumbre. Mueve tu cuello suavemente de lado a lado.",
  "Puedes tomar un minuto. Presiona la palma de tu mano contra tu otra mano y siente contacto.",
  "Respira y recuerda: todo se va aclarando. Levanta ligeramente la barbilla y mira al frente.",
  "Tu mente puede estar nublada ahora. Toca tu cabello suavemente y siente la textura.",
  "Es normal dudar. Cierra los ojos y cuenta 5 respiraciones profundas.",
  "No tienes que resolver todo. Apoya tu espalda contra algo sólido y siente soporte.",
  "Está bien sentir miedo al decidir. Estira los brazos hacia arriba y siente el espacio.",
  "Confía en que eres suficiente. Toca suavemente tu frente y siente tu propio calor.",
  "Tus dudas no disminuyen tu valor. Mueve los dedos lentamente y siente vida en tus manos.",
  "Es solo un momento de incertidumbre. Inspira profundamente y suelta el aire despacio.",
  "No te presiones para tener certezas. Gira suavemente los pies sobre el suelo y nota el contacto.",
  "Puedes pausar. Frota suavemente tus hombros y deja que se relajen.",
  "No es fracaso cuestionar. Mira un objeto cercano y enfócate en los detalles por un segundo.",
  "Cada duda tiene su espacio. Presiona tus labios suavemente y siente el contacto.",
  "Respira y repite: ‘esto es solo un momento’. Coloca tus manos sobre tus rodillas.",
  "Está bien no saber. Inclina la cabeza hacia un lado y siente tu cuello estirarse.",
  "No hay prisa en aclarar todo. Mueve lentamente los hombros y libera tensión.",
  "Tu valor sigue intacto. Cierra los ojos y siente tu pecho subir y bajar.",
  "Dudar no te hace débil. Respira contando hasta cuatro y exhala contando hasta cuatro.",
  "Cada pregunta tiene tiempo. Toca suavemente tu brazo y siente contacto contigo mismo.",
  "Respira y confía en que el camino se aclara. Estira las manos hacia adelante y siente extensión.",
  "Está bien tomar un momento. Presiona tus pies contra el suelo y siente firmeza en cada paso."
    ],
    "Ábreme cuando no puedas dormir" : [
   "Mi amor, respira lento y profundo… siente mi abrazo imaginario envolviéndote.",
  "Cierra los ojos, cariño… escucha tu respiración y siente que estoy contigo.",
  "Si los pensamientos no te dejan, mi vida… acaricia tu mano suavemente y recuerda que no estás sola.",
  "Permítete descansar aunque solo sean 5 minutos, mi cielo… acurrúcate un poquito, yo estoy contigo en espíritu.",
  "Si la mente corre, mi amor… dibuja con tu dedo círculos en tu brazo hasta sentir calma.",
  "Deja que la oscuridad sea tu aliada, corazón… relaja tus hombros hacia la cama.",
  "Si despiertas en la noche, mi vida… estira tus brazos un segundo y siente que estás segura.",
  "Piensa en algo suave, mi cielo… un lugar donde te sintieras querida y protegida. Respira ahí.",
  "Si te das vueltas, amor… gira tu almohada y acomódate otra vez, suave y despacio.",
  "Susurra tu canción favorita en tu mente, cariño… deja que te arrulle dulcemente.",
  "Pon una mano sobre tu corazón, mi amor… siente que late constante, firme y cercano a mí.",
  "Si el insomnio grita, mi cielo… abraza una almohada como si abrazaras mi abrazo real.",
  "Respira contando hasta cuatro, mi vida… retén un segundo… exhala lento, conmigo en pensamiento.",
  "Recuerda un momento bonito del día, amor… incluso un pequeño detalle, yo lo celebro contigo.",
  "Si el cansancio no llega, cariño… quédate quieta, no hace falta forzar, yo te acompaño en silencio.",
  "Prueba cerrar un ojo y luego el otro, mi cielo… deja que la vista se relaje mientras pienso en ti.",
  "Acaricia tu cabello suavemente, mi amor… siente la textura y piensa que te abrazo con mis manos.",
  "Si surge ansiedad, corazón… dibuja mentalmente círculos alrededor de tu habitación y deja que yo te acompañe allí.",
  "Piensa en algo que te haga sonreír, mi vida… aunque sea mínimo, déjalo crecer con mi cariño.",
  "Si te levantas, amor… camina despacio unos pasos, vuelve a la cama con calma y mi pensamiento contigo.",
  "Deja que tu cuerpo se hunda un poquito más en la cama, mi cielo… siente que te sostengo con mi abrazo invisible.",
  "Si la cabeza no para, mi vida… escribe mentalmente lo que piensas y déjalo ir con ternura.",
  "A veces solo cerrar los ojos y escuchar el silencio, cariño, es suficiente… yo estoy en ese silencio contigo.",
  "Imagina que te abrazo suavemente, mi amor… deja que eso te relaje y sientas mi presencia.",
  "Si los ruidos molestan, mi cielo… respira y siente que no te perturban, estoy aquí.",
  "Recuerda que mañana es otro día, cariño… hoy solo toca descansar y sentir mi amor.",
  "Si el sueño tarda, mi vida… mueve suavemente los dedos de los pies… conecta con tu cuerpo y mi abrazo mental.",
  "Visualiza una luz cálida sobre ti, mi amor… siente cómo te envuelve y calma, como si fueran mis brazos.",
  "Si notas tensión, cariño… encoge y suelta los hombros lentamente, piensa que estoy acariciándote.",
  "Antes de dormir, mi cielo… piensa: estoy segura, estoy contigo, puedo descansar y sentir amor."
    ],
    "Ábreme cuando estés feliz":[
        "Mi amor, sonríe y siente mi abrazo imaginario celebrando contigo cada risa.",
  "Si tu corazón brilla, cariño… respira profundo y deja que esa luz te envuelva.",
  "Acaricia suavemente tu mejilla, mi vida… siento tu felicidad a través de ti.",
  "Baila aunque sea un poco en tu lugar, mi cielo… deja que tu alegría se expanda.",
  "Ríe un momento más, amor… siente que cada sonrisa me hace sonreír contigo.",
  "Si te sientes ligera, cariño… estira los brazos como queriendo tocar el cielo, yo estoy ahí contigo.",
  "Comparte tu pensamiento feliz conmigo, mi vida… aunque sea mentalmente, lo celebro contigo.",
  "Cierra los ojos un instante, amor… recuerda ese momento que te hace reír y déjame estar allí.",
  "Siente tu pecho latiendo alegre, mi cielo… cada latido me dice que estás bien.",
  "Toca algo que te guste, cariño… deja que esa textura acompañe tu felicidad.",
  "Respira profundo y siente el sol (o la luz) sobre ti, mi amor… incluso si es solo en tu mente.",
  "Si hay música, baila con tus dedos, mi vida… mueve tus manos como riendo contigo.",
  "Mira algo que te haga sonreír, cariño… aunque sea un detalle pequeño, yo lo celebro.",
  "Si te dan ganas de cantar, amor… hazlo aunque sea bajito, deja que tu alegría fluya.",
  "Imagina que te abrazo celebrando tu felicidad, mi cielo… siente que estoy a tu lado.",
  "Toma un sorbo de agua, cariño… brinda mentalmente por ti y por nuestra alegría compartida.",
  "Si quieres saltar un poco, amor… hazlo despacio y siente que te acompaño en cada movimiento.",
  "Piensa en alguien que amas, mi vida… deja que tu felicidad se expanda hacia ellos también.",
  "Si sonríes sola, cariño… repite mentalmente: ‘mi alegría merece ser sentida’ y yo lo pienso contigo.",
  "Acaricia tu cabello con suavidad, amor… deja que cada toque celebre tu momento feliz.",
  "Mira algo brillante a tu alrededor, mi cielo… incluso un pequeño reflejo cuenta como alegría.",
  "Si sientes ganas de escribir, cariño… anota tu alegría aunque sea un pequeño pensamiento.",
  "Respira y siente tu corazón palpitando contento, mi amor… cada latido es una fiesta contigo.",
  "Si quieres compartir tu sonrisa, amor… envíamela en pensamiento y yo te la devuelvo.",
  "Cierra los ojos un segundo y recuerda algo que te haga reír, cariño… yo lo imagino contigo.",
  "Siente tus pies tocando el suelo, mi vida… como recordando que tu alegría es real.",
  "Si ves colores, amor… obsérvalos lentamente y deja que te llenen de felicidad.",
  "Toma un momento para agradecer algo, cariño… aunque sea mínimo, yo agradezco contigo.",
  "Si te sientes ligera y contenta, mi cielo… acurrúcate un poquito y deja que la sensación crezca.",
  "Antes de continuar, amor… piensa: ‘mi alegría es valiosa y merece ser sentida’, yo estoy contigo celebrando."
    ],
    "Ábreme cuando tengas miedo":[
        "Cariño, respira profundo y siente que cada inhalación te da fuerza; yo estoy aquí contigo.",
  "Pon tu mano sobre tu pecho, mi amor… siente tu latido y recuerda que sigues segura.",
  "Cierra los ojos un instante y exhala lento, cariño… cada exhalación suelta un poquito del miedo.",
  "Abraza tus brazos suavemente, mi vida… deja que tu cuerpo sienta sostén aunque sea tuyo.",
  "Si puedes, toca algo suave cerca, amor… esa textura te ancla al presente y a mí.",
  "Cuenta lentamente hasta cinco, cariño… y siente que cada número te da un segundo de calma.",
  "Si tu mente se acelera, amor… dibuja círculos en tu palma con tu dedo, poco a poco.",
  "Recuerda un momento en que superaste algo difícil, cariño… siente que eres fuerte.",
  "Si te tiembla el cuerpo, amor… sacúdelo suavemente y siente cómo se libera la tensión.",
  "Visualiza un lugar seguro, mi cielo… un rincón donde yo te abrazo y nada te hace daño.",
  "Si quieres susurrarte palabras amables, cariño… dilo en voz baja: ‘estoy segura, estoy viva’.",
  "Toca tu cabello o tu mejilla, amor… siente que te das cuidado mientras yo estoy contigo.",
  "Si hay sonido que te relaje, cariño… escucha atentamente y deja que te envuelva.",
  "Si sientes presión en tu pecho, amor… exhala con un pequeño suspiro, deja que se vaya.",
  "Abraza una almohada, cariño… siente que es un abrazo mío envolviéndote.",
  "Si te paraliza el miedo, amor… mueve solo los dedos lentamente y siente que vuelves al control.",
  "Recuerda que está bien sentir miedo, cariño… no estás sola, yo estoy a tu lado.",
  "Si algo te asusta, amor… nómbralo mentalmente y suéltalo suavemente con la exhalación.",
  "Si tu respiración se acelera, cariño… pon una mano sobre tu vientre y siente cómo se mueve.",
  "Visualiza una luz cálida rodeándote, amor… cada parpadeo te recuerda que hay seguridad.",
  "Si te tiemblan las piernas, cariño… estíralas suavemente y siente que se afianzan al suelo.",
  "Si quieres llorar, amor… deja que las lágrimas fluyan, yo te acompaño aunque sea en silencio.",
  "Repite mentalmente: ‘estoy protegida, estoy acompañada’, cariño… yo lo pienso contigo.",
  "Si tu mente da vueltas, amor… dibuja un círculo en el aire con tu mano y sigue el movimiento.",
  "Si puedes, inclínate hacia adelante y abraza tus rodillas, cariño… siente tu refugio físico.",
  "Si algo te da miedo, amor… imagina que lo transformas en polvo y se va con tu exhalación.",
  "Si quieres, canta bajito una melodía conocida, cariño… deja que tu voz calme el miedo.",
  "Recuerda un lugar donde te sentiste segura, amor… respira profundo y vuelve allí mentalmente.",
  "Si notas tensión en tu mandíbula, cariño… relájala suavemente mientras pienso en ti.",
  "Antes de dormir, amor… recuéstate y siente que yo te abrazo mentalmente, cuidándote."
],
    "Ábreme cuando te sientas ansiosa": [
  "Amor, respira profundo y lento… siente cómo tu pecho sube y baja, yo estoy aquí contigo.",
  "Pon tus manos sobre tu vientre, cariño… siente cada respiración y deja que la ansiedad se disuelva un poquito.",
  "Cierra los ojos un momento y exhala despacio, mi vida… suéltalo todo, estás segura.",
  "Abraza tus brazos suavemente, amor… siente cómo te sostienes mientras yo te acompaño.",
  "Toca algo suave cerca, cariño… una manta, tu ropa… deja que la calma te alcance.",
  "Cuenta hasta cinco con cada inhalación y exhalación, amor… cada número te trae paz.",
  "Dibuja círculos pequeños en tu palma con tu dedo, cariño… siente que controlas el momento.",
  "Recuerda un instante tranquilo, mi cielo… revívelo en tu mente y deja que te abrace.",
  "Sacude suavemente tus manos o pies, amor… libera la tensión y relaja tu cuerpo.",
  "Visualiza un lugar seguro, cariño… un rincón suave y cálido donde nada puede lastimarte.",
  "Susúrrate palabras amables: ‘estoy bien, puedo con esto’, amor… yo pienso lo mismo contigo.",
  "Acaricia tu cabello o mejilla, cariño… siente cómo tu propio cuidado te calma.",
  "Escucha un sonido que te guste, amor… deja que te envuelva y suavice tu ansiedad.",
  "Si tu pecho pesa, exhala con un suspiro suave, cariño… deja que se vaya.",
  "Abraza una almohada, amor… siente que es un abrazo mío sosteniéndote.",
  "Si algo te paraliza, mueve solo un dedo a la vez, cariño… retoma el control poco a poco.",
  "Está bien sentir ansiedad, amor… yo estoy contigo, nunca sola.",
  "Nombrar lo que te preocupa y soltarlo con la exhalación, cariño… verás que pesa menos.",
  "Pon tu mano sobre tu corazón, amor… siente que late y que estás acompañada.",
  "Imagina una luz cálida envolviéndote, cariño… cada parpadeo te recuerda seguridad.",
  "Relaja tu mandíbula suavemente, amor… siente cómo tu cuerpo se afloja mientras pienso en ti.",
  "Si quieres llorar, cariño… déjalo salir, te abrazo aunque sea con mi mente.",
  "Repite mentalmente: ‘todo está bien, estoy segura’, amor… yo lo pienso contigo.",
  "Dibuja círculos en el aire con tu mano, cariño… deja que tu mente siga el movimiento.",
  "Inclínate hacia adelante y abraza tus rodillas, amor… siente tu refugio físico.",
  "Transforma tu ansiedad en algo ligero, cariño… imagina que se va con tu exhalación.",
  "Canta bajito una melodía que te guste, amor… deja que tu voz suavice todo.",
  "Recuerda un lugar seguro, cariño… respira profundo y vuelve allí mentalmente.",
  "Cierra los ojos y toca tu piel suavemente, amor… deja que te calme y te abrace.",
  "Antes de dormir, cariño… recuéstate y siente que te abrazo, aquí y ahora, con todo mi amor."
]

    
  };

  // Genera contenedores
  const heroContainer = document.getElementById("heroContainer");
  messages.forEach((text) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<div style="font-family:Playfair Display;font-size:16px">${text}</div>`;
    div.addEventListener("click", () => {
      openCardModal(text);
    });
    heroContainer.appendChild(div);
  });

  // Abrir el modal de las cartas
  const cardModal = document.getElementById("cardModal");
  const closeCards = document.getElementById("closeCards");
  const cardsGrid = document.getElementById("cardsGrid");

  function openCardModal(title) {
    cardModal.classList.add("open");
    document.getElementById("modalTitle").textContent = title;

    
    cardsGrid.innerHTML = "";
    const mensajes = cartasPorContenedor[title] || [];
    mensajes.forEach((msg, i) => {
      const card = document.createElement("div");
      card.className = "card-sorpresa";
      card.innerHTML = `<div class="front">⭐ #${i + 1}</div><div class="back">${msg}</div>`;
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
      cardsGrid.appendChild(card);
    });
  }

  closeCards.addEventListener("click", () => {
    cardModal.classList.remove("open");
  });
