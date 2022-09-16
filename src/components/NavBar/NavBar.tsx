import { useState } from 'react';
import { NavBarLink } from '../NavBarLink';
import logo from './assets/logo.svg';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="primary-header flex">
      <div>
        <img src={logo} alt="space tourism logo" className="logo" />
      </div>
      <button
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        className="mobile-nav-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
        {/* <img src={isOpen ? iconClose : iconHamburger} alt="menu toggle" /> */}
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible={isOpen}
          className="primary-navigation underline-indicators flex"
        >
          <NavBarLink to="/">
            <span aria-hidden="true">00</span>Home
          </NavBarLink>
          <NavBarLink to="/destination">
            <span aria-hidden="true">01</span>Destination
          </NavBarLink>
          <NavBarLink to="/crew">
            <span aria-hidden="true">02</span>Crew
          </NavBarLink>
          <NavBarLink to="/technology">
            <span aria-hidden="true">03</span>Technology
          </NavBarLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
