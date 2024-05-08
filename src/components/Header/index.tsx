import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import Icones from '../Icones';
import { devices } from '../../Theme';
import logo from '../../assets/images/logo.svg';

import IconGitHub from '../../assets/icones/icon-github.svg';
import IconLinkedin from '../../assets/icones/icon-linkedin.svg';

const HeaderStyled = styled.header`
  width: 100%;
  max-width: 1140px;
  height: 64px;
  margin-top: 20px;

  display: flex;
  justify-content: space-around;

  @media ${devices.mobile} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 250px;
  }

  @media ${devices.tablet} {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const Nav = styled.nav`
  width: 445px;
  padding: 5px;
  font-size: ${({ theme }) => theme.size.sm};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.weight.regular};

  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.tablet} {
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

  @media ${devices.mobile} {
    width: 50%;
  }
`;

const NavMobile = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  @media ${devices.tablet} {
    display: none;
  }

  font-size: ${({ theme }) => theme.size.lg};
  font-weight: ${({ theme }) => theme.weight.regular};
`;

const LinkNavMobile = styled(NavLink)`
  width: 50%;
  text-align: center;
  background-color: #04244F;
  color: ${({ theme }) => theme.textColor.primary};
  text-decoration: none;
  border: 1px solid #7B78E5;
  border-radius: 8px;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

function Header() {
  return (
    <HeaderStyled>
      <Logo>
        <Link to="/">
          <img src={ logo } alt=" Logo DEV André" />
        </Link>
      </Logo>

      {devices.mobile
        && <NavMobile>
          <LinkNavMobile to="/">Home</LinkNavMobile>
          <LinkNavMobile to="/sobre">Sobre</LinkNavMobile>
          <LinkNavMobile to="/projetos">Projetos</LinkNavMobile>
          <LinkNavMobile to="/blog">Blog</LinkNavMobile>
           </NavMobile>}

      <Nav>
        <LinkNav to="/">Home</LinkNav>
        <LinkNav to="/sobre">Sobre</LinkNav>
        <LinkNav to="/projetos">Projetos</LinkNav>
        <LinkNav to="/blog">Blog</LinkNav>
        <Icones
          icon1={ IconLinkedin }
          icon2={ IconGitHub }
          link1="https://www.linkedin.com/feed/"
          link2="https://github.com/andrelucca99"
        />
      </Nav>

    </HeaderStyled>
  );
}

export default Header;
