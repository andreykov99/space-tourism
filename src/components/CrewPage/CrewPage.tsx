import { useLocation } from 'react-router-dom';
import { ICrewData, useData } from '../../hook/useData';

export const CrewPage = () => {
  const location = useLocation();
  const { getPageData } = useData();
  const { name, role, bio, images } = getPageData(
    location.pathname
  ) as ICrewData;
  return (
    <>
      <article
        className="crew-details flow"
        id="commander-tab"
        role="tabpanel"
        tabIndex={0}
      >
        <header className="flow flow--space-small">
          <h2 className="fs-600 ff-serif uppercase">{role}</h2>
          <p className="fs-700 uppercase ff-serif">{name}</p>
        </header>
        <p>{bio}</p>
      </article>
      <picture id="commander-image">
        <source srcSet={images.webp} type="image/webp" />
        <img src={images.png} alt="Douglas Hurley" />
      </picture>
    </>
  );
};

export default CrewPage;
