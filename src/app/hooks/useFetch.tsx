import { useEffect, useRef, useState } from 'react';

type UseFetchProps<T> = {
  url: RequestInfo;
  options?: RequestInit;
};

export const useFetch = <T,>({ url, options }: UseFetchProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const optionsRef = useRef(options);
  optionsRef.current = options;
  useEffect(() => {
    setLoading(false);
    setData(null)
    const controller = new AbortController();
    const { abort, signal } = controller;
    const fetchData = async () => {
      controller.abort;
      try {
        setLoading(true);
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`)
        const result = (await response.json()) as T;
        if (!signal.aborted) setData(result);
      } catch (error) {
        if (!signal.aborted && error instanceof Error)setError(error.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };
    fetchData();
    return () => {
      abort();
    };
  }, [url]);
  return { data, loading, error };
};
