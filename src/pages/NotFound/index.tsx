import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import notFound from '../../assets/images/notfound.png';

function NotFound() {
  const BackgroundStyle = styled.section`
    width: 100%;
    height: 100vh;
    padding: 10px;

    color: ${({ theme }) => theme.textColor.primary};
    background-color: ${({ theme }) => theme.bgColor};

    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.weight.regular};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & img {
      max-width: 100%;
    }

    & h1 {
      font-size: ${({ theme }) => theme.size.lg};
    }

    & h2 {
      font-size: ${({ theme }) => theme.size.sm};
    }
  `;

  const LinkNav = styled(NavLink)`
    margin-top: 20px;
    padding: 5px 10px;
    border-radius: 20px;
    
    text-decoration: none;
    transition: all 0.5s ease-out;

    color: ${({ theme }) => theme.textColor.primary};
    border: 1px solid ${({ theme }) => theme.textColor.segundary};
    
    &:hover {
      color: ${({ theme }) => theme.textColor.primary};
      background-color: ${({ theme }) => theme.textColor.segundary};
    }
`;

  return (
    <BackgroundStyle>
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
