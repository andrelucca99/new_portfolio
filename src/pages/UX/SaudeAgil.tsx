import { Helmet } from 'react-helmet';

import Mockups from './assets/mockups3.png';
import Personas from './assets/persona4.png';
import Wireframes from './assets/wireframes3.png';
import Logo from './assets/logo-saudeAgil.svg';

import LayoutUx from '../../components/layout/LayoutUx';
import { saudeAgil } from './utils/EstudosUxDesign.json';

function SaudeAgil() {
  return (
    <>
      <Helmet title="Portfolio - Saúde Ágil" />
      <LayoutUx
        logo={ Logo }
        nome="Saúde Ágil"
        projeto={ saudeAgil }
        personas1={ Personas }
        mockups={ Mockups }
        wireframes={ Wireframes }
      />

    </>
  );
}

export default SaudeAgil;
