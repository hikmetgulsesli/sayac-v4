import { useState, useEffect, useCallback, useRef } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';

const STORAGE_KEY = 'sayac-v4-count';

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  loading: boolean;
  error: string | null;
}

/** Load initial count from localStorage */
function getInitialCount(): number {
  const saved = getStorageItem(STORAGE_KEY);
  if (saved !== null) {
    const parsed = parseInt(saved, 10);
    if (!isNaN(parsed)) return parsed;
  }
  return 0;
}

/**
 * Custom hook for managing counter state with localStorage persistence
 * Handles increment (+1), decrement (-1), reset (to 0)
 * Loads from localStorage on mount, defaults to 0
 * Handles errors (SecurityError, QuotaExceededError)
 */
export function useCounter(): UseCounterReturn {
  const [count, setCount] = useState<number>(getInitialCount);
  const [error, setError] = useState<string | null>(null);
  const isFirstRender = useRef(true);

  // Persist to localStorage whenever count changes (skip first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const success = setStorageItem(STORAGE_KEY, count.toString());
    if (!success) {
      // Defer to avoid synchronous setState in effect
      setTimeout(() => setError('localStorage yazma hatası'), 0);
    }
  }, [count]);

  const increment = useCallback(() => {
    setCount(c => c + 1);
    setError(null);
  }, []);

  const decrement = useCallback(() => {
    setCount(c => c - 1);
    setError(null);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
    setError(null);
  }, []);

  // loading is false since we use lazy initialization
  const loading = false;

  return {
    count,
    increment,
    decrement,
    reset,
    loading,
    error,
  };
}
