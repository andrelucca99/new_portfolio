import css from '../assets/css.png';
import html from '../assets/html.png';
import jest from '../assets/jest.png';
import node from '../assets/nodejs.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png';
import javascrit from '../assets/javascript.png';
import typescrit from '../assets/typescript.png';
import c_sharp from '../assets/c-sharp.png';
import redux from '../assets/redux.png';
import api from '../assets/api.png';
import docker from '../assets/docker.png';
import jwt from '../assets/jwt.png';
import mongodb from '../assets/mongodb.png';
import python from '../assets/python.png';
import sql from '../assets/sql.png';
import testingLibrary from '../assets/testing-library.png';
import c from '../assets/c.png';
import trybe from '../assets/trybe.png';
import uninove from '../assets/uninove.png';
import _42_sp from '../assets/42sp.png';

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
