import React, { useEffect, useState } from 'react';

export default function useDelayedState(initialValue, delay = 1000) {
  const [firstValue, setFirstValue] = useState(initialValue);
  const [secondValue, setSecondValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondValue(firstValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [firstValue, delay]);

  const setValue = newValue => {
    setFirstValue(newValue);
  };

  return [firstValue, secondValue, setValue];
}
