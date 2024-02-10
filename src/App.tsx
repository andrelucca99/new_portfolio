import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/sobre" element={ <About /> } />
        <Route path="/projetos" element={ <Projects /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
