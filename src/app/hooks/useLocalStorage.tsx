import { useEffect, useState } from 'react';

type useLocalStorageProps = {
  key: string;
  init: string;
};

export const useLocalStorage = ({ key, init }: useLocalStorageProps) => {
  const [localStorageKey, setLocalStorageKey] = useState<string>(() => {
    const localStorageValue = localStorage.getItem(key);
    return localStorageValue ? localStorageValue : init;
  });
  useEffect(() => {
    localStorage.setItem(key, localStorageKey);
  }, [key, localStorageKey]);
  
  // 'as const' defines that the order of this array will never change
  return [localStorageKey, setLocalStorageKey] as const;
};
