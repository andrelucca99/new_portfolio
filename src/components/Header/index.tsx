import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import Icones from '../Icones';
import { devices } from '../../Theme';
import logo from '../../assets/images/logo.svg';

const HeaderStyled = styled.header`
  width: 100%;
  max-width: 1140px;
  height: 64px;
  margin-top: 20px;

  background-color: transparent;

  display: flex;
  justify-content: space-around;
`;

const Nav = styled.nav`
  width: 445px;
  padding: 5px;
  font-size: ${({ theme }) => theme.size.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.weight.regular};

  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.laptop} {
    display: flex;
  }

  align-items: center;
  justify-content: space-evenly;
`;

const LinkNav = styled(NavLink)`
  text-decoration: none;
  transition: all 0.5s ease-out;
  color: ${({ theme }) => theme.textColor.primary};
  &:hover {
    padding: 1px 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.textColor.segundary};
    border-bottom: 1px solid ${({ theme }) => theme.textColor.segundary};
  }
`;

const Logo = styled.figure`
  width: 100%;

  @media ${devices.mobileS} {
    width: 50%;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <Logo>
        <Link to="/">
          <img src={ logo } alt=" Logo DEV André" />
        </Link>
      </Logo>

      <Nav>
        <LinkNav to="/">Home</LinkNav>
        <LinkNav to="/sobre">Sobre</LinkNav>
        <LinkNav to="/projetos">Projetos</LinkNav>
        <LinkNav to="/blog">Blog</LinkNav>
        <Icones />
      </Nav>
    </HeaderStyled>
  );
}

export default Header;
