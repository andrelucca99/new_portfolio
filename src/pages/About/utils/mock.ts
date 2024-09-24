import { ICardAcademic, ITechSkills } from './Interfaces';
import {
  html, css, javascrit, react, redux, angular,
  typescrit, jest, testingLibrary, node, c,
  c_sharp, api, docker, jwt, python, sql,
  mongodb, _42_sp, trybe, uninove,
} from '.';

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
    image: redux,
    linguagem: 'Redux',
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
  {
    image: c,
    linguagem: 'C',
  },
  {
    image: c_sharp,
    linguagem: 'C#',
  },
  {
    image: api,
    linguagem: 'APIs',
  },
  {
    image: docker,
    linguagem: 'Docker',
  },
  {
    image: jwt,
    linguagem: 'JWT',
  },
  {
    image: python,
    linguagem: 'Python',
  },
  {
    image: sql,
    linguagem: 'SQL',
  },
  {
    image: mongodb,
    linguagem: 'Mondo DB',
  },
];

export const cardAcademic: Array<ICardAcademic> = [
  {
    id: 1,
    image: _42_sp,
    title: '42 São Paulo',
    subTitle: 'Engenharia de Software',
    data: 'set de 2024 - (Cursando)',
  },
  {
    id: 2,
    image: trybe,
    title: 'Trybe',
    subTitle: 'Desenvolvimento Web',
    data: 'fev de 2022 - mar de 2023',
  },
  {
    id: 3,
    image: uninove,
    title: 'Uninove',
    subTitle: 'Tecnologia em sistemas para internet',
    data: 'mar de 2020 - dez de 2020 - (Interrompido)',
  },
];
