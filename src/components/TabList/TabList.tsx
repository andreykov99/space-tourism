import { TabButton } from '../TabButton';

export interface TabListProps {
  tabs: [];
}
export const TabList = ({ tabs }: TabListProps) => {
  return (
    <div
      className="tab-list underline-indicators flex"
      role="tablist"
      aria-label="destination list"
    >
      {tabs.map((tab) => (
        <TabButton key={tab} name={tab} />
      ))}
    </div>
  );
};

export default TabList;
