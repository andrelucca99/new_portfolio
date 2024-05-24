import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/layout';

import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';
import SaudeAgil from '../pages/UX/SaudeAgil';
import RodaLivre from '../pages/UX/RodaLivre';
import FloraExpress from '../pages/UX/FloraExpress';

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
