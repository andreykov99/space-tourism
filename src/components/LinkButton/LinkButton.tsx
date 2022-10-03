import { useLocation, useNavigate } from 'react-router-dom';

interface LinkButtonOwnProps {
  to: string;
}

type LinkButtonProps = LinkButtonOwnProps &
  Omit<React.ComponentProps<'button'>, keyof LinkButtonOwnProps>;

export const LinkButton = ({
  children,
  to,
  ...otherProps
}: LinkButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, , tab] = location.pathname.split('/');
  const isSelected = tab === to;
  return (
    <button
      aria-selected={isSelected}
      {...otherProps}
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
};
