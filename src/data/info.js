const importAll = (r) => r.keys().map(r);

const limaCityTourImages = importAll(require.context('../assets/lima/lima-city-tour', false, /\.(png|jpe?g|svg)$/));
const limaFountainsImages = importAll(require.context('../assets/lima/lima-fuentes', false, /\.(png|jpe?g|svg)$/));
const dinnerShowImages = importAll(require.context('../assets/lima/dinner-show', false, /\.(png|jpe?g|svg)$/));
const pachacamacAdoratoryImages = importAll(require.context('../assets/lima/pachacamac', false, /\.(png|jpe?g|svg)$/));
const peruvianPasoHorseImages = importAll(require.context('../assets/lima/caballo-de-paso', false, /\.(png|jpe?g|svg)$/));
const gastronomicalTourImages = importAll(require.context('../assets/lima/city-tour-gastronomico', false, /\.(png|jpe?g|svg)$/));

export {
  limaCityTourImages,
  limaFountainsImages,
  dinnerShowImages,
  pachacamacAdoratoryImages,
  peruvianPasoHorseImages,
  gastronomicalTourImages,
};

const data = {
  lima: {
    title: 'Lima',
    tours: [
      {
        tourName: 'Lima City Tour',
        tourImg: limaCityTourImages,
        description:
          'Una visita a la lima Prehispanica, Colonial y Moderna: Parque del Amor, Huaca Pucllana, Plaza San Martin, Plaza Mayor y Templo de San Francisco.',
        departures: 'Mañana & Noche',
        duration: '4 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'lima-city-tour',
      },
      {
        tourName: 'Lima Fountains',
        tourImg: limaFountainsImages,
        description:
          'Parque de la Reserva-Circuito Mágico del Agua, nos presenta un show de luz y color en sus diferentes fuentes. Record Guinness: La Fuente más alta del mundo.',
        departures: 'Martes - Domingo',
        duration: '3 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'lima-fountains',
      },
      {
        tourName: 'Paracas & Ica',
        tourImg: [],
        description: 'text',
        departures: 'Martes - Domingo',
        duration: '3 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'paracas-and-ica',
      },
      {
        tourName: 'Dinner Show',
        tourImg: dinnerShowImages,
        description: 'Traslado a restaurante donde se aprecian danzas de la Costa, Sierra y Selva del Peru y cena de comida tipica Peruana.',
        departures: '',
        duration: '3 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'dinner-show',
      },
      {
        tourName: 'Pachacamac Adoratory',
        tourImg: pachacamacAdoratoryImages,
        description:
          'Ubicado a 28km al sur de Lima, templos y palacios utilizados por las culturas Lima, Wary, Ichma e Inca desde el 200 AC al 1532 DC',
        departures: 'MARTES - JUEVES - VIERNES - SABADO',
        duration: '3.5 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'pachacamac-adoratory',
      },
      {
        tourName: 'Peruvian Paso Horse',
        tourImg: peruvianPasoHorseImages,
        description:
          'En el siglo XVI llego el caballo Andaluz a Peru y despues de 400 años, varios cruces geneticos, seleccion y mejoramiento se obtuvo el Caballo de Paso Peruano: suavidad en su andas en forma diagonal. A 28km al sur de Lima se tendrá un show de este Caballo Peruano de Paso, incluye almuerzo.',
        departures: 'SABADO - DOMINGO',
        duration: '4.5 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'peruvian-paso-horse',
      },
      {
        tourName: 'Gastronomical Tour',
        tourImg: gastronomicalTourImages,
        description:
          'Visite un mercado local para ver verduras, frutas, especies y mucho mas de la cocia Peruana. Luego, en una cevicheria local usted preparara su propio Ceviche y Pisco Sour. Delantal de cocina incluido.',
        departures: 'SABADO - DOMINGO',
        duration: '4.5 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'gastronomical-tour',
      },
      {
        tourName: 'Cusco & Machupicchu',
        tourImg: [],
        description: 'text',
        departures: 'SABADO - DOMINGO',
        duration: '4.5 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'cusco-machupicchu',
      },
    ],
  },
  ica: {
    title: 'Ica',
    tours: [
      {
        tourName: 'Lima City Tour',
        tourImg: limaCityTourImages,
        description:
          'Una visita a la lima Prehispanica, Colonial y Moderna: Parque del Amor, Huaca Pucllana, Plaza San Martin, Plaza Mayor y Templo de San Francisco.',
        departures: 'Mañana & Noche',
        duration: '4 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'lima-city-tour',
      },
      {
        tourName: 'Lima Fountains',
        tourImg: [],
        description:
          'Parque de la Reserva-Circuito Mágico del Agua, nos presenta un show de luz y color en sus diferentes fuentes. Record Guinness: La Fuente más alta del mundo.',
        departures: 'Martes - Domingo',
        duration: '3 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'lima-fountains',
      },
      {
        tourName: 'Paracas & Ica',
        tourImg: [],
        description: 'text',
        departures: 'Martes - Domingo',
        duration: '3 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'paracas-and-ica',
      },
      {
        tourName: 'Dinner Show',
        tourImg: [],
        description: 'Traslado a restaurante donde se aprecian danzas de la Costa, Sierra y Selva del Peru y cena de comida tipica Peruana.',
        departures: '',
        duration: '3 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'dinner-show',
      },
      {
        tourName: 'Pachacamac Adoratory',
        tourImg: [],
        description:
          'Ubicado a 28km al sur de Lima, templos y palacios utilizados por las culturas Lima, Wary, Ichma e Inca desde el 200 AC al 1532 DC',
        departures: 'MARTES - JUEVES - VIERNES - SABADO',
        duration: '3.5 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'pachacamac-adoratory',
      },
      {
        tourName: 'Peruvian Paso Horse',
        tourImg: [],
        description:
          'En el siglo XVI llego el caballo Andaluz a Peru y despues de 400 años, varios cruces geneticos, seleccion y mejoramiento se obtuvo el Caballo de Paso Peruano: suavidad en su andas en forma diagonal. A 28km al sur de Lima se tendrá un show de este Caballo Peruano de Paso, incluye almuerzo.',
        departures: 'SABADO - DOMINGO',
        duration: '4.5 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'peruvian-paso-horse',
      },
      {
        tourName: 'Gastronomical Tour',
        tourImg: [],
        description:
          'Visite un mercado local para ver verduras, frutas, especies y mucho mas de la cocia Peruana. Luego, en una cevicheria local usted preparara su propio Ceviche y Pisco Sour. Delantal de cocina incluido.',
        departures: 'SABADO - DOMINGO',
        duration: '4.5 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'gastronomical-tour',
      },
      {
        tourName: 'Cusco & Machupicchu',
        tourImg: [],
        description: 'text',
        departures: 'SABADO - DOMINGO',
        duration: '4.5 Horas',
        minimumPassegensers: 2,
        idiomas: 'Ingles & Español',
        rating: 5,
        path: 'cusco-machupicchu',
      },
    ],
  },
};

export default data;
