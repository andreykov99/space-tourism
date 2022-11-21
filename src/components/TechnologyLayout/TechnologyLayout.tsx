import { Outlet } from 'react-router-dom';
import { useBackground } from '../../hook';

export interface TechnologyLayoutProps {}

export const TechnologyLayout = ({}: TechnologyLayoutProps) => {
  const { changeBg } = useBackground();
  changeBg('technology');
  return (
    <main className="grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span>Space launch 101
      </h1>
      {/* <NumberIndicators /> */}
      <Outlet />
    </main>
  );
};

export default TechnologyLayout;
