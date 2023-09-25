import { useCallback, useEffect } from 'react';

export const useDebounce = (callback, delay, dependencies) => {
  let timeOut;

  const caller = () => {
    if (timeOut) clearTimeout(timeOut);
    callback();
  };

  const cachedCallBack = useCallback(caller, dependencies);

  useEffect(() => {
    timeOut = setTimeout(cachedCallBack, delay);

    return () => clearTimeout(timeOut);
  }, [cachedCallBack, delay]);

  return [cachedCallBack, timeOut];
};
