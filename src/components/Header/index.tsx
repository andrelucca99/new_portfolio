import { Link } from 'react-router-dom';

import Icones from '../Icones';
import { devices } from '../../Theme';
import logo from '../../assets/images/logo.svg';
import IconGitHub from '../../assets/icones/icon-github.svg';
import IconLinkedin from '../../assets/icones/icon-linkedin.svg';

import {
  HeaderStyled,
  Nav,
  LinkNav,
  Logo,
  NavMobile,
  LinkNavMobile,
} from './Styles';

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
