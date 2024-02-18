import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Icones from '../Icones';
import IconeOpen from './assets/open.png';
import IconeGitHub from './assets/github.png';
import { devices } from '../../Theme';

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
    height: 150px;
    border-radius: 10px 10px 0 0;
    transition: all 0.2s ease-out;

    &:hover {
      opacity: 80%;
    }

    @media ${devices.laptop} {
      flex-direction: row;
      height: 250px;
    }
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

  const LinkImage = styled(Link)`
    & :hover{
      transform: scale(0.9);
      border-radius: 20px;
      border: 2px solid #060231;
    }
  `;

  return (
    <CardContainer>
      <LinkImage to={ link } target="_blank">
        <CardImage src={ image } alt="" />
      </LinkImage>
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
