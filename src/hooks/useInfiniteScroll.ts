import { useEffect, RefObject } from 'react';

export const useInfiniteScroll = <T extends HTMLElement>(
  callback: () => void,
  ref: RefObject<T | null>
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback();
    });
    if (ref?.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [callback, ref]);
};
