import { useLayoutEffect, useState } from 'react';

export const useBackground = () => {
  const [bg, setBg] = useState('');

  const changeBg = (newBg: string) => {
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
