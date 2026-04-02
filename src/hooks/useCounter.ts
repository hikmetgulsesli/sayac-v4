import { useState, useEffect, useCallback } from 'react';
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

/**
 * Custom hook for managing counter state with localStorage persistence
 * Handles increment (+1), decrement (-1), reset (to 0)
 * Loads from localStorage on mount, defaults to 0
 * Handles errors (SecurityError, QuotaExceededError)
 */
export function useCounter(): UseCounterReturn {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    setLoading(true);
    setError(null);

    const saved = getStorageItem(STORAGE_KEY);
    if (saved !== null) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed)) {
        setCount(parsed);
      }
    }
    setLoading(false);
  }, []);

  // Persist to localStorage whenever count changes
  useEffect(() => {
    if (!loading) {
      const success = setStorageItem(STORAGE_KEY, count.toString());
      if (!success) {
        setError('localStorage yazma hatası');
      }
    }
  }, [count, loading]);

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

  return {
    count,
    increment,
    decrement,
    reset,
    loading,
    error,
  };
}
