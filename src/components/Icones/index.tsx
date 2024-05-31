import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListIcones = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  list-style: none;
  text-decoration: none;
  transition: all 1s ease-out;

  & li:hover {
    margin-top: -2px;
  }
`;

type IconesProps = {
  icon1: string,
  icon2: string,
  link1: string,
  link2: string,
};

function Icones({ icon1, icon2, link1, link2 }: IconesProps) {
  return (
    <ListIcones>
      <li>
        <Link to={ link1 } target="_blank">
          <img src={ icon1 } alt="Imagem do ícone 1" />
        </Link>
      </li>
      <li>
        <Link to={ link2 } target="_blank">
          <img src={ icon2 } alt="Imagem do ícone 1" />
        </Link>
      </li>
    </ListIcones>
  );
}

export default Icones;
