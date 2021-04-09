import {
  faAngular,
  faReact,
  faSass,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faShoppingCart,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

const information = {
  personal: {
    profession: 'Web Developer',
    professionBis: 'Full stack Developer',
    name: 'Jose Cárcamo',
    phone: '+34 620-664-432',
    email: 'jocalu87@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jose-carcamo-lucena-web-developer/',
    github: 'https://github.com/Jocalu',
    photoURL: 'https://i.postimg.cc/Fs6t6kFB/profile-photo-removebg-preview.png',
    photoCoverURL: 'https://i.postimg.cc/XqnnZYgf/photo-cover.png',
    icon: 'https://i.postimg.cc/T25QTbtK/jc-black.png',
  },

  resume: {
    info: [
      'Passionate about technology, I have decided to enter the world of programming and web development. And I love it! Each project is a new adventure and each problem along the way is a challenge to overcome.',
      'What can you find in me? A leader, a person excited about what he does, who does not lose his temper in any situation. Willing to help others, patient, understanding. In my work I have always tried to convey the passion I feel for the profession and a hight degree of commitment and perfectionism to always achieve the best result.',
      'If you want to chat with me about how I could help, collaborate or simply request information about me, please contact me, I will be happy to assist you.'],
  },

  experience: [
    {
      place: 'MidDay restaurant',
      position: 'Web design and programming',
      date: '04/2021 - Actually',
      description: ['Web app developed with Angular.',
        'Own design of the entire web.',
        'Good relationship with the client.'],
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
      description: ['Best programming bootcamp in the world according to SwitchUp.', 'More than 1200 hours of programming.', 'Especially focused on good practices and unit-testing (Jest, Jasmine).',
        'Knowledge of web programming: HTML, CSS, Javascript, Typescript, SASS, Angular, React.',
        'Using Version Control Tools: Git'],
    },
    {
      place: 'EHTB',
      studies: 'CFGS in kitchen management',
      date: '09/2013 - 09/2015',
      description: ['Average grade of 9.0 - Graduated with honors',
        'Responsible for preparing menus in the restaurant of the EHTB school during the course of the CFGS.'],
    },
    {
      place: 'EPSEB',
      studies: 'Degree in Building Engineering',
      date: '09/2005 - 09/2010',
      description: ['Average grade of 7.0',
        'Special mention in Building Rehabilitation.'],
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
      description: 'Jose is leadership, transparency, focus, work, planning, camaraderie and above all TRUST. Give him a challenge and you will motivate him. You will find the solution and also involve the team and align it so that the experience is the best of learning. He is a facilitator with a track record as a developer that must be followed closely.',
      photoURL: 'https://i.postimg.cc/fTxYJ9Zr/Diana.jpg',
    },

    alvaro: {
      name: 'Álvaro Valladares',
      position: 'Partner at Skylab Academy',
      description: 'Programming enthusiast that infects his environment. In the time that I was able to work with him, I never saw him give up on a problem, he is a decisive person who knows how to work as a team and goes a step beyond mere work, getting involved with his environment. Always learning, curious in nature. It doesn\'t take long to work alongside him to realize that he\'s passionate about programming.',
      photoURL: 'https://i.postimg.cc/CxwJYVXX/alvaro.jpg',
    },
  },

  projects: [
    {
      name: 'Moodsic',
      description: 'Moodsic is a web app that gives you the opportunity to listen to all kinds of songs and artists selected from people all over the world, based on how it makes them feel.',
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
  services: [
    {
      name: 'Ecommerce',
      icon: faShoppingCart,
      description: 'As a website operator, you are therefore permanently faced with the challenge of monitoring the market and generating unique content with added value for the user on the ongoing new product pages. In doing so, you create competitive advantages for yourself while remaining visible in the search engines and for the user.',
    },
    {
      name: 'Web design',
      icon: faLaptopCode,
      description: 'These include websites and eCommerce solutions focused on usability and responsive design, creative branding solutions that inject personality into your business, and custom programming for ideas that you need help bringing to fruition.',
    },
  ],
};

export default information;
