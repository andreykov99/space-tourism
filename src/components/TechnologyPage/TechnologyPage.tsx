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
      <picture id="technology-image">
        <img src={images.portrait} alt="the technology" />
      </picture>
      <article
        className="technology-description flow"
        id="technology-tab"
        tabIndex={0}
        role="tabpanel"
      >
        <header className="flow flow--space-small">
          <h2 className="fs-600 ff-sans uppercase">The terminology...</h2>
          <p className="fs-700 uppercase ff-serif">{name}</p>
        </header>
        <p>{description}</p>
      </article>
    </>
  );
};

export default TechnologyPage;
