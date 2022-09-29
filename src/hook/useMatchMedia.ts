import { useState, useLayoutEffect } from 'react';

const queries = [
  '(max-width: 559.99px)',
  '(min-width: 560px) and (max-width: 719.99px)',
  '(min-width: 720px)',
];
const defaultMedia = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
};

const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));
  const getValues = () => mediaQueryLists.map((item) => item.matches);

  const [values, setValues] = useState<boolean[]>(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);
    mediaQueryLists.map((item) => item.addEventListener('change', handler));

    return () => {
      mediaQueryLists.map((item) =>
        item.removeEventListener('change', handler)
      );
    };
  });

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, item, index) => ({
      ...acc,
      [item]: values[index],
    }),
    defaultMedia
  );
};

export default useMatchMedia;
