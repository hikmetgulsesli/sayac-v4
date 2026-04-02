import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react';
import { useCounter } from './useCounter';

describe('useCounter hook', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('increments count by 1', async () => {
    const { result } = renderHook(() => useCounter());
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('decrements count by 1', async () => {
    const { result } = renderHook(() => useCounter());
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });

  it('resets count to 0', async () => {
    const { result } = renderHook(() => useCounter());
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(2);

    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });

  it('loads initial value from localStorage', async () => {
    localStorage.setItem('sayac-v4-count', '42');
    const { result } = renderHook(() => useCounter());
    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.count).toBe(42);
  });

  it('falls back to 0 when localStorage has invalid value', async () => {
    localStorage.setItem('sayac-v4-count', 'not-a-number');
    const { result } = renderHook(() => useCounter());
    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.count).toBe(0);
  });

  it('falls back to 0 when localStorage throws error on mount', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('SecurityError');
    });

    const { result } = renderHook(() => useCounter());
    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.count).toBe(0);
  });

  it('persists count to localStorage when changed', async () => {
    const { result } = renderHook(() => useCounter());
    await waitFor(() => expect(result.current.loading).toBe(false));

    act(() => {
      result.current.increment();
    });

    expect(localStorage.getItem('sayac-v4-count')).toBe('1');
  });

  it('sets error when localStorage write fails', async () => {
    const { result } = renderHook(() => useCounter());
    await waitFor(() => expect(result.current.loading).toBe(false));

    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });

    act(() => {
      result.current.increment();
    });

    await waitFor(() => expect(result.current.error).toBe('localStorage yazma hatası'));
  });
});
