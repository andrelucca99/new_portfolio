import { Helmet } from 'react-helmet';

import Mockups from './assets/mockups.png';
import Personas1 from './assets/persona1.png';
import Personas2 from './assets/persona2.png';
import Wireframes from './assets/wireframes.png';
import Logo from './assets/logo-floraExpress.svg';

import LayoutUx from '../../components/layout/LayoutUx';
import { floraExpress } from './utils/FloraExpress.json';

function FloraExpress() {
  return (
    <>
      <Helmet title="Portfolio - Flora Express" />

      <LayoutUx
        logo={ Logo }
        nome="Flora Express"
        projeto={ floraExpress }
        personas1={ Personas1 }
        personas2={ Personas2 }
        mockups={ Mockups }
        wireframes={ Wireframes }
      />
    </>
  );
}

export default FloraExpress;
