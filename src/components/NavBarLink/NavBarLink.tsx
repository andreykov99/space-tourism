import { Link, useMatch } from 'react-router-dom';

export interface NavBarLinkProps {
  children?: React.ReactNode;
  to: string;
}
export const NavBarLink = ({ children, to }: NavBarLinkProps) => {
  const match = useMatch(to);
  return (
    <li className={match ? 'active' : ''}>
      <Link
        className="ff-sans-cond uppercase text-white letter-spacing-2"
        to={to}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavBarLink;
