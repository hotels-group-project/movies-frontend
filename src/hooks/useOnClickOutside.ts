import { useEffect, RefObject } from 'react';

type Handler = (evt: MouseEvent) => void;

const useOnClickOutside = (ref: RefObject<HTMLButtonElement>, onClose: Handler) => {
  useEffect(() => {
    const handleClick = (evt: MouseEvent) => {
      if (!ref.current || ref.current.contains(evt.target as Node)) {
        return;
      }
      onClose(evt);
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, onClose]);
};

export default useOnClickOutside;
