import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs,
  FaGitAlt, FaGithub, FaPython, FaJava, FaAws,
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiNetlify, SiVercel, SiCplusplus, SiC, SiPostman, SiFigma, SiMysql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbSql } from 'react-icons/tb';
import { GiArtificialIntelligence } from 'react-icons/gi';

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
      { name: 'JavaScript', icon: FaJsSquare, color: '#f7df1e' },
      { name: 'React JS (Learning)', icon: FaReact, color: '#61dafb' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952b3' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS (Learning)', icon: FaNodeJs, color: '#3c873a' },
      { name: 'Express JS (Learning)', icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB (Learning)', icon: SiMongodb, color: '#47a248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', icon: SiC, color: '#a8b9cc' },
      { name: 'C++', icon: SiCplusplus, color: '#00599c' },
      { name: 'Python', icon: FaPython, color: '#3572a5' },
      { name: 'SQL', icon: TbSql, color: '#00758f' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#f05032' },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
      { name: 'VS Code', icon: VscVscode, color: '#007acc' },
      { name: 'Netlify', icon: SiNetlify, color: '#00c7b7' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'Figma', icon: SiFigma, color: '#a259ff' },
    ],
  },
];
