import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useData } from '../hook';

export const withIndex = (Component: React.ComponentType) => () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, page, tab] = location.pathname.split('/');
  const isIndex = !tab;
  const { getTabs } = useData();
  const tabs = getTabs(page);
  useEffect(() => {
    if (isIndex) navigate(tabs[0]);
  });
  return isIndex ? <p>Loading...</p> : <Component />;
};
