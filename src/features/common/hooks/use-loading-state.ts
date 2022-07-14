import { useCallback, useEffect, useRef, useState } from 'react';

export function useLoadingState(
  threshold: number = 300
): [boolean, (value: boolean) => void] {
  const [isLoading, setIsLoadingPrivate] = useState(false);
  const timeoutRef = useRef<{ id?: NodeJS.Timeout }>({ id: undefined });
  useEffect(() => () => clearTimeout(timeoutRef.current.id));
  const setIsLoading = useCallback(
    (value: boolean) => {
      if (value) {
        if (!timeoutRef.current.id) {
          timeoutRef.current.id = setTimeout(
            () => setIsLoadingPrivate(true),
            threshold
          );
        }
      } else {
        setIsLoadingPrivate(false);
        clearTimeout(timeoutRef.current.id);
        timeoutRef.current.id = undefined;
      }
    },
    [threshold, timeoutRef]
  );
  return [isLoading, setIsLoading];
}
