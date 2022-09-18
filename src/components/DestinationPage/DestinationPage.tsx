import { useLocation } from 'react-router-dom';
import { useData } from '../../hook/useData';

export const DestinationPage = () => {
  const location = useLocation();
  const { getPageData } = useData();
  const data = getPageData(location.pathname);
  const id = data.name.toLowerCase();
  return (
    <>
      <picture id={`${id}-image`}>
        <source srcSet={data.images.webp} type="image/webp" />
        <img src={data.images.png} alt={`the ${id}`} />
      </picture>
      <article
        className="destination-info flow"
        id={`${id}-tab`}
        tabIndex={0}
        role="tabpanel"
      >
        <h2 className="fs-800 uppercase ff-serif">{data.name}</h2>
        <p>{data.description}</p>
        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{data.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">{data.travel}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default DestinationPage;
