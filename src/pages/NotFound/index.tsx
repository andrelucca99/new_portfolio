import { Helmet } from 'react-helmet';
import notFound from '../../assets/images/notfound.png';

import { BackgroundStyle, LinkNav } from './Styles';

function NotFound() {
  return (
    <BackgroundStyle>
      <Helmet title="Page - Not Found" />
      <img src={ notFound } alt="" />
      <h1>Oops! Página não encontrada</h1>
      <h2>Desculpe, a página que você está procurando não existe.</h2>
      <LinkNav to="/">
        <h3>Voltar à página inicial</h3>
      </LinkNav>
    </BackgroundStyle>
  );
}

export default NotFound;
