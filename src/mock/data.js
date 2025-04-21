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
  subtitle: "I'm a full-stack developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne:
    'I am a self-motivated full-stack developer with a good knowledge of React, Serverless functions, Tailwind and SQL as well as noSQL databases. Most recently I’ve been working with Next.JS on full-stack projects.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'KaushalaDavidsonCV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/vB2Bg1v8/2025-04-1011-56-09online-video-cutter-com-ezgif-com-video-to-gif-converter.gif',
    title: 'AirBridge',
    info: ' Peer-to-peer file sharing app using WebRTC with end-to-end encryption. ',
    info2:
      'A mobile-responsive peer-to-peer file sharing app using WebRTC for fast, secure, end-to-end encrypted transfers of any number or size of files',
    url: 'https://air-bridge.netlify.app/',
    repo: 'https://github.com/KGDavidson/airbridge', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/tCbShBKN/ezgif-com-optimize-1-1.gif',
    title: 'ShortVC',
    info: 'Mobile-first design, NextJS, React, Typescript, Tailwind, Supabase, OAuth',
    info2:
      'A mobile-responsive url shortening management service with OAuth, built with NextJS and the T3 stack',
    url: 'https://shortvc.vercel.app/',
    repo: 'https://github.com/KGDavidson/ShortVC-NextJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/4N5fkMcw/ezgif-com-optimize-3.gif',
    title: 'TransientMail',
    info: 'Mobile-first design, React, Typescript, Tailwind, Mail.TM API, JSON',
    info2: 'A temporary email service powered by mail.tm and built with React',
    url: 'https://transientmail.netlify.app/',
    repo: 'https://github.com/KGDavidson/TransientMail-ReactJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/RC2WLfHB/ezgif-com-optimize.gif',
    title: 'Recipisio',
    info: 'Mobile-first design, React, Typescript, SCSS, Spoonacular API,  JSON',
    info2:
      'A mobile-responsive search-by-ingredient recipe application powered by the Spoonacular API',
    url: 'https://recipisio.netlify.app/',
    repo: 'https://github.com/KGDavidson/Recipisio-ReactJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/76NGRDRF/GIF-30-04-2022-17-02-50.gif',
    title: 'OnTheGo (Bus/Train Times App)',
    info: 'JavaScript, TFL API, Leaflet, CartoCDN',
    info2:
      'A web app for viewing TFL departure times made using JavaScript and powered by the TFL API, CartoCDN and Leaflet',
    url: 'https://onthego-js.netlify.app/',
    repo: 'https://github.com/KGDavidson/OnTheGo-JS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/RVD5z51H/GIF-22-05-2022-04-57-53.gif',
    title: 'Yet Another Netflix Clone',
    info: 'Mobile-first design, React, Typescript, SCSS, The Movie DB,  JSON',
    info2:
      'Yet another Netflix clone with a mobile friendly design made using ReactJS and The Movie DB',
    url: 'https://yetanothernetflixclone.netlify.app/',
    repo: 'https://github.com/KGDavidson/YetAnotherNetflixClone-ReactJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/cLbtSWQV/GIF-30-04-2022-11-02-26.gif',
    title: 'Peditious (Typing Speed Test)',
    info: 'React, localStorage, JSON',
    info2:
      'Typing speed test app made using ReactJS that uses localStorage to store highscores. Text is chosen at random from a `paragraphs.json` file',
    url: 'https://peditious.netlify.app/',
    repo: 'https://github.com/KGDavidson/TypingSpeedTest-ReactJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.postimg.cc/kg4RsrfY/GIF-21-05-2022-03-05-04.gif',
    title: 'Gifster (GIPHY Clone)',
    info: 'Mobile-first design, React, SCSS, Typescript, GIPHY API, JSON',
    info2: 'A responsive GIPHY clone landing page built with ReactJS, SCSS and the GIPHY API',
    url: 'https://gifster-js.netlify.app/',
    repo: 'https://github.com/KGDavidson/Gifster-ReactJS', // if no repo, the button will not show up
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
  // {
  //   id: nanoid(),
  //   img: 'https://i.postimg.cc/26MKmZqk/ezgif-4-53eed4798a.gif',
  //   title: 'BoostedBoards Site Recreation',
  //   info: 'HTML, CSS, JS',
  //   info2:
  //     'A recreation of the Boosted Board website homepage made using pure HTML, CSS and JS. Created as an exercise in building UI to specification.',
  //   url: 'https://kgdavidson.github.io/BoostedBoardsSiteRecreation-Web/',
  //   repo: 'https://github.com/KGDavidson/BoostedBoardsSiteRecreation-Web', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'https://i.postimg.cc/JzBKSfV2/GIF-27-04-2022-03-43-53.gif',
  //   title: 'Boid Simulator',
  //   info: 'React, Algorithms',
  //   info2:
  //     'A boid simulator written in ReactJS using the canvas element. A boid is highlighted for ease of tracking.',
  //   url: 'https://kgdavidson.github.io/BoidSimulator-ReactJS/',
  //   repo: 'https://github.com/KGDavidson/BoidSimulator-ReactJS', // if no repo, the button will not show up
  // },
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
