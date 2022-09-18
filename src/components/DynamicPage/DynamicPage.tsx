import { useLocation } from 'react-router-dom';
import pageData from '../../data.json';

export const DynamicPage = () => {
  const location = useLocation();
  const page = location.pathname.split('/');
  return (
    <main className="grid-container grid-container--destination flow">
      DynamicPage
    </main>
  );
};

export default DynamicPage;
