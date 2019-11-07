const criteriaA2 = require("./classifiers/criteriaA2");
const criteriaA3 = require("./classifiers/criteriaA3");
const criteriaA4 = require("./classifiers/criteriaA4");
const criteriaA6 = require("./classifiers/criteriaA6");
const criteriaA7 = require("./classifiers/criteriaA7");
const criteriaA8 = require("./classifiers/criteriaA8");
const criteriaA9 = require("./classifiers/criteriaA9");
const criteriaB1 = require("./classifiers/criteriaB1");
const criteriaB4 = require("./classifiers/criteriaB4");
const criteriaB6 = require("./classifiers/criteriaB6");
const criteriaC1 = require("./classifiers/criteriaC1");

let tokensDel = [
  ".",
  ";",
  ",",
  "?",
  "¿",
  "!",
  "¡",
  " y ",
  " e ",
  " o ",
  " u ",
  " ni "
];

let postsA = [
  "cancer Tengo Depresión severa, dificil estoy con Venalafaxina, Rize,Olanzapina, Clonazepam y Zopiclona. Llevo soñando alrededor de 3 años con tratamiento, a pesar de la Psiquiatría y la Psicóloga, no me he mantenido estable en el animo, ayer tenia ganas de suicidarme, ahora tengo un gran bajón emocional. Casi no puedo dormir por estar pensando en cosas malas. Me haré muestras de sangre y otro tipo de exámenes, para ir descartando alguna patología. Francamente no me hallo mucho en el entorno y el ambiente. Pero se que tengo que seguir luchando y aceptando la depresión como algo de mi ser",
  "chicos necesito algún consejo, no me gusta compartir mis problemas pero créanme que no lo hicera si en verdad no lo necesitará.Realmente mis padres acaban conmigo lentamente... En especial mi madre. Suele compararme mucho, me juzga por mi cabello, por algunas cosas que no suelo bien y suele decirme inútil consecutivamente.En un momento me encontro en pleno acto suicida y pensé que todo iba a cambiar, al fin sentí una pequeña esperanza pero no fue así...Al menos el gusto duro unas 2 semanas, ni siquiera hoy siendo un día especial se limita a hacerme menos, está depresión lleva consumiendome desde secundaria por lo mismo, actualmente estoy a punto de ingresar a la universidad, pero no hay día en el cual no piense matarme, o simplemente desaparecer",
  "Me siento vacia, cansada, de mal humor, irritabilidad, triste, sin ganas de nada, perdí interes en aquellas cosas que me encantaba hacer, no tolero a las personas, agregandole mi baja autoestima y cosas semejantes.Tengo mucho estres, ya van letios meses sintiendo esto acompañado de unos ataques no se como llamarlos ¿estres? ¿ansiedad?",
  "Gracias por tan lindo regalo, pero es tu culpa que todo esto haya salido mal, ya nada me gusta",
  "Hola, no se por donde empezar, me siento muy mal de tener depresion para ni no es correcto ya q tengo una familia muy hermosa q me ama dos hijos q son mi adoracion y a pesar de eso vivo en una frustracion total, me siento fracasada en todo no puedo dormir por las noches y por el dia quiero estar en sola en mi cama en mi cuarto encerrada en mis pensamientos, aunq ellos mismo me vuelvan loca, no puedo hacer nada sin pesar en lo q pasara si lo hago o en lo q no pasara, es horrible tener mil pensamientos y todos sean negativos, pensar en no querer vivir y en q todos seran mejor si no estas, y al mismo tiempo demostrar q estas bien porq no puedes fallarle a tu familia sonreir cuando lo unico q quiero hacer es salir corriendo y lanzarme al vacio... Esto es muy duro y ni se cuanto tiempo mas pueda soportarlo",
  "A alguien más le persigue la sensación de que todo siempre será peor? Todo lo que pasa es mi culpa. Siento que no sirvo para nada. Soy el único idiota en mi familia",
  "Siento que vivo en un circulo, en un bucle en donde siempre cometo los mismos errores, cuando comienzo a sentirme feliz, viene algo generalmente ocasionado por mi mismo que me jala, y me lo impide, es como si mi subconsciente me negara la felicidad, como si dentro de mi supiera que no merezco ser feliz, que las cosas buenas a mi no tiene que pasar, por que no lo valgo, por que soy tonto, e inutil, e incapaz de sobresalir, aunque la gente siempre intenta decirme lo contrario, simplemente yo no lo creó aunque a veces aparente que lo hago en el fondo, siempre estoy hecho mierda, siempre busco sentirme mal, como si eso me alimentara como si me hiciera sentir bien. A veces quiciera, hablarlo con alguien, pero no puedo, no tengo permitido parecer débil. Así que me lo guardo, y el sentimiento crece y crece hasta que me abrasa y me sumergió en el como una gran ola que me arrastra a la marea de un mar de sufrir y pesar, y esto a sido desde que tengo uso de razón, creo que nunca en mi vida e sido feliz realmente, y a veces honestamente pienso que nunca pasara.",
  "Hola es mi primera publicación y talvez se la ultima ya que no puedo más con esta agonía y esta desesperación ya me canse de llorar y no ser entendido me odio y solo quiero morir para que desaparezca todo mis problemas ya que no se que hacer enserio y esta sera mi salida para todo. 😔",
  'Yo sé que a veces es molesto que se "cuelguen" de tu movimiento. Pero; esta reacción feminista es precursora de una revolución social. Efectivamente, la violencia la sufrimos todos; se manifiestan contra la violencia; exigen mejorar el cuerpo judicial: indirectamente ellas nos están defendiendo a todos. En lugar de demeritar lo que hacen deberíamos apoyar para que se cree un movimiento más grande, ser interseccionales y defendernos entre todos.',
  "cancer Tengo Depresión severa, dificil estoy con Venalafaxina, Rize,Olanzapina, Clonazepam y Zopiclona. Llevo soñando alrededor de 3 años con tratamiento, a pesar de la Psiquiatría y la Psicóloga, no me he mantenido estable en el animo, ayer tenia ganas de suicidarme, ahora tengo un gran bajón emocional. Casi no puedo dormir por estar pensando en cosas malas. Me haré muestras de sangre y otro tipo de exámenes, para ir descartando alguna patología. Francamente no me hallo mucho en el entorno y el ambiente. Pero se que tengo que seguir luchando y aceptando la depresión como algo de mi ser",
  "chicos necesito algún consejo, no me gusta compartir mis problemas pero créanme que no lo hicera si en verdad no lo necesitará.Realmente mis padres acaban conmigo lentamente... En especial mi madre. Suele compararme mucho, me juzga por mi cabello, por algunas cosas que no suelo bien y suele decirme inútil consecutivamente.En un momento me encontro en pleno acto suicida y pensé que todo iba a cambiar, al fin sentí una pequeña esperanza pero no fue así...Al menos el gusto duro unas 2 semanas, ni siquiera hoy siendo un día especial se limita a hacerme menos, está depresión lleva consumiendome desde secundaria por lo mismo, actualmente estoy a punto de ingresar a la universidad, pero no hay día en el cual no piense matarme, o simplemente desaparecer",
  "Me siento vacia, cansada, de mal humor, irritabilidad, triste, sin ganas de nada, perdí interes en aquellas cosas que me encantaba hacer, no tolero a las personas, agregandole mi baja autoestima y cosas semejantes.Tengo mucho estres, ya van letios meses sintiendo esto acompañado de unos ataques no se como llamarlos ¿estres? ¿ansiedad?",
  "Gracias por tan lindo regalo, pero es tu culpa que todo esto haya salido mal, ya nada me gusta",
  "Hola, no se por donde empezar, me siento muy mal de tener depresion para ni no es correcto ya q tengo una familia muy hermosa q me ama dos hijos q son mi adoracion y a pesar de eso vivo en una frustracion total, me siento fracasada en todo no puedo dormir por las noches y por el dia quiero estar en sola en mi cama en mi cuarto encerrada en mis pensamientos, aunq ellos mismo me vuelvan loca, no puedo hacer nada sin pesar en lo q pasara si lo hago o en lo q no pasara, es horrible tener mil pensamientos y todos sean negativos, pensar en no querer vivir y en q todos seran mejor si no estas, y al mismo tiempo demostrar q estas bien porq no puedes fallarle a tu familia sonreir cuando lo unico q quiero hacer es salir corriendo y lanzarme al vacio... Esto es muy duro y ni se cuanto tiempo mas pueda soportarlo",
  "A alguien más le persigue la sensación de que todo siempre será peor? Todo lo que pasa es mi culpa. Siento que no sirvo para nada. Soy el único idiota en mi familia",
  "Siento que vivo en un circulo, en un bucle en donde siempre cometo los mismos errores, cuando comienzo a sentirme feliz, viene algo generalmente ocasionado por mi mismo que me jala, y me lo impide, es como si mi subconsciente me negara la felicidad, como si dentro de mi supiera que no merezco ser feliz, que las cosas buenas a mi no tiene que pasar, por que no lo valgo, por que soy tonto, e inutil, e incapaz de sobresalir, aunque la gente siempre intenta decirme lo contrario, simplemente yo no lo creó aunque a veces aparente que lo hago en el fondo, siempre estoy hecho mierda, siempre busco sentirme mal, como si eso me alimentara como si me hiciera sentir bien. A veces quiciera, hablarlo con alguien, pero no puedo, no tengo permitido parecer débil. Así que me lo guardo, y el sentimiento crece y crece hasta que me abrasa y me sumergió en el como una gran ola que me arrastra a la marea de un mar de sufrir y pesar, y esto a sido desde que tengo uso de razón, creo que nunca en mi vida e sido feliz realmente, y a veces honestamente pienso que nunca pasara.",
  "Hola es mi primera publicación y talvez se la ultima ya que no puedo más con esta agonía y esta desesperación ya me canse de llorar y no ser entendido me odio y solo quiero morir para que desaparezca todo mis problemas ya que no se que hacer enserio y esta sera mi salida para todo. 😔",
  'Yo sé que a veces es molesto que se "cuelguen" de tu movimiento. Pero; esta reacción feminista es precursora de una revolución social. Efectivamente, la violencia la sufrimos todos; se manifiestan contra la violencia; exigen mejorar el cuerpo judicial: indirectamente ellas nos están defendiendo a todos. En lugar de demeritar lo que hacen deberíamos apoyar para que se cree un movimiento más grande, ser interseccionales y defendernos entre todos.'
];

async function main(posts) {
  let classifiers = await Promise.all([
    criteriaA2.train(),
    criteriaA3.train(),
    criteriaA4.train(),
    criteriaA6.train(),
    criteriaA7.train(),
    criteriaA8.train(),
    criteriaA9.train(),
    criteriaB1.train(),
    criteriaB4.train(),
    criteriaB6.train(),
    criteriaC1.train()
  ]);

  let tags = [
    "perdidaInteres",
    "modPeso",
    "insomnio",
    "fatiga",
    "inutilidad",
    "disminucion",
    "p_muerte",
    "malestar",
    "bajaAutoestima",
    "desesperanza",
    "consumoAfeccion"
  ];
  let ocurrencias = {
    perdidaInteres: 0,
    modPeso: 0,
    insomnio: 0,
    fatiga: 0,
    inutilidad: 0,
    disminucion: 0,
    p_muerte: 0,
    malestar: 0,
    bajaAutoestima: 0,
    desesperanza: 0,
    consumoAfeccion: 0
  };

  //Dividmos los posts en oraciones
  let sentences = [];
  let cont = 0;
  for (const post of posts) {
    sentences[cont] = splitMulti(post, tokensDel);
    cont++;
  }

  let i = 0;
  for (const classifier of classifiers) {
    for (const sentence of sentences) {
      sentence.forEach(sentence => {
        const result = classifier.getBestClassification(sentence);
        if (result.label === tags[i] && result.value > 0.95) {
          console.log(result);
          ocurrencias[`${result.label}`]++;
        }
      });
    }
    i++;
  }
  return ocurrencias;
}

function splitMulti(str, tokens) {
  let tempChar = tokens[0];
  for (let i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  str = str.split(tempChar);
  return str;
}

main(postsA).then(ocurrencias => {
  console.log(ocurrencias);
});
