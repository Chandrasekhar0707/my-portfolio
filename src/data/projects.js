import currencyImg from '../assets/projects/currency-converter.png';
import stringforgeImg from '../assets/projects/stringforge.png';
import translatorImg from '../assets/projects/translator.png';
import spotifyImg from '../assets/projects/spotify.png';
import todoImg from '../assets/projects/todo.png';
import weatherImg from '../assets/projects/weather.png';

// NOTE: `demo` links below are placeholders. Once you deploy each project
// on Netlify/Vercel, just replace the placeholder URL with the real live link.
export const projects = [
  {
    id: 1,
    title: 'Currency Converter',
    image: currencyImg,
    description: 'A real-time currency conversion app powered by a live exchange-rate API, with async/await data fetching and instant results.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Fetch API'],
    github: 'https://github.com/Chandrasekhar0707/currency-converter',
    demo: 'https://curr-converterrr.netlify.app/',
  },
  {
    id: 2,
    title: 'Random Password Generator — StringForge',
    image: stringforgeImg,
    description: 'A customizable password generator with adjustable length and character sets, built for quick, secure password creation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/Chandrasekhar0707/random-password-generator-String-Forge-',
    demo: 'https://random-password-generator-nine-khaki.vercel.app/',
  },
  {
    id: 3,
    title: 'AI Language Translator',
    image: translatorImg,
    description: 'A translation tool that leverages an AI/translation API to convert text between languages through a clean, simple interface.',
    tech: ['JavaScript', 'RapidAPI', 'React'],
    github: 'https://github.com/Chandrasekhar0707/ai-language-translator',
    demo: 'https://language-translator-two-woad.vercel.app',
  },
  {
    id: 4,
    title: 'Spotify Clone',
    image: spotifyImg,
    description: 'A responsive music-streaming UI inspired by Spotify, featuring playlist layout and full playback controls.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Fetch API'],
    github: 'https://github.com/Chandrasekhar0707/Spotify-clone-project',
    demo: 'https://spotify-clone-project-steel.vercel.app/',
  },
  {
    id: 5,
    title: 'To-Do List',
    image: todoImg,
    description: 'A clean task management app to add, complete and organize daily to-dos with persistent, intuitive interactions.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Chandrasekhar0707/todo-list',
    demo: 'https://todolist-taskapp.netlify.app/',
  },
  {
    id: 6,
    title: 'Weather App',
    image: weatherImg,
    description: 'A responsive weather application delivering real-time forecasts for any city, powered by a live weather API.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    github: 'https://github.com/Chandrasekhar0707/whether-app-',
    demo: 'https://weather-app-3ee89e.netlify.app/',
  },
];
