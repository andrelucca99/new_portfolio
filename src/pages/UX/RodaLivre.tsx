import { Helmet } from 'react-helmet';

import Mockups from './assets/mockups2.png';
import Personas3 from './assets/persona3.jpg';
import Wireframes from './assets/wireframe2.png';
import Logo from './assets/logo-rodaLivre.svg';

import LayoutUx from '../../components/layout/LayoutUx';
import { rodaLivre } from './utils/EstudosUxDesign.json';

function RodaLivre() {
  return (
    <>
      <Helmet title="Portfolio - Roda Livre" />

      <LayoutUx
        logo={ Logo }
        nome="Roda Livre"
        projeto={ rodaLivre }
        personas1={ Personas3 }
        mockups={ Mockups }
        wireframes={ Wireframes }
      />

    </>
  );
}

export default RodaLivre;
