import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

function Layout() {
  const LayoutStyle = styled.div`
  width: 100%;
  color: ${(props) => props.theme.textColor.primary};
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

  return (
    <LayoutStyle>
      <Header />
      <Outlet />
      <Footer />
    </LayoutStyle>
  );
}

export default Layout;
