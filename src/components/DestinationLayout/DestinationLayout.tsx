import { Outlet } from 'react-router-dom';
import { useData } from '../../hook/useData';
import { TabList } from '../TabList';

export const DestinationLayout = () => {
  const { getTabs } = useData();
  return (
    <main className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>Pick your destination
      </h1>
      <TabList tabs={getTabs('destination')} />
      <Outlet />
    </main>
  );
};

export default DestinationLayout;
