import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kaushala Davidson', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
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
  resume: 'http://140.238.85.66/KaushalaDavidsonCV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/cLbtSWQV/GIF-30-04-2022-11-02-26.gif',
    title: 'Peditious (Typing Speed Test)',
    info: 'ReactJS, localStorage',
    info2:
      'Typing speed test app made using ReactJS that uses localStorage to store highscores. Text is chosen at random from a `paragraphs.json` file',
    url: 'https://kgdavidson.github.io/TypingSpeedTest-ReactJS/',
    repo: 'https://github.com/KGDavidson/TypingSpeedTest-ReactJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://iili.io/VvICS2.gif',
    title: 'Ciphers (Vigenere-Vernam Cipher Visualisations)',
    info: 'ReactJS, SemanticUI, Algorithms',
    info2:
      'Vigenere-Vernam cipher visualisations made using ReactJS and SemanticUI. Table and mathematical visualisations included.',
    url: 'https://kgdavidson.github.io/Ciphers-ReactJS/',
    repo: 'https://github.com/KGDavidson/Ciphers-ReactJS', // if no repo, the button will not show up
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
