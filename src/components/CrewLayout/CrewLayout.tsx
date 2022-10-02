import { Outlet } from 'react-router-dom';
import { useData } from '../../hook';
import { DotIndicators } from '../DotIndicators';

export const CrewLayout = () => {
  const { getTabs } = useData();
  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>
      <DotIndicators dots={getTabs('crew')} />
      <Outlet />
    </main>
  );
};

export default CrewLayout;
