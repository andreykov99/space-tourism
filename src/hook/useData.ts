import data from './data.json';

export const useData = () => {
  const getTabs = (pageName: string) => {
    return data[pageName].map((item) => item.name);
  };
  const getPageData = (route: string) => {
    const [, page, name] = route.split('/');
    const pageDataArr = data[page];
    let index = pageDataArr.findIndex(
      (item) => item.name.toLowerCase() === name
    );
    if (index < 0) index = 0;
    return pageDataArr[index];
  };
  return { getTabs, getPageData };
};
