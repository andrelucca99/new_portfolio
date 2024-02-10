import styled from 'styled-components';

import Icones from '../Icones';
import IconeOpen from './assets/open.png';
import IconeGitHub from './assets/github.png';

interface CardProps {
  image: string,
  title: string,
  tech: string[],
  repositorio: string,
  link: string,
}

function Card({ image, title, tech, repositorio, link }: CardProps) {
  const CardContainer = styled.div`
    width: 400px;
    color: #fff;
    border-radius: 12px;
    background-color: #001634;
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
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 10px;

    & div > span {
      font-size: ${({ theme }) => theme.size.xs};
      font-weight: ${({ theme }) => theme.weight.regular};
    }
  `;

  return (
    <CardContainer>
      <CardImage src={ image } alt="" />
      <CardContent>
        <h1>{ title }</h1>
        <CardContentDetails>
          <div>
            <span>{ tech }</span>
          </div>

          <Icones
            icon1={ IconeGitHub }
            icon2={ IconeOpen }
            link1={ repositorio }
            link2={ link }
          />
        </CardContentDetails>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
