import { useEffect, RefObject } from 'react';

type Handler = (evt: MouseEvent) => void;

const useOnClickOutside = (ref: RefObject<HTMLDivElement>, onClose: Handler, isOpened: boolean) => {
  useEffect(() => {
    if (!isOpened) return;
    const handleClick: Handler = evt => {
      if (!ref.current || ref.current.contains(evt.target as Node)) {
        return;
      }
      onClose(evt);
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, onClose, isOpened]);
};

export default useOnClickOutside;
