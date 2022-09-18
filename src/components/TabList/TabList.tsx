import { TabButton } from '../TabButton';

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
        <TabButton
          key={tab}
          name={tab}
          to={tab.toLowerCase()}
          id={tab.toLowerCase()}
        />
      ))}
    </div>
  );
};

export default TabList;
