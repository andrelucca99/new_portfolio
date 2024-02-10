import { Link } from 'react-router-dom';
import styled from 'styled-components';

import IconGitHub from '../../assets/icones/icon-github.svg';
import IconLinkedin from '../../assets/icones/icon-linkedin.svg';

const ListIcones = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  /* background-color: red; */
  list-style: none;
  /* padding-right: 50px; */
`;

function Icones() {
  return (
    <ListIcones>
      <li>
        <Link to="https://www.linkedin.com/feed/" target="_blank">
          <img src={ IconLinkedin } alt="ícone do Linkedin" />
        </Link>
      </li>
      <li>
        <Link to="https://github.com/andrelucca99" target="_blank">
          <img src={ IconGitHub } alt="ícone do GitHub" />
        </Link>
      </li>
    </ListIcones>
  );
}

export default Icones;
