import Icones from '../Icones';
import IconeOpen from './assets/open.png';
import IconeGitHub from './assets/github.png';

import {
  CardContainer,
  CardImage,
  CardContent,
  CardContentDetails,
  LinkImage,
  Row,
} from './Styles';

interface CardProps {
  image: string,
  title: string,
  tech: string[],
  repositorio: string,
  link: string,
}

function Card({ image, title, tech, repositorio, link }: CardProps) {
  return (
    <CardContainer>
      <LinkImage to={ link } aria-label={ title } target="_blank">
        <CardImage src={ image } alt={ title } />
      </LinkImage>
      <CardContent>
        <h1>
          { title }
          <Row />
        </h1>
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
