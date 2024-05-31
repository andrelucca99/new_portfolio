import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { LayoutStyle } from './Styles';

function Layout() {
  return (
    <LayoutStyle>
      <Header />
      <Outlet />
      <Footer />
    </LayoutStyle>
  );
}

export default Layout;
