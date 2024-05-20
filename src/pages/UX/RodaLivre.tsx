import styled from 'styled-components';

import { Helmet } from 'react-helmet';
import LogoRodaLibre from './assets/logo-rodaLivre.svg';
import BannerUx from '../../components/Banner/BannerUx';

const SectionStyled = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function RodaLivre() {
  return (
    <SectionStyled>
      <Helmet title="Portfolio - Roda Livre" />
      <BannerUx icone={ LogoRodaLibre } nome="Roda Livre" />

    </SectionStyled>
  );
}

export default RodaLivre;
