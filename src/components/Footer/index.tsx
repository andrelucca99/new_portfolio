import styled from 'styled-components';
import Icones from '../Icones';

import IconGitHub from '../../assets/icones/icon-github.svg';
import IconLinkedin from '../../assets/icones/icon-linkedin.svg';
import { devices } from '../../Theme';

const FooterStyled = styled.footer`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 11px;
  padding: 20px 0;

  border-top: 1px solid ${({ theme }) => theme.textColor.segundary};
  position: relative;
  bottom: 0;

  @media ${devices.mobile} {
    flex-direction: column;
  }

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

const TextSpanStyled = styled.h2`
  color: ${({ theme }) => theme.textColor.primary};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.size.xs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.weight.regular};
  line-height: normal;
  letter-spacing: 2px;
`;

function Footer() {
  return (
    <FooterStyled>
      <TextSpanStyled>&copy; 2024 - Desenvolvido por André Lucas</TextSpanStyled>
      <Icones
        icon1={ IconLinkedin }
        icon2={ IconGitHub }
        link1="https://www.linkedin.com/in/andre-lucas20/"
        link2="https://github.com/andrelucca99"
      />
    </FooterStyled>
  );
}

export default Footer;
