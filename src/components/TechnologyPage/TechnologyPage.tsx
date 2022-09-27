import { useLocation } from 'react-router-dom';
import { ITechnologyData, useData } from '../../hook/useData';

export const TechnologyPage = () => {
  const location = useLocation();
  const { getPageData } = useData();
  const { name, images, description } = getPageData(
    location.pathname
  ) as ITechnologyData;
  return (
    <>
      <picture id={'technology-image'}>
        <img src={images.portrait} alt={'the technology'} />
      </picture>
      <article
        className="technology-info flow"
        id={'technology-tab'}
        tabIndex={0}
        role="tabpanel"
      ></article>
    </>
  );
};

export default TechnologyPage;
