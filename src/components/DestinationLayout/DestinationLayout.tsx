import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useBackground } from '../../hook';
import { useData } from '../../hook/useData';
import { TabList } from '../TabList';

export const DestinationLayout = () => {
  const { changeBg } = useBackground();
  changeBg('destination');
  const { getTabs } = useData();
  const tabs = getTabs('destination');
  const navigate = useNavigate();
  const location = useLocation();
  const isIndex = !location.pathname.split('/')[2];
  useEffect(() => {
    if (isIndex) navigate(tabs[0]);
  });
  return isIndex ? (
    <p>Loading...</p>
  ) : (
    <main className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>Pick your destination
      </h1>
      <TabList tabs={tabs} />
      <Outlet />
    </main>
  );
};

export default DestinationLayout;
