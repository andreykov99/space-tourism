import { useState } from 'react';
import dataJson from './data.json';

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
  destination: IDestinationData[];
  crew: ICrewData[];
  technology: ITechnologyData[];
}

export const useData = () => {
  const [data, setData] = useState<IData | undefined>(dataJson);

  const getPages = (pageName: pageTypes) => {
    if (data) return data[pageName];
    throw new Error('something went wrong');
  };
  const getTabs = (pageName: pageTypes) => {
    return getPages(pageName).map(
      (item: IDestinationData | ICrewData | ITechnologyData) => item.name
    );
  };
  const getPageData = (route: string) => {
    const [, page, name] = route.split('/');
    if (page === 'destination' || page === 'crew' || page === 'technology') {
      const pageDataArr = getPages(page);
      let index = pageDataArr.findIndex((item) => item.name === name);
      // this line fix error with empty page on index route
      // if (index < 0) index = 0;
      return pageDataArr[index];
    }
    throw new Error(`page ${page} not found`);
  };
  return { getTabs, getPageData };
};
