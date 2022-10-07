import { Outlet } from 'react-router-dom';
import { withIndex } from '../../hoc/withIndex';
import { useBackground } from '../../hook';
import { useData } from '../../hook/useData';
import { TabList } from '../TabList';

export const DestinationLayout = () => {
  const { changeBg } = useBackground();
  changeBg('destination');
  const { getTabs } = useData();
  const tabs = getTabs('destination');
  return (
    <main className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>Pick your destination
      </h1>
      <TabList tabs={tabs} />
      <Outlet />
    </main>
  );
};

export default withIndex(DestinationLayout);
