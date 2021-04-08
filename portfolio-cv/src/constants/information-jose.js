import {
  faAngular,
  faReact,
  faSass,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const information = {
  personal: {
    profession: 'Web Developer',
    professionBis: 'Full stack Developer',
    name: 'Jose Cárcamo',
    phone: '+34 620-664-432',
    email: 'jocalu87@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jose-c%C3%A1rcamo-lucena-95b653114/',
    github: 'https://github.com/Jocalu',
    photoURL: 'https://i.postimg.cc/Fs6t6kFB/profile-photo-removebg-preview.png',
    photoCoverURL: 'https://i.postimg.cc/XqnnZYgf/photo-cover.png',
  },
  resume: {
    info: [
      'Passionate about technology, I have decided to enter the world of programming and web development. And I love it! Each project is a new adventure and each problem along the way is a challenge to overcome.',
      'What can you find in me? A leader, a person passionate about what he does, who does not lose his temper in any situation. Willing to help others, patient, understanding. In my work I have always tried to convey the passion I feel for the profession and a height degree of commitment and perfectionism to always achieve the best result.',
      'If you want to chat with me about how I could help, collaborate or simply request information about me, please contact me, I will be happy to assist you.'],
  },
  experience: [
    {
      place: 'MidDay restaurant',
      position: 'Diseño, maquetación y programación web',
      date: '04/2021 - Actually',
      description: ['Programación de la app web con Angular.',
        'Diseño propio de toda la web.',
        'Buena relación con el cliente.'],

    },
    {
      place: 'Skylab Coders Academy',
      position: 'Junior Web Developer',
      date: '01/2021 - 04/2021',
      description: ['Ability to write documented code that is usable in a team environment.',
        'Experience with test-driven development.',
        'Experience with integration patterns and api consumption from the front end.',
        'Familiarity with Agile development.',
        'Strong problem-solving skills.',
        'Resourceful and self-motivated on innovation.'],
    }],
  education: [
    {
      place: 'Skylab Coders Academy',
      studies: 'Web development',
      date: '01/2021 - 04/2021',
      description: ['Mejor Bootcamp de programación del mundo según SwitchUp.', 'Más de 1200 horas de programación.', 'Enfocado especialmente en buenas prácticas y unit-testing (Jest, Jasmine).',
        'Conocimientos en programación web: HTML, CSS, Javascript, Typescript, SASS, Angular, React.',
        'Utilización de Herramientas de Control de versiones: Git'],
    },
    {
      place: 'EHTB',
      studies: 'Grado superior en Dirección de cocina',
      date: '09/2013 - 09/2015',
      description: ['Nota media de 9,0 - Graduado con honores',
        'Responsable en elaboración de menús en el restaurante de la escuela EHTB durante el curso del Ciclo Formativo.'],
    },
    {
      place: 'EPSEB',
      studies: 'Grado en Ingeniería de edificación',
      date: '09/2005 - 09/2010',
      description: ['Nota media de 7,0.',
        'Mención especial en Rehabilitación de Edificaciones.'],
    },
  ],
  softskills: [{
    name: 'Leadership',
    ability: 100,
  },
  {
    name: 'Collaboration',
    ability: 75,
  },
  {
    name: 'Communication',
    ability: 70,
  },
  {
    name: 'Creativity',
    ability: 75,
  },
  {
    name: 'Organization',
    ability: 90,
  },
  {
    name: 'Enthusiasm',
    ability: 80,
  },
  {
    name: 'Work Ethic',
    ability: 75,
  },
  {
    name: 'Problem Solving',
    ability: 100,
  },
  {
    name: 'Critical Thinking',
    ability: 90,
  }],
  hardskills: [
    {
      name: 'HTML',
      icon: faHtml5,
      programmingLanguage: true,
    },
    {
      name: 'Javascript',
      icon: faJsSquare,
      programmingLanguage: true,
    },
    {
      name: 'CSS',
      icon: faCss3Alt,
      programmingLanguage: true,
    },
    {
      name: 'SCRUM',
      icon: '',
      programmingLanguage: false,
    },
    {
      name: 'Agile',
      icon: '',
      programmingLanguage: false,
    },
    {
      name: 'Unit Testing',
      icon: '',
      programmingLanguage: false,
    },
    {
      name: 'Sass',
      icon: faSass,
      programmingLanguage: true,
    },

    {
      name: 'Node JS',
      icon: faNodeJs,
      programmingLanguage: true,
    },
    {
      name: 'Flux',
      icon: '',
      programmingLanguage: false,
    },
    {
      name: 'MongoDB',
      icon: '',
      programmingLanguage: false,
    },
    {
      name: 'Redux',
      icon: '',
      programmingLanguage: false,
    },
    {
      name: 'Typescript',
      icon: '',
      programmingLanguage: true,
    },
    {
      name: 'Angular',
      icon: faAngular,
      programmingLanguage: true,
    },
    {
      name: 'Git',
      icon: '',
      programmingLanguage: false,
    },
    {
      name: 'TDD',
      icon: '',
      programmingLanguage: false,
    },
    {
      name: 'React',
      icon: faReact,
      programmingLanguage: true,
    },
    {
      name: 'React Native',
      icon: faReact,
      programmingLanguage: true,
    },

    {
      name: 'Jest',
      icon: '',
      programmingLanguage: false,
    },
    {
      name: 'Jasmine',
      icon: '',
      programmingLanguage: false,
    },
  ],

  recommendations: {
    gilberto: {
      name: 'Gilberto Cao',
      position: 'Web programming teacher at Skylab Academy',
      description: 'The best student I have ever had. It is applied, organized and designs like God.',
      photoURl: 'https://avatars.githubusercontent.com/u/10716392?s=460&u=1a4b8066bc0abf6ec89b8b394f7a7d8d9b6f5c3a&v=4',
    },

    lluis: {
      name: 'Lluis Quintana',
      position: 'Partner at Skylab Academy',
      description: 'He is a very diligent student. When I didn\'t achieve a goal, Jose helped me. He taught me everything I know.',
      photoURL: 'https://i.postimg.cc/yYFwn1pM/Lluis.jpg',
    },

    laia: {
      name: 'Laia Solanes',
      position: 'Partner at Skylab Academy',
      description: 'Great partner, better person',
      photoURL: 'https://i.postimg.cc/y8s2bMwk/Laia.jpg',
    },

    diana: {
      name: 'Diana Expósito',
      position: 'Campus Manager at Skylab Academy',
      description: 'Jose es liderazgo, transparencia, foco, trabajo, planificación, compañerismo y sobre todo CONFIANZA. Dale un reto y le motivarás. Encontrará la solución y además hará partícipe al equipo y lo alineará para que la experiencia sea el mejor de los aprendizajes. Es un facilitador con una trayectoría como developer que hay que seguir de cerca.',
      photoURL: 'https://i.postimg.cc/fTxYJ9Zr/Diana.jpg',
    },

    alvaro: {
      name: 'Álvaro Valladares',
      position: 'Partner at Skylab Academy',
      description: 'Entusiasta de la programación que contagia a su entorno. En el tiempo que pude trabajar con él nunca le vi rendirse ante un problema, es una persona resolutiva que sabe trabajar en equipo y va un paso más allá del mero trabajo, implicándose con su entorno. Siempre aprendiendo, de naturaleza curiosa. No hace falta trabajar mucho tiempo a su lado para darse cuenta que la programación le apasiona.',
      photoURL: 'https://i.postimg.cc/CxwJYVXX/alvaro.jpg',
    },
  },
  projects: [
    {
      name: 'Moodsic',
      description: 'Moodsic is a web app that are giving you the opportunity to listen to all kinds of songs and artists selected from people all over the world, based on how it makes them feel.',
      image: 'https://i.postimg.cc/13mysPdV/Captura-de-pantalla-2021-04-07-a-las-9-07-55.png',
      github: 'https://github.com/Jocalu/Moodsic',
      url: '',
      video: 'https://vimeo.com/534338172',
      technology: {
        name: 'React',
        icon: faReact,

      },
    },
    {
      name: 'MidDay Restaurant',
      description: 'MidDay is an application that allows the management of restaurant reservations for lunch menus. It also generates its own database for each restaurant, so that it can manage its dishes and menus.',
      image: 'https://i.postimg.cc/DfGvcxs0/Captura-de-pantalla-2021-04-07-a-las-9-08-13.png',
      github: 'https://github.com/Jocalu/MidDay-Project',
      url: 'https://midday-restaurant.web.app/home',
      video: 'https://vimeo.com/534334719',
      technology: {
        name: 'Angular',
        icon: faAngular,
      },
    },
    {
      name: 'Porfolio',
      description: 'This same portfolio. Made with react, Typescript and using react material',
      image: 'https://i.postimg.cc/Jnd4SY8g/Captura-de-pantalla-2021-04-07-a-las-18-42-28.png',
      github: 'https://github.com/Jocalu/Portfolio',
      url: 'https://portfolio-jose-carcamo.web.app/',
      video: '',
      technology: {
        name: 'React',
        icon: faReact,
      },
    },
    {
      name: 'Rock-Paper-Scissors game',
      description: 'My first programming project. Made with a tutorial, it is a rock-paper-scissors game in Javascript Vanilla',
      image: 'https://i.postimg.cc/xTGnSMkj/Captura-de-pantalla-2021-04-08-a-las-10-00-33.png',
      github: 'https://github.com/Jocalu/Juego_PPT',
      url: '',
      video: '',
      technology: {
        name: 'Javascript',
        icon: faJsSquare,
      },
    },

  ],

};

export default information;
