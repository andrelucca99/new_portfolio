import styled from 'styled-components';

import { Helmet } from 'react-helmet';
import BannerUx from '../../components/Banner/BannerUx';
import LogoSaudeAgil from './assets/logo-saudeAgil.svg';

const SectionStyled = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
`;

function SaudeAgil() {
  return (
    <SectionStyled>
      <Helmet title="Portfolio - Saúde Ágil" />
      <BannerUx icone={ LogoSaudeAgil } nome="Saúde Ágil" />

    </SectionStyled>
  );
}

export default SaudeAgil;
