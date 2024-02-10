import css from '../assets/css.png';
import html from '../assets/html.png';
import jest from '../assets/jest.png';
import node from '../assets/nodejs.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png';
import javascrit from '../assets/javascript.png';
import typescrit from '../assets/typescript.png';
import testingLibrary from '../assets/testing-library.png';

import { ICardAcademic, ITechSkills } from './Interfaces';

export const techSkills: Array<ITechSkills> = [
  {
    image: html,
    linguagem: 'HTML5',
  },
  {
    image: css,
    linguagem: 'CSS3',
  },
  {
    image: javascrit,
    linguagem: 'JavaScript',
  },
  {
    image: react,
    linguagem: 'React',
  },
  {
    image: angular,
    linguagem: 'Angular',
  },
  {
    image: typescrit,
    linguagem: 'TypeScrit',
  },
  {
    image: jest,
    linguagem: 'Jest',
  },
  {
    image: testingLibrary,
    linguagem: 'Testing Library',
  },
  {
    image: node,
    linguagem: 'Node.js',
  },
];

export const cardAcademic: Array<ICardAcademic> = [
  {
    id: 1,
    image: 'https://media.licdn.com/dms/image/D4D0BAQHo1GZmhutd4A/company-logo_100_100/0/1664308284303/betrybe_logo?e=1715817600&v=beta&t=BPpKp3CpP2eOCMdVYsdf6wcgRGRNtu9Ej-G9DwQDTfg',
    title: 'Trybe',
    subTitle: 'Desenvolvimento Web, Gestão de Projetos de TI',
    data: 'fev de 2022 - mar de 2023',
  },
  {
    id: 2,
    image: 'https://media.licdn.com/dms/image/C4D0BAQG9HkMW5p01WA/company-logo_100_100/0/1630487672555/uninove_logo?e=1715817600&v=beta&t=Wt5Shbc161hW0oSkvNgY1aROKW4SSz6YrqYqYIOrMfU',
    title: 'Uninove',
    subTitle: 'Tecnologia em sistemas para internet',
    data: 'mar de 2020 - dez de 2020 - (Interrompido)',
  },
];
