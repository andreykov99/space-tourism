import { Outlet } from 'react-router-dom';
import { useBackground } from '../../hook';

export const DestinationLayout = () => {
  const { changeBg } = useBackground();
  changeBg('destination');
  return (
    <main className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>Pick your destination
      </h1>
      {/* <UnderlineIndicators /> */}
      <Outlet />
    </main>
  );
};

export default DestinationLayout;
