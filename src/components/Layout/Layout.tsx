import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from '../NavBar';

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const page = () => {
      if (location.pathname === '/') return 'home';
      return location.pathname.slice(1);
    };
    if (page) document.body.classList.toggle(page());

    return () => {
      document.body.classList.toggle(page());
    };
  }, [location]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
