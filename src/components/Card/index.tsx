/* eslint-disable react/jsx-max-depth */
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import IconeGitHub from './assets/github.png';
import IconeOpen from './assets/open.png';

interface CardProps {
  image: string,
  title: string,
  tech: string[],
  links: string,
}

function Card({ image, title, tech, links }: CardProps) {
  const CardContainer = styled.div`
    width: 400px;
    background-color: #001634;
    color: #fff;
    border-radius: 12px;
    font-family: ${({ theme }) => theme.fonts.primary};
    & h1 {
      font-size: ${({ theme }) => theme.size.md};
      font-weight: ${({ theme }) => theme.weight.medium};
    }
  `;

  const CardImage = styled.img`
    min-width: 100%;
    height: 250px;
    border-radius: 10px 10px 0 0;
  `;

  const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px 20px;
  `;

  const CardContentDetails = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;

    & div > span {
      font-size: ${({ theme }) => theme.size.xs};
      font-weight: ${({ theme }) => theme.weight.regular};
    }
  `;

  const Icones = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    & :hover {
      margin-top: -2px;
    }
  `;

  return (
    <CardContainer>
      <CardImage src={ image } alt="" />
      <CardContent>
        <h1>{ title }</h1>
        <CardContentDetails>
          <div>
            {/* <span>HTML5 / </span>
            <span>CSS3</span> */}
            <span>{ tech }</span>
          </div>
          <Icones>
            {/* <Link to="https://github.com/andrelucca99" target="_blank">
              <img src={ IconeGitHub } alt="Ícone do github" />
            </Link>
            <Link to="https://github.com/andrelucca99" target="_blank">
              <img src={ IconeOpen } alt="Ícone do github" />
            </Link> */}

            <Link to={ links } target="_blank">
              <img src={ IconeGitHub } alt="Ícone do github" />
            </Link>

            <Link to={ links } target="_blank">
              <img src={ IconeOpen } alt="Ícone do github" />
            </Link>
          </Icones>
        </CardContentDetails>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
