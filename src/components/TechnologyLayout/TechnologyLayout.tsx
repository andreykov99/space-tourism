import { Outlet } from 'react-router-dom';
import { useData } from '../../hook';
import { NumberIndicators } from '../NumberIndicators';

export interface TechnologyLayoutProps {}

export const TechnologyLayout = ({}: TechnologyLayoutProps) => {
  const { getTabs } = useData();
  return (
    <main className="grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span>Space launch 101
      </h1>
      <NumberIndicators tabs={getTabs('technology')} />
      <Outlet />
    </main>
  );
};

export default TechnologyLayout;
