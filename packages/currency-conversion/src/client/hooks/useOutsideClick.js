import {useEffect} from 'react';

const useOutsideClick = (ref, handler) => {
  const handle = e => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      handler(e);
    }
  };

  useEffect(
    () => {
      document.addEventListener('mousedown', handle, true);
      return () => {
        document.removeEventListener('mousedown', handle, true);
      };
    },
    [handler]
  );
};

export default useOutsideClick;
