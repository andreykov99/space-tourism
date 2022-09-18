import { useMatch } from 'react-router-dom';

export interface TabButtonProps {
  name: string;
}

export const TabButton = ({ name }: TabButtonProps) => {
  const id = name.toLowerCase();
  const isSelected = !!useMatch(id);
  return (
    <button
      aria-selected={isSelected}
      role="tab"
      aria-controls={`${id}-tab`}
      className="uppercase ff-sans-cond text-accent letter-spacing-2"
      tabIndex={0}
      data-image={`${id}-image`}
    >
      {name}
    </button>
  );
};

export default TabButton;
