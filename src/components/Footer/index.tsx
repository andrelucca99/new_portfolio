import styled from 'styled-components';
import Icones from '../Icones';

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
      <Icones />
    </FooterStyled>
  );
}

export default Footer;
