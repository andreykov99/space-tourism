import { Outlet } from 'react-router-dom';
import { useBackground } from '../../hook';

export const CrewLayout = () => {
  const { changeBg } = useBackground();
  changeBg('crew');
  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>
      {/* <DotIndicators /> */}
      <Outlet />
    </main>
  );
};

export default CrewLayout;
