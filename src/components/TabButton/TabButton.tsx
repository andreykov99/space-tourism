import { useMatch, useNavigate } from 'react-router-dom';

export interface TabButtonProps {
  name: string;
  to: string;
  id: string;
}

export const TabButton = ({ name, to, id }: TabButtonProps) => {
  const navigate = useNavigate();
  const isSelected = !!useMatch(id);
  return (
    <button
      aria-selected={isSelected}
      role="tab"
      aria-controls={`${id}-tab`}
      className="uppercase ff-sans-cond text-accent letter-spacing-2"
      tabIndex={isSelected ? 0 : -1}
      data-image={`${id}-image`}
      onClick={() => navigate(to)}
    >
      {name}
    </button>
  );
};

export default TabButton;
