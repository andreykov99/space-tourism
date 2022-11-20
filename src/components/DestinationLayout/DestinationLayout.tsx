import { Outlet } from 'react-router-dom';

export const DestinationLayout = () => {
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
