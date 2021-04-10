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

export default {
  menu: {
    page1: 'About Me',
    page2: 'Resume',
    page3: 'Experience',
    page4: 'Education',
    page5: 'Projects',
    page6: 'Contact',
    title1: 'Hi, I\'m',
    title2: 'Redirect to CV',
    title3: 'What I do',
    title4: 'Linkedln',
    title5: 'How can I help you?',
    title6: 'Send message',
    title7: 'Soft skills',
    title8: 'Hard skills',
    title9: 'Recommendations',
    input1: 'Full Name',
    input2: 'Email Address',
    input3: 'Subject',
    input4: 'Message',
  },

  personal: {
    profession: 'Web Developer',
    name: 'Jose Cárcamo',
    phone: '+34 620-664-432',
    email: 'jocalu87@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jose-carcamo-lucena-web-developer/',
    github: 'https://github.com/Jocalu',
    photoURL: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jose-carcamo.appspot.com/o/profile_photo-removebg-preview.png?alt=media&token=67001054-a95d-4fc5-b5c3-87d432e57605',
    photoCoverURL: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jose-carcamo.appspot.com/o/photo_cover.png?alt=media&token=1a1fac86-11ce-478a-9d8f-e766e8030d54',
  },

  resume: {
    info: [
      'Passionate about technology, I have decided to enter the world of programming and web development.',
      'And I love it! Each project is a new adventure and each problem along the way is a challenge to overcome.',
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
    name: 'Initiative',
    ability: 90,
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
    },
    {
      name: 'Javascript',
      icon: faJsSquare,
    },
    {
      name: 'CSS',
      icon: faCss3Alt,
    },
    {
      name: 'SCRUM',
      icon: null,
    },
    {
      name: 'Agile',
      icon: null,
    },
    {
      name: 'Unit Testing',
      icon: null,
    },
    {
      name: 'Sass',
      icon: faSass,
    },

    {
      name: 'Node JS',
      icon: faNodeJs,
    },
    {
      name: 'Flux',
      icon: null,
    },
    {
      name: 'MongoDB',
      icon: null,
    },
    {
      name: 'Redux',
      icon: null,
    },
    {
      name: 'Typescript',
      icon: null,
    },
    {
      name: 'Angular',
      icon: faAngular,
    },
    {
      name: 'Git',
      icon: null,
    },
    {
      name: 'TDD',
      icon: null,
    },
    {
      name: 'React',
      icon: faReact,
    },
    {
      name: 'React Native',
      icon: faReact,
    },

    {
      name: 'Jest',
      icon: null,
    },
    {
      name: 'Jasmine',
      icon: null,
    },
  ],

  recommendations: {
    diana: {
      name: 'Diana Expósito',
      position: 'Campus Manager at Skylab Academy',
      description: 'Jose is leadership, transparency, focus, work, planning, camaraderie and above all TRUST. Give him a challenge and you will motivate him. He will find the solution and also involve the team and align it so that everyone reaches their full potential. He is a facilitator, with an excellent track record as a developer. Must be followed closely!',
      photoURL: 'https://i.postimg.cc/fTxYJ9Zr/Diana.jpg',
    },

    alvaro: {
      name: 'Álvaro Valladares',
      position: 'Partner at Skylab Academy',
      description: 'His enthusiasm programmning is contagious. In the time that I was able to work with him, I never saw him give up on a problem, he is team worker and goes a step beyond mere work, getting involved with his environment. Always learning, curious in nature. It doesn\'t take long to work alongside him to realize that he\'s passionate about programming.',
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
      description: 'This same portfolio. Made with React, Typescript and using react material',
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
