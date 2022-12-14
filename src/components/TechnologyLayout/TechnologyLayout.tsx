import { Outlet } from 'react-router-dom';
import { withIndex } from '../../hoc/withIndex';
import { useBackground, useData } from '../../hook';
import { NumberIndicators } from '../NumberIndicators';

export const TechnologyLayout = () => {
  const { changeBg } = useBackground();
  changeBg('technology');
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

export default withIndex(TechnologyLayout);
