import data from './data.json';

export interface IDestinationData {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface ICrewData {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface ITechnologyData {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}
export type pageTypes = 'destination' | 'crew' | 'technology';

export interface IData {
  description: IDestinationData[];
  crew: ICrewData[];
  technology: ITechnologyData[];
}

export const useData = () => {
  const getPages = (pageName: pageTypes) => {
    return data[pageName];
  };
  const getTabs = (pageName: pageTypes) => {
    return getPages(pageName).map(
      (item: IDestinationData | ICrewData | ITechnologyData) => item.name
    );
  };
  const getPageData = (route: string) => {
    const [, page, name] = route.split('/');
    const pageDataArr = getPages(page);
    let index = pageDataArr.findIndex(
      (item) => item.name.toLowerCase() === name
    );
    if (index < 0) index = 0;
    return pageDataArr[index];
  };
  return { getTabs, getPageData };
};
