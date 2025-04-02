import { useEffect, useState } from "react";

const useDebounce = (initialValue, delay) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(initialValue);
    }, delay);

    return () => clearTimeout(timerId);
  }, [initialValue, delay, setValue]);

  return value;
};

export default useDebounce;
