const criteriaA2 = require('./classifiers/criteriaA2');
const criteriaA3 = require('./classifiers/criteriaA3');
const criteriaA4 = require('./classifiers/criteriaA4');
const criteriaA6 = require('./classifiers/criteriaA6');
const criteriaA7 = require('./classifiers/criteriaA7');
const criteriaA8 = require('./classifiers/criteriaA8');
const criteriaA9 = require('./classifiers/criteriaA9');
const criteriaB1 = require('./classifiers/criteriaB1');
const criteriaB4 = require('./classifiers/criteriaB4');
const criteriaB6 = require('./classifiers/criteriaB6');
const criteriaC1 = require('./classifiers/criteriaC1');

const textos = [
    '@MalcaideCR Perdí solo una con tu mazo, y fue porque se me cayó la conexión, fácil de ganar con él. Loviu GodCaide &lt;3',
    '@MarcosOzamis Empezaré a ahorrar :3 Para comprármelo y después tocar canciones de ustedes, Arriba Caligaris ♥ Gracias Marcos por tu ayuda :3',
    '@MarcosOzamis No harán otro recital en el D.F. aparte del Vive Latino? :(',
    '@csantaengracia Bonice en México',
    'Amiguitos, el siguiente tweet será una prueba, porfa no lo tomen en serio xd',
    '@DeivJimenez @Soy_Bury No somos muchos, Bury, Danny, Cinthya, Mónica, yo y no se quien mas XD',
    '@DeivJimenez Encontré 3 lenguajes para el videojuego, buscalos Game Maker, Construct y Stencyl :) haber si alguno te gusta :3',
    '@VicenteValenton :c Y en ningún otro estado? Edo. de México? algo que me quede cerca? xD',
    '@DeivJimenez Entonces por cual nos vamos? :) para ir medio aprendiendole :3',
    '@DeivJimenez http://t.co/Lll8lmTVo0 si quieres vamos el jueves temprano a comprarlo c:',
    'Ya no aguanto mi vida, preferiría estar muerto :(',
    '@DeivJimenez Para crearlos en computadora, creo que el primero si es para Android :)',
    '@ladecadentes Estarán en tlalne con Caligaris? Osea que el boleto de Pepsi Center de 1 Nov para Caligaris servirá o cómo?',
    '@ladecadentes Y en el concierto de Cuautitlán estarán con Los CALIGARIS?',
    '@DeivJimenez @Soy_Bury A Six :)',
    '@DeivJimenez @Soy_Bury :( y eso?',
    '@VicenteValenton Sacarán fecha junto a Los Auténticos Decadentes en el DF? O sólo en Monterrey?',
    'Muy buenas a todos, guapísimos :v',
    '@MazaRP2 El Turco es un idiota, pero veras que callaras muchas bocas en el Mundial y se arrepentira de todo... Exito!',
    '@GiselleBrielle x2 :( jajaja',
    '@RaulSencillezOK Estaran LOs Caligaris con LAD en el concierto de tlalnepantla el dos de noviembre? Saludos!',
    '@DeivJimenez Entonces ahí, va? XD',
    '@DeivJimenez Si, de hecho según lo que leí es mas fácil de utlizar pero el mas profesional es Game Maker',
    '@GiselleBrielle Si está pelón agregalo y le preguntas si se echa shampoo',
    '@karameloficial Cuándo para México? :D',
    '@DeivJimenez Oye XD pasame tu whats :3',
    '@DeivJimenez Iras a Six el martes? :)',
    '@VicenteValenton Yo cumplo mañana años :c jaja no me merezco algo por cumplir 16 un día antes que ustedes? :c jaja',
    '@DeivJimenez Vale :) pero por el momento Game Maker :3'
];

async function main() {
    let classifiers = await Promise.all([criteriaA2.train(), criteriaA3.train(), criteriaA4.train(), criteriaA6.train(), criteriaA7.train(),
        criteriaA8.train(), criteriaA9.train(), criteriaB1.train(), criteriaB4.train(), criteriaB6.train(), criteriaC1.train()
    ]);

    let tags = ['perdidaInteres', 'modPeso', 'insomnio', 'fatiga', 'inutilidad', 'disminucion', 'p_muerte', 'malestar', 'bajaAutoestima', 'desesperanza', 'consumoAfeccion'];
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
        consumoAfeccion: 0,
    };
    let i = 0;
    for (const classifier of classifiers) {
        textos.forEach(texto => {
            const result = classifier.getBestClassification(texto);
            if (result.label === tags[i] && result.value > 0.95) {
                //console.log(texto);
                //console.log(result);
                ocurrencias[`${result.label}`]++;
            }
        });

        i++;
    }

    return ocurrencias;
}

module.exports = {
    main
}