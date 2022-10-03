import { useLayoutEffect, useState } from 'react';

export const useBackground = () => {
  const [bg, setBg] = useState('');
  console.log('🚀 ~ file: useBackground.ts ~ line 5 ~ useBackground ~ bg', bg);

  const changeBg = (newBg: string) => {
    console.log(
      '🚀 ~ file: useBackground.ts ~ line 8 ~ changeBg ~ newBg',
      newBg
    );
    if (newBg !== bg) setBg(newBg);
  };
  useLayoutEffect(() => {
    if (bg != '') document.body.classList.toggle(bg);

    return () => {
      document.body.classList.toggle(bg);
    };
  }, [bg]);

  return { changeBg };
};
