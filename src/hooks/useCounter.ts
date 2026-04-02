import { useState, useEffect, useCallback } from 'react';

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export function useCounter(initialValue: number = 0): UseCounterReturn {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem('counter-value');
    return saved ? parseInt(saved, 10) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem('counter-value', count.toString());
  }, [count]);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
