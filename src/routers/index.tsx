import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/layout';
import {
  NotFound, Home, About, Projects,
  FloraExpress, RodaLivre, SaudeAgil,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    ErrorBoundary: NotFound,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'sobre',
        element: <About />,
      },
      {
        path: 'projetos',
        element: <Projects />,
      },
      {
        path: 'ux',
        children: [
          {
            path: 'flora-express',
            element: <FloraExpress />,
          },
          {
            path: 'roda-livre',
            element: <RodaLivre />,
          },
          {
            path: 'saude-agil',
            element: <SaudeAgil />,
          },
        ],
      },
    ],
  },
]);
