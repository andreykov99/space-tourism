import { LinkButton } from '../LinkButton';

export interface TabListProps {
  tabs: string[];
}
export const TabList = ({ tabs }: TabListProps) => {
  return (
    <div
      className="tab-list underline-indicators flex"
      role="tablist"
      aria-label="destination list"
    >
      {tabs.map((tab) => (
        <LinkButton
          key={tab}
          to={tab}
          role="tab"
          aria-controls={`${tab.toLowerCase()}-tab`}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          // tabIndex={isSelected ? 0 : -1}
          data-image={`${tab.toLowerCase()}-image`}
        >
          {tab}
        </LinkButton>
      ))}
    </div>
  );
};

export default TabList;
