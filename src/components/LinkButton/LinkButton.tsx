import { ComponentProps } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

interface LinkButtonOwnProps {
  to: string;
}

type LinkButtonProps = LinkButtonOwnProps &
  Omit<ComponentProps<'button'>, keyof LinkButtonOwnProps>;

export const LinkButton = ({
  children,
  to,
  ...otherProps
}: LinkButtonProps) => {
  const navigate = useNavigate();
  const isSelected = !!useMatch(to);
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
