import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from '../../Theme';

const HeaderStyled = styled.header`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: space-around;

  @media ${devices.mobile} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
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
  margin-top: 20px;

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

export {
  HeaderStyled,
  Nav,
  LinkNav,
  Logo,
  NavMobile,
  LinkNavMobile,
};
