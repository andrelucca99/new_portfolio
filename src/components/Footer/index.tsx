import styled from 'styled-components';
import Icones from '../Icones';

import IconGitHub from '../../assets/icones/icon-github.svg';
import IconLinkedin from '../../assets/icones/icon-linkedin.svg';

const FooterStyled = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
  padding: 20px 0;

  background-color: ${({ theme }) => theme.bgFooter};
  position: relative;
  bottom: 0;
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
      <TextSpanStyled>Desenvolvido por André Lucas</TextSpanStyled>
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
