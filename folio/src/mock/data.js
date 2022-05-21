import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'K Davidson', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description:
    'I am a self-motivated Javascript developer with a good knowledge of React, ES6, CSS and API’s', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kaushala Davidson',
  subtitle: "I'm a Self-taught, Frontend developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne:
    'I am a self-motivated Javascript developer with a good knowledge of React, ES6, CSS and API’s and a number of projects to demonstrate that. Most recently I’ve been working with mobile-responsive UI using media queries',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'http://kdavidson.uk.to/cv/KaushalaDavidsonCV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/76NGRDRF/GIF-30-04-2022-17-02-50.gif',
    title: 'OnTheGo (Bus/Train Times App)',
    info: 'JavaScript, TFL API, Leaflet, CartoCDN',
    info2:
      'A web app for viewing TFL departure times made using JavaScript and powered by the TFL API, CartoCDN and Leaflet',
    url: 'https://onthego.my.to/',
    repo: 'https://github.com/KGDavidson/OnTheGo-JS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/cLbtSWQV/GIF-30-04-2022-11-02-26.gif',
    title: 'Peditious (Typing Speed Test)',
    info: 'React, localStorage, JSON',
    info2:
      'Typing speed test app made using ReactJS that uses localStorage to store highscores. Text is chosen at random from a `paragraphs.json` file',
    url: 'https://peditious.my.to/',
    repo: 'https://github.com/KGDavidson/TypingSpeedTest-ReactJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://iili.io/VvICS2.gif',
    title: 'Ciphers (Vigenere-Vernam Cipher Visualisations)',
    info: 'React, SemanticUI, Algorithms',
    info2:
      'Vigenere-Vernam cipher visualisations made using ReactJS and SemanticUI. Table and mathematical visualisations included.',
    url: 'https://kgdavidson.github.io/Ciphers-ReactJS/',
    repo: 'https://github.com/KGDavidson/Ciphers-ReactJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/26MKmZqk/ezgif-4-53eed4798a.gif',
    title: 'BoostedBoards Site Recreation',
    info: 'HTML, CSS, JS',
    info2:
      'A recreation of the Boosted Board website homepage made using pure HTML, CSS and JS. Created as an exercise in building UI to specification.',
    url: 'https://kgdavidson.github.io/BoostedBoardsSiteRecreation-Web/',
    repo: 'https://github.com/KGDavidson/BoostedBoardsSiteRecreation-Web', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/JzBKSfV2/GIF-27-04-2022-03-43-53.gif',
    title: 'Boid Simulator',
    info: 'React, Algorithms',
    info2:
      'A boid simulator written in ReactJS using the canvas element. A boid is highlighted for ease of tracking.',
    url: 'https://kgdavidson.github.io/BoidSimulator-ReactJS/',
    repo: 'https://github.com/KGDavidson/BoidSimulator-ReactJS', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kaushdavidson@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kaushala-davidson-b66aa811a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/KGDavidson',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
