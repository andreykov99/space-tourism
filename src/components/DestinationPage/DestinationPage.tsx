import { useLocation } from 'react-router-dom';
import { IDestinationData, useData } from '../../hook/useData';

export const DestinationPage = () => {
  const location = useLocation();
  const { getPageData } = useData();
  const { name, images, description, distance, travel } = getPageData(
    location.pathname
  ) as IDestinationData;
  return (
    <>
      <picture id={'destination-image'}>
        <source srcSet={images.webp} type="image/webp" />
        <img src={images.png} alt={'the destination'} />
      </picture>
      <article
        className="destination-info flow"
        id={'destination-tab'}
        tabIndex={0}
        role="tabpanel"
      >
        <h2 className="fs-800 uppercase ff-serif">{name}</h2>
        <p>{description}</p>
        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">{travel}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default DestinationPage;
