import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <h1>menu</h1>
      <Outlet />
      <footer>
        <span>DEV - todos os direitos reservados</span>
      </footer>
    </>
  );
}

export default Layout;
