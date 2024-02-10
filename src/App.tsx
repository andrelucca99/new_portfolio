import { Route, Routes } from 'react-router-dom';
// import styled from 'styled-components';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Layout from './components/layout';

function App() {
  // const AppStyled = styled.div`
  //   background-color: ${(props) => props.theme.bgColor};
  //   color: #fff;
  //   width: 100%;
  //   height: 100%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   flex-direction: column;
  // `;

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
